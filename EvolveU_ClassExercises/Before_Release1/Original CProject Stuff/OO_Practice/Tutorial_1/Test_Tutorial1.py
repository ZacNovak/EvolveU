
import Tutorial1

class TestTutorial1(unittest.TestCase):

	def test_fullname(self):
		emp1 = Tutorial1.Employee('Corey', 'Schafer', 50000)
		emp2 = Tutorial1.Employee('Test', 'User', 60000)

		self.assertEqual(Tutorial1.fullname(emp1),"Corey Shafer")
 		self.assertEqual(Tutorial1.fullname(emp2),"Test User")
