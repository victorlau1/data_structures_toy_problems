#CREDIT TO https://leetcode.com/problems/generate-parentheses/discuss/10096/4-7-lines-Python
import sys

def generateParenthesis(n):
  def addParenthesis(string, left, right, parens=[]):
    result_string = string
    print(string, left, right, parens)
    if left: addParenthesis(result_string + '(', left - 1, right)
    if right > left: addParenthesis(result_string + ')', left, right - 1)
    if not right: parens += result_string,
    return parens
  return addParenthesis('', n, n)

def main(n):
  print('{}----{} for all the Parenthesis we would ever want!'.format(generateParenthesis(n),n))
  
if __name__ == '__main__':
  main(int(sys.argv[1]))