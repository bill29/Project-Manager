import mysql.connector
import csv
import importlib
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
	with open('add_data.csv', 'r', newline='') as csvfile1:
		reader = csv.DictReader(csvfile1)
	# print(reader)
		with open('rate.csv', 'w+', newline='') as csvfile:
			writer = csv.writer(csvfile, delimiter=' ',quotechar='|', quoting=csv.QUOTE_MINIMAL)
			for row1 in reader:
				arr1 = list()
				arr1.append(row1['id_user'])
				arr1.append(row1['id_movie'])
				arr1.append(row1['rate'])
				# print(arr1)
				writer.writerow(arr1)
			for row in rate_data:
				if row[2] is not None:
					arr = list()
					arr.append(row[0])
					arr.append(row[1])
					arr.append(row[2])
					writer.writerow(arr)
			# print(row)
		# with open('add')
	mycursor.close()
# load_data_from_db()
# print('nguyen minh dan')
# if __name__=='__main__':
# 	load_data_from_db()
# 	show_result()