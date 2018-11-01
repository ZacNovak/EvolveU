 
print("Hello world!")

# Begin tdd
import my_math
import unittest

class TestDates(unittest.TestCase):

	def test_one(self):
		print("i'm in test_one")

	def test_two(self):
		print("i'm in test_two")

	def test_math(self):
		a=2
		b=3
		self.assertEqual(my_math.multiply(a,b),6)

		c=4
		d=6
		self.assertEqual(my_math.multiply(c,d),24)

		e=5
		f=8
		self.assertEqual(my_math.multiply(e,f),40)

		g=0
		h=4
		self.assertEqual(my_math.multiply(g,h),0)

		i=4
		j=0
		self.assertEqual(my_math.multiply(i,j),0)

		k=4
		l=-4
		self.assertEqual(my_math.multiply(k,l),-16)

		m=-3
		n=5
		self.assertEqual(my_math.multiply(m,n),-15)

		o=-20
		p=-20
		self.assertEqual(my_math.multiply(o,p), 400)