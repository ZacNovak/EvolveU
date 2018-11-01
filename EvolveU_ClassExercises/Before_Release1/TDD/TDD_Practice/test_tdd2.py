
import unittest
import tdd2
import datetime


class TestTddTwo(unittest.TestCase):

	def test_add_five(self):
		self.assertEqual(8, tdd2.add_five(3))
		self.assertEqual(12, tdd2.add_five(7))
		self.assertNotEqual(11, tdd2.add_five(7))

	def test_my_min(self):
		self.assertEqual(1,tdd2.my_min([1,2,3,4,5]))
		self.assertEqual(4,tdd2.my_min([4,8,1001,9,21]))

	def test_my_max(self):
		self.assertEqual(27, tdd2.my_max([12,23,27,21,9]))

	def test_has_string(self):
		self.assertEqual(["Mary had"], tdd2.has_string(["Mary had", "a little lamb", "little lamb", "Whose fleece",],"Mary"))

	def test_to_date(self):
		dt = tdd2.to_date("2010-08-02")
		self.assertIsInstance(dt, datetime.date)
		self.assertEqual(2010,dt.year)
		self.assertEqual(8,dt.month)
		self.assertEqual(2,dt.day)

	def test_date_diff(self):
		self.assertEqual(1, tdd2.date_diff("2018-09-02", "2018-09-01"))
		self.assertEqual(2080, tdd2.date_diff("2012-12-21", "2018-09-01"))

	def test_contains(self):
		self.assertTrue(tdd2.contains(['a','b','d'],"a"))

	def test_contents(self):
		self.assertEqual(6, tdd2.add_contents([1,2,3]))

	def test_lookup(self):
		self.assertEqual('one mine', tdd2.lookup({1:'one', 2:'two', 3:'three'} , 1))