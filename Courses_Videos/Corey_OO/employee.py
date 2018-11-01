
class Employee:

	num_of_emps = 0
	raise_amt = 1.04
	
	def __init__(self, first, last, pay):
		self.first = first
		self.last = last
		self.pay = pay
		self.email = first + '.' + last + '@company.com'

		Employee.num_of_emps +=1

	def fullname(self):
		return '{} {}'.format(self.first, self.last)


	def apply_raise(self):
		self.pay = int(self.pay*1.04)

	@classmethod
	def set_raise_amt(cls, amount):
		cls.raise_amt = amount 


emp_1 = Employee('Corey', 'Schafer', 50000)
emp_2 = Employee('Test', 'User', 60000)

Employee.set_raise_amt(1.05)
Employee.riase_


print(Employee.raise_amt)
print(emp_1.raise_amt)
print(emp_2.raise_amt)