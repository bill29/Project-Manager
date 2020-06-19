from flask import jsonify, request

def setStatusOffline(cursor, id):
    cursor.execute("UPDATE users SET status=0 WHERE status = 1;")
    return True

def setStatusOnline(cursor, id):
    cursor.execute("UPDATE users SET status=1 WHERE id={};".format(id))
    return True


def getUser(conn, username, password):
    cursor = conn.connect()
    user =  {"user" :{}, "status" : "failed"}
    query = "SELECT * FROM users WHERE username='{}' AND password='{}';".format(username, password)
    cursor.execute(query)
    result = cursor.fetchone()
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
    cursor.close()
    return user