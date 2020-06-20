import mysql.connector
import csv
import importlib
from CF import *
mydb = mysql.connector.connect(
  host="localhost",	
  user="root",
  password="1",
  database="QLDA"
)
# print(mydb)

def load_data_from_db():
	mycursor = mydb.cursor()
	mycursor.execute("SELECT * FROM rate")
	rate_data = mycursor.fetchall()
	# print(rate_data)
	with open('rate.csv', 'w+', newline='') as csvfile:
		writer = csv.writer(csvfile, delimiter=' ',quotechar='|', quoting=csv.QUOTE_MINIMAL)
		for row in rate_data:
			arr = list()
			arr.append(row[0])
			arr.append(row[1])
			arr.append(row[2])

			writer.writerow(arr)
			# print(row)
	mycursor.close()
# load_data_from_db()
# if __name__=='__main__':
# 	load_data_from_db()
# 	show_result()