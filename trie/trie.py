#Credit https://www.geeksforgeeks.org/trie-insert-and-search/
import sys

class TrieNode:
  """
    Generates a TrieNode (Node In a Tree)
  """

  def __init__(self):
    self.children = [None]*26
    self.isEndOfWord = False

class Trie:
  """
    Creates a Trie data structure
  """

  def __init__(self):
    self.root = self.getNode()

  #Utilize TrieNode Class
  def getNode(self):
    return TrieNode()

  def _getCharString(self, char):
    #Turns characters into numbers (ord)
    #https://docs.python.org/3/library/functions.html#ord
    #0 Indexed
    return ord(char) - ord('a')

  def insert(self,key):
    """
      Insert keys into the tree
    """
    tSearch = self.root
    length = len(key)

    for depth in range(length):
      index = self._getCharString(key[depth])
      if not tSearch.children[index]:
        tSearch.children[index] = self.getNode()
      tSearch = tSearch.children[index]
    
    tSearch.isEndOfWord = True

  def search(self, term):
    
    tSearch = self.root
    length = len(term)

    for depth in range(length):
      index = self._getCharString(term[depth])
      if not tSearch.children[index]:
        return False
      tSearch = tSearch.children[index]

    #Returns True if At the End (undefined)
    return tSearch != None and tSearch.isEndOfWord


def main(argv):
  """
    Utilize sys.argv to input multiple variables
  """
  tree = Trie()

  print('Arguments Given are: ')
  for arg in argv:
    print(arg)
    tree.insert(arg)

  dead = True

  while dead:
    search_input = input('What do you want to look for? ')
    print(tree.search(search_input))  
    

if __name__ == '__main__':
  main(sys.argv[1:])