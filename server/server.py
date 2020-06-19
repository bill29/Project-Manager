from flask import Flask, jsonify, request, abort
from flask_cors import CORS, cross_origin
import mysql.connector
from database import setStatusOffline

app = Flask(__name__)

CORS(app)

try:
    conn = mysql.connector.connect(
        host="localhost",
        user="vuahuyen97",
        password="password",
        database="qtda"
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
    return "Hello, World!"

@app.route('/api/logged_in', methods=['GET'])
def logged_in():
    user =  {"user" :{}, "status" : "LOGGED_OUT"}
    cursor = conn.cursor()
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

@app.route('/api/logout', methods=['GET'])
def handle_logout():
    cursor = conn.cursor()
    setStatusOffline(cursor, request.args.get("id"))
    conn.commit()
    cursor.close()
    return jsonify({"status":"success"})

@app.route('/api/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def handle_login():
    user =  {"user" :{}, "status" : "failed"}
    cursor = conn.cursor()
    account = request.get_json()
    query = "SELECT * FROM users WHERE username='{}' AND password='{}';".format(account["username"], account["password"])
    cursor.execute(query)
    result = cursor.fetchone()
    if result is not None:
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

if __name__ == '__main__':
    app.run(debug=True)