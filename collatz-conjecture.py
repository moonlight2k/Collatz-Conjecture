# This replicates the Collatz conjucture where you take any number,
#  if it's even you divide by 2, if it's odd you multiply by 3 and add 1, 
#  and you repeat the process till you get 0

import os
import matplotlib.pyplot as plt

random_Number = int(input("Enter the initial value: "))
values = []
loop_count = 0

while random_Number != 1:
#  1 is used above to create an output, the correct number is 0 which is an infinite loop
    loop_count += 1
    if random_Number % 2 == 0:
        even = random_Number // 2
        values.append(even)
        random_Number = even 
    else:
        odd = random_Number * 3 + 1
        values.append(odd)
        random_Number = odd 

valuesString = '  ,  '.join(map(str, values))

# Write the values to a text file
with open('values.txt', 'w') as file:
    file.write(valuesString)

print('Values have been written to values.txt')

# Sort the array in descending order
sorted_values = sorted(values, reverse=True)

# Get the five largest numbers
five_largest = sorted_values[:5]

print("The five largest numbers are:", five_largest)

# Create an array of positions for the x-axis
positions = list(range(1, len(values) + 1))

# Plot the chart
plt.plot(positions, values, marker='o')
plt.xlabel('Position in Loop')
plt.ylabel('Number')
plt.title('Chart of Values')
plt.grid(True)
plt.show()

print("The loop ran",loop_count,"times")