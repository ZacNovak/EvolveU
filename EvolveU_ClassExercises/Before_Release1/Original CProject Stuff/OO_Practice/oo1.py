
class Person:

	def __init__(self, first_name, last_name, age):
		self.first_name = first_name
		self.last_name = last_name
		self.age = age

	def birthday(self):
		self.age = self.age + 1
		return self.age

	@property
	def name(self):
		return self.first_name + " " + self.last_name