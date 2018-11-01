import psycopg2
import database

class Clients:

	def __init__(self, identification, name, email, city, birth_year):
		self.id = identification
		self.name = name
		self.email = email
		self.city = city
		self.birth_year = birth_year

	@staticmethod
	def grab_data():
		clients_array = []
		
		fetchall = database.grab_client_table()
		for data in fetchall:
			clients_array.append(Clients(data[0],data[1],data[2],data[3],data[4]))

		return clients_array

	@staticmethod
	def grab_client(identification):

		data = database.grab_one_client(identification)
		client = Clients(data[0][0],data[0][1],data[0][2],data[0][3],data[0][4])
		return client



class Credits:

	def __init__(self, name, month, credits):
		self.name = name
		self.month = month
		self.credits = credits

	def grab_july_data():
		clients_array = []
		
		fetchall = database.grab_july_credits_table()
		
		for data in fetchall:
			clients_array.append(Credits(data[0],data[1],data[2]))

		return clients_array

	def no_credits():
		clients_array = []
		
		fetchall = database.grab_no_credits_table()
		
		for data in fetchall:
			clients_array.append(Credits(data[0],data[1],data[2]))

		return clients_array

	def no_clients():
		clients_array = []
		
		fetchall = database.grab_no_clients_table()
		
		for data in fetchall:
			clients_array.append(Credits(data[0],data[1],data[2]))

		return clients_array