import psycopg2

conn=psycopg2.connect("dbname='evolveu'")
cur = conn.cursor() 

def grab_client_table():
	cur.execute("""SELECT * from clients""")
	fetchall = cur.fetchall()

	# cur.close()
	# conn.close()

	return fetchall


def grab_july_credits_table():
	cur.execute("""SELECT name, month, credits from clients full join credits on clients.client_id = credits.client_id where month in ('2018-07')""")
	fetchall = cur.fetchall()

	# cur.close()
	# conn.close()

def grab_no_credits_table():
	cur.execute("""SELECT name, month, credits from clients full join credits on clients.client_id = credits.client_id where credits is null""")
	fetchall = cur.fetchall()
	
	# cur.close()
	# conn.close()

	return fetchall

def grab_no_clients_table():
	cur.execute("""SELECT name, month, credits from clients full join credits on clients.client_id = credits.client_id where clients is null""")
	fetchall = cur.fetchall()
	
	# cur.close()
	# conn.close()

	return fetchall

def grab_one_client(reqID):
	cur.execute("""SELECT * from clients where client_id=(%s);""", (reqID,))
	fetchall = cur.fetchall()
	
	# cur.close()
	# conn.close()

	return fetchall