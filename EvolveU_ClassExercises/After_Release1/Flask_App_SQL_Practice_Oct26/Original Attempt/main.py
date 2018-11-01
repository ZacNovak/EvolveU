import psycopg2
from flask import Flask, render_template, jsonify

from allclients import Clients, Credits


# setup flask project
app = Flask(__name__)

#insert routes
@app.route('/') #127.0.0.1:5000
def index():
	return render_template('index.html')

@app.route('/allclients') #127.0.0.1:5000/allclients
def allclients():
	client_array = Clients.grab_data()
	return render_template('allclients.html', clients=client_array)


@app.route('/julycredits') #127.0.0.1:5000/julyclients
def julycredits():
	client_array = Credits.grab_july_data()
	return render_template('julycredits.html', clients=client_array)

@app.route('/nocredits') #127.0.0.1:5000/nocredits
def nocredits():
	client_array = Credits.no_credits()
	return render_template('nocredits.html', clients=client_array)

@app.route('/noclients') #127.0.0.1:5000/noclients
def noclients():
	client_array = Credits.no_clients()
	return render_template('noclients.html', clients=client_array)

@app.route('/client/<identification>', methods=['GET'])
def identification(identification=None):
	client = Clients.grab_client(identification)
	print("This is client:", client)
	print("This is client:", client.__dict__)
	return jsonify(client.__dict__)


# #part of set up
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

