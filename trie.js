var Node = require('./TrieNode.js').Node
var fs = require('fs')

class Trie {
  constructor(){
    this.wordCount = 0
    this.nodeCount = 1 // root node
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

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err){
	console.log("Error reading file")
	console.log(err)
	system.exit(-1)
    }

    // add data to trie
    data.trim()
	.split('\n')
	.forEach((word) => {
	    myTrie.add(word) 
	    console.log(word)
	})
    
    // Print stats
    myTrie.printStats()
})


