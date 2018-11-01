def collatz(number):
		if number%2 == 0:
			number = number//2
			print(number)
			return number
		else:
			number = number*3+1
			print(number)
			return number

try:
    n = input("Enter number: ")
    while n != 1:
        n = collatz(int(n))
except ValueError:
    print('whoops, type an integer, bro.')