
import unittest
import cspace

class TestDates(unittest.TestCase):

	def test_getRowNumber(self):
		self.assertEqual(cspace.getRowNumber('2018-07-02'),('2018-07', '3'))
		self.assertEqual(cspace.getRowNumber('2018-08-18'),('2018-08', '19'))
		self.assertEqual(cspace.getRowNumber('2018-09-25'),('2018-09', '26'))
		self.assertEqual(cspace.getRowNumber('2018-10-28'),('2018-10', '29'))
		self.assertEqual(cspace.getRowNumber('2018-11-07'),('2018-11', '8'))

	def test_getEmptyRooms(self):
		self.assertEqual(cspace.getEmptyRooms('2018-08', '19'),['Second Floor Hall', 'Third Floor Hall'])
		self.assertEqual(cspace.getEmptyRooms('2018-08', '20'),['First Floor Hall', 'Second Floor Hall', 'Third Floor Hall'])
		self.assertEqual(cspace.getEmptyRooms('2018-08', '8'), [])

	def test_printRooms(self):
		self.assertEqual(cspace.printRooms('2018-08-18'),['Second Floor Hall', 'Third Floor Hall'])
		self.assertEqual(cspace.printRooms('2018-08-19'),['First Floor Hall', 'Second Floor Hall', 'Third Floor Hall'])
		self.assertEqual(cspace.printRooms('2018-08-07'), [])