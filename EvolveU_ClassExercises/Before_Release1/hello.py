import oo_exercise1
import openpyxl
from openpyxl import Workbook, worksheet, load_workbook

workbook = load_workbook('cSpace_Bookingv1.xlsx')

sheetclients = workbook['Clients']
sheetfacilities = workbook['Facilities']
sheetrates = workbook['Rates']
sheetmonth = workbook['2018-11']

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
	ratedict = oo_exercise1.createRatesDictionary(sheetrates)
	facilitiesdict = oo_exercise1.createFacilitiesDictionary(sheetfacilities)
	clientdict = oo_exercise1.Client.createClientList(sheetclients)
	creditdict = oo_exercise1.Client.assigncredits(clientdict, ratedict, facilitiesdict,sheetmonth)

	html = """<H2> This is a table </H2>
	<Table border=2>
  		<tr>
  			<td>Person</td>
 			<td>Credits</td>
	</tr>
	"""

	for k in creditdict.keys():
		html = html + """<tr>"""
		html = html + """<td>""" + str(k) + """</td>"""
		html = html + """<td>""" + str(clientdict[k].credit) + """</td>"""
		html = html + """</tr>"""

	html = html + """</Table>"""
		
	return html
