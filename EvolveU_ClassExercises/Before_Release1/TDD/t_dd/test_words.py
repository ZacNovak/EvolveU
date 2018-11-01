
print("Hello world!")

# Begin tdd

import unittest
import words

class TestDates(unittest.TestCase):


	def test_words(self):
		self.assertEqual('Larry.Shumlich@mail.com', words.email('Larry', 'Shumlich'))
		self.assertEqual('Jack.Ross@mail.com', words.email('Jack', 'Ross'))
		self.assertEqual('Dale.James@mail.com', words.email('Dale', 'James'))
		self.assertEqual('Last.First@mail.com', words.email('Last', 'First'))


