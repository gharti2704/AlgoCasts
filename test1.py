# Function to convert the jumbled
# into digits
def findNumber(str):

  # Strings of digits 0-9
  stringNumbers = ["zero", "one", "two", "three",
                   "four", "five", "six", "seven",
                   "eight", "nine"]

  # Initialize vector
  digits = [0] * (10)

  # Initialize answer
  result = ""

  # Size of the string
  size = len(str)

  # Traverse the string
  for i in range(size):
    if (str[i] == 'z'):
      digits[0] += 1
    if (str[i] == 'w'):
      digits[2] += 1
    if (str[i] == 'g'):
      digits[8] += 1
    if (str[i] == 'x'):
      digits[6] += 1
    if (str[i] == 'v'):
      digits[5] += 1
    if (str[i] == 'o'):
      digits[1] += 1
    if (str[i] == 's'):
      digits[7] += 1
    if (str[i] == 'f'):
      digits[4] += 1
    if (str[i] == 'h'):
      digits[3] += 1
    if (str[i] == 'i'):
      digits[9] += 1

  # Update the elements of the vector
  digits[7] -= digits[6]
  digits[5] -= digits[7]
  digits[4] -= digits[5]
  digits[1] -= (digits[2] + digits[4] + digits[0])
  digits[3] -= digits[8]
  digits[9] -= (digits[5] + digits[6] + digits[8])

  # Print the digits into their
  # original format
  for i in range(10):
    for j in range(digits[i]):
      result += chr((i) + ord('0'))

  # Return answer
  return result

# # Driver Code
# if __name__ == '__main__':


str = "reuonnoinfe"

print(findNumber(str))
