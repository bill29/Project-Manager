import mysql.connector
import csv
import importlib
from CF import *
mydb = mysql.connector.connect(
  host="localhost",	
  user="vuahuyen97",
  password="password",
  database="qtda"
)
# print(mydb)

def load_data_from_db():
	mycursor = mydb.cursor()
	mycursor.execute("SELECT id_user, id_movie, rate FROM rate ")
	rate_data = mycursor.fetchall()
	# print(rate_data)
	with open('rate.dat', 'w+', newline='') as csvfile:
		writer = csv.writer(csvfile, delimiter=' ',quotechar='|', quoting=csv.QUOTE_MINIMAL)
		for row in rate_data:
			writer.writerow(row)
			# print(row)


if __name__=='__main__':
	load_data_from_db()
	show_result()