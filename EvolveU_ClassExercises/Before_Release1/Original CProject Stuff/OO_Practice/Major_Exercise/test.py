wb = create_test_wb()

print(wb["Rates"])cd


def create_test_wb():
		wb = Workbook()
		wb.create_sheet("Clients")
		wb.create_sheet("Facilities")
		wb.create_sheet("Rates")
		wb.create_sheet("2018-07")
		wb.create_sheet("2018-08")
		wb.create_sheet("2018-09") 

		wsclients = wb["Clients"]
		wsclients.cell(row=2, column=1).value = 'Harry'
		wsclients.cell(row=3, column=1).value = 'Zac'
		wsclients.cell(row=4, column=1).value = 'Julia'

		wsrates = wb["Rates"]
		wsrates.cell(row=2, column=2).value = 'Meeting'
		wsrates.cell(row=3, column=2).value = 'Desk'
		wsrates.cell(row=4, column=2).value = 'Gallery'

		wsrates.cell(row=2, column=3).value = 1
		wsrates.cell(row=3, column=3).value = 5
		wsrates.cell(row=4, column=3).value = 3

		wscalendar = wb["2018-08"]
		wscalendar.cell(row=1, column=2).value = 'Room a'
		wscalendar.cell(row=1, column=3).value = 'Room b'
		wscalendar.cell(row=1, column=4).value = 'Room c'

		wscalendar.cell(row=2, column=2).value = 'Harry'
		wscalendar.cell(row=2, column=3).value = 'Harry'
		wscalendar.cell(row=2, column=4).value = None

		wscalendar.cell(row=3, column=2).value = 'Zac'
		wscalendar.cell(row=3, column=3).value = 'Larry'
		wscalendar.cell(row=3, column=4).value = None

		wscalendar.cell(row=4, column=2).value = 'Larry'
		wscalendar.cell(row=4, column=3).value = 'Jack'
		wscalendar.cell(row=4, column=4).value = 'Julia'

		wscalendar.cell(row=5, column=2).value = 'Harry'