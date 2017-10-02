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

  // Adds a given word to the Trie
  add(word, letterIndex){
    console.log('hi ADD')

    // CASE end-of-path:
    if(!children[word[letterIndex]]){
      // Create a node and increment the total node count
      children[word[letterIndex]] = new Node(trie)
      trie.nodeCount += 1
    }

    // CASE end-of-word:
    if (letterIndex == word.length-1){
      // If the word has never before been added to the trie...
      if(frequencyCount == 0){
        trie.wordCount += 1
      }

      // Increment the number of occurrances of this word
      children[word[letterIndex]].frequencyCount += 1
    }

    // RECURSE CASE: (not end of word)
    else{
      children[word[letterIndex]].add(word, letterIndex+1)
    }
  }

  // Finds a word within the Trie
  find(){}

  // Checks the existance of a word within the Trie
  exists(){}
}
