const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TrieNode {
  constructor(value){
    this.children = {};
    this.value = value;
    this.end = false;
  }
}

class Trie {
  constructor(){
    this.root = new TrieNode('root');
  }

  /**
   * Calls the previously defined TrieNode
   */
  getNode(){
    return new TrieNode()
  };

  /**
   * 
   * @param {String} key Key Inserted into the Trie 
   */
  insert(key){
    let trieSearch = this.root;
    for (let i = 0; i < key.length; i++){
      let keystr = key[i]
      if (!trieSearch.children[keystr]){
        trieSearch.children[keystr] = this.getNode(keystr);
      }
      trieSearch = trieSearch.children[keystr];
    }
    trieSearch.end = true;
  }

  /**
   * 
   * @param {String} key Key to search if it exists
   * @return {Bool} Whether the key is within the Trie or Not
   */
  search(key){
    let trieSearch = this.root;
    for (let i = 0; i < key.length; i ++){
      let keyStr = key[i];
      if (!trieSearch.children[keyStr]){
        return false;
      } 
      trieSearch = trieSearch.children[keyStr];
    }
    return trieSearch.end
  }

}

function init() {
  let trie = new Trie();
  let inputs = ["Hello", "Hellish", "Hell","the", "these", "thou"];

  inputs.forEach(input => trie.insert(input));

  function searchPrompt(){
    console.log(inputs)
    rl.question('What would you like to search? ', (answer) => {
        console.log(trie.search(answer))
      searchPrompt()
    });
  }

  searchPrompt()
}

init()
