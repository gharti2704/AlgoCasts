#  --- Directions
#  Check to see if two provided strings are anagrams of eachother.
#  One string is an anagram of another if it uses the same characters
#  in the same quantity. Only consider characters, not spaces
#  or punctuation.  Consider capital letters to be the same as lower case
#  --- Examples
#  anagrams('rail safety', 'fairy tales') --> True
#  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
#  anagrams('Hi there', 'Bye there') --> False

def anagrams(stringA, stringB):
  strA = list(stringA)
  strB = list(stringB)
  strA.sort()
  strB.sort()
  s1 = ''.join(strA)
  s2 = ''.join(strB)

  return s1 == s2


print(anagrams('rail safety', 'fairy tales'))
