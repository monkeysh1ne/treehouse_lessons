# Print out that we're adding two numbers together.
# And then print out the sum of these numbers.

def add(num1, num2)
	puts "Adding #{num1} and #{num2} produces:"
	return num1 + num2
end

# don't forget to call the method!
puts add(12,3)
puts add(1,18)
puts add(6,7)
puts add(9,3.4)