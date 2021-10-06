#  --- Directions
#  Given a string, return a new string with the reversed
#  order of characters
#  --- Examples
#  reverse('apple') === 'leppa'
#  reverse('hello') === 'olleh'
#  reverse('Greetings!') === '!sgniteerG'

def reverseString(string):
  return string[::-1]


print(reverseString('Greetings!'))
