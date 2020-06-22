from flask import Flask, jsonify, request, abort
from flask_cors import CORS, cross_origin
import mysql.connector
from mysql.connector import errorcode
from database import setStatusOffline
# from data import load_data_from_db
# from CF import CF,show_result
app = Flask(__name__)
#connect with mysql
CORS(app)
try:
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="password",
        database="QLDA"
    )
except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)


@app.route('/')
def index():
    return "This is SERVER by FLASK-PYTHON3!"



#login sucsess
@app.route('/api/logged_in', methods=['GET'])
def logged_in():
    user =  {"user" :{}, "status" : "LOGGED_OUT"}
    cursor = conn.cursor(buffered=True)
    query = "SELECT * FROM users WHERE status = 1;"
    cursor.execute(query)
    result = cursor.fetchone()
    if result is not None:
        user = {
            "user": {
                "id": result[0],
                "username": result[1],
                "password": result[2],
                "email": result[3],
                "status": result[4] 
            },
            "status": "LOGGED_IN"
        }
    cursor.close()
    return jsonify(user)
#logout status
@app.route('/api/logout', methods=['GET'])
def handle_logout():
    cursor = conn.cursor()
    setStatusOffline(cursor, request.args.get("id"))
    conn.commit()
    cursor.close()
    return jsonify({"status":"success"})
#login 
@app.route('/api/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def handle_login():
    user =  {"user" :{}, "status" : "failed"}
    cursor = conn.cursor()
    account = request.get_json()
    print(account)
    query = "SELECT * FROM users WHERE username='{}' AND password='{}';".format(account["username"], account["password"])
    cursor.execute(query)
    result = cursor.fetchone()
    if result is not None:
        #update status to user
        cursor.execute("UPDATE users SET status=1 WHERE id={};".format(result[0]))
        conn.commit()   
        user = {
            "user": {
                "id": result[0],
                "username": result[1],
                "password": result[2],
                "email": result[3],
                "status": result[4] 
            },
            "status": "success"
        }

        print("Login success! Welcome {}.".format(result[1]))
    else:
        print("Log in failed!")

    cursor.close()
    return jsonify(user)




# get movie by id movie (is like not yet)
@app.route('/api/get/movie/<id>', methods =['POST', 'GET'])
def get_movie_by_id(id):
    cursor = conn.cursor()
    query = "SELECT movies.*, rate.isLiked FROM movies,rate WHERE movies.id = {} AND movies.id = rate.id_movie;".format(id)
    cursor.execute(query)
    result = cursor.fetchall()
    # print(result)
    # return 'succsess'
    if result is not None:
        item = result[0]
        movie = {
            "id" : item[0],
            "name": item[1],
            "description": item[2],
            "rateScore": item[3],
            "actors": item[4],
            "imageUrl": item[5],
            "isLike": item[6]
            #is_like khong phai la lay tu item.rate nhu la trong server.js
            #ma la phai lay tu trong bang rate, co user, co item thi moi biet duoc
        }
    cursor.close()
    return jsonify(movie)
# get movie by all, isLike not yet
@app.route('/api/movies/all', methods =['GET'])
def get_movie_all():
    cursor = conn.cursor()
    query = "SELECT * FROM movies ;"
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    arr = list()
    if result is not None:
        for row in result:
            arr.append(
                {
                     "id" : row[0],
                    "name": row[1],
                    "description": row[2],
                    "rateScore": row[3],
                    "actors": row[4],
                    "imageUrl": row[5]
                }
            )
        return jsonify({'list':arr, 'status':'success'})
    else:
        return jsonify({'list':arr, 'status':'failed'})

@app.route('/api/movies/all/<id>', methods =['GET'])
def get_movie_all_by_user(id):
    cursor = conn.cursor()
    query = "SELECT movies.*, rate.isLiked FROM movies,rate WHERE movies.id = rate.id_movie AND rate.id_user = {};".format(id)
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    arr = list()
    if result is not None:
        for row in result:
            arr.append(
                {
                     "id" : row[0],
                    "name": row[1],
                    "description": row[2],
                    "rateScore": row[3],
                    "actors": row[4],
                    "imageUrl": row[5],
                    "isLiked": row[6]
                }
            )
        return jsonify({'list':arr, 'status':'success'})
    else:
        return jsonify({'list':arr, 'status':'failed'})


#get favourite movie by id from database
@app.route('/api/favorites/<id>', methods =['POST', 'GET'])
def get_favorites(id):
    cursor = conn.cursor()
    query = "SELECT movies.*, rate.isLiked FROM movies, rate WHERE movies.id = rate.id_movie AND rate.id_user={} AND rate.isLiked = 1;".format(id)
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    if result is not None:
        arr = list()
        if result is not None:
            for row in result:
                arr.append(
                    {
                        "id" : row[0],
                        "name": row[1],
                        "description": row[2],
                        "rateScore": row[3],
                        "actors": row[4],
                        "imageUrl": row[5],
                        "isLiked": row[6],
                    }
                )
            return jsonify({'list':arr, 'status':'success'})
        else:
            return jsonify({'list':arr, 'status':'failed'})


@app.route('/api/update/like/<userId>/<movieId>', methods=['GET'])
def update_like(userId, movieId):
    query = 'UPDATE rate SET isLiked=1 WHERE id_user={} AND id_movie={};'.format(userId, movieId)
    cursor = conn.cursor()
    cursor.execute(query)
    conn.commit()
    return jsonify({"status": 'success'})

@app.route('/api/update/dislike/<userId>/<movieId>', methods=['GET'])
def update_dislike(userId, movieId):
    query = 'UPDATE rate SET isLiked=0 WHERE id_user={} AND id_movie={};'.format(userId, movieId)
    cursor = conn.cursor()
    cursor.execute(query)
    conn.commit()
    return jsonify({"status": 'success'})



#load data from database to file.csv

@app.route('/api/recommend/<id>', methods =['POST', 'GET'])
def recommend(id):
    #load data from database to file.csv
    load_data_from_db()
    id_movie = show_result(id)
    if id_movie is None:
        return 'CHUA TIM THAY GOI Y'
    else:
        return id_movie
    
if __name__ == '__main__':
    app.run(debug=True)