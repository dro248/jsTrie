class Node {
  constructor(trie){
    this.children = {
      "a": null, "b": null, "c": null, "d": null, "e": null, "f": null, "g": null,
      "h": null, "i": null, "j": null, "k": null, "l": null, "m": null, "n": null,
      "o": null, "p": null, "q": null, "r": null, "s": null, "t": null, "u": null,
      "v": null, "w": null, "x": null, "y": null, "z": null,
    },
    this.frequencyCount = 0,
    this.trie = trie
  }

  // (Recursively) Adds a given word to the Trie
  addWord(word, letterIndex){
    // CASE end-of-path:
    if(!this.children[word[letterIndex]]){
      // Create a node and increment the total node count
      this.children[word[letterIndex]] = new Node(this.trie)
      this.trie.nodeCount += 1
    }

    // CASE end-of-word:
    if (letterIndex == word.length-1){
      // If the word has never before been added to the trie...
      if(this.frequencyCount == 0){
        this.trie.wordCount += 1
      }

      // Increment the number of occurrances of this word
      this.children[word[letterIndex]].frequencyCount += 1
    }

    // RECURSE CASE: (not end of word)
    else{
      this.children[word[letterIndex]].addWord(word, letterIndex+1)
    }
  }

  // (Recursively) Finds a word within the Trie
  findWord(){}

  // Checks the existance of a word within the Trie
  exists(){}
}

exports.Node = Node
