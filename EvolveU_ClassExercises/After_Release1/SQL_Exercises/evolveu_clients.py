 
import psycopg2

conn=psycopg2.connect("dbname='evolveu'")
cur = conn.cursor()
cur.execute("""SELECT * from clients""")
fetchall = cur.fetchall()

class Clients:

	def __init__(self, identification, name, email, city, birth_year):
		self.id = identification
		self.name = name
		self.email = email
		self.city = city
		self.birth_year = birth_year

object_array = []
for names in fetchall:
	object_array.append(Clients(names[0],names[1],names[2],names[3],names[4]))

print(object_array)

for objects in object_array:
	print(objects.name)




