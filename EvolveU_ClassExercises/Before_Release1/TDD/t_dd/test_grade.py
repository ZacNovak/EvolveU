import grade
import unittest

class TestDates(unittest.TestCase):
	def test_grade(self):
		self.assertEqual(grade.gradeTranslate(45),'F')
		self.assertEqual(grade.gradeTranslate(55),'C')
		self.assertEqual(grade.gradeTranslate(65),'B')
		self.assertEqual(grade.gradeTranslate(75),'B')
		self.assertEqual(grade.gradeTranslate(85),'A')
		self.assertEqual(grade.gradeTranslate(95),'A')