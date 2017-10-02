var Node = require('./TrieNode.js').Node

class Trie {
  constructor(){
    this.wordCount = 0
    this.nodeCount = 1
    this.rootNode = new Node(this)
  }

  add(word){ this.rootNode.addWord(word.toLowerCase(), 0) }
  find(word){ this.rootNode.findWord(word.toLowerCase(), 0) }

  printStats(){
    console.log("WordCount: " + this.wordCount)
    console.log("NodeCount: " + this.nodeCount)
  }
}

var myTrie = new Trie()
myTrie.add("Hell")
myTrie.add("Hello")
myTrie.add("David")
myTrie.add("Cat")
myTrie.add("Cats")
myTrie.add("Catsitting")


myTrie.printStats()
console.log(myTrie.find("asdf"))
console.log(myTrie.find("Cat"))
