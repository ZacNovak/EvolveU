from flask import Flask, request, jsonify


app = flask.Flask(__name__)
app.config["DEBUG"] = True




@app.route('/<string:identification>', methods=['GET'])
def home(identification):
	if clients['id'] == identification:
		return jsonify(clients)
app.run() 
