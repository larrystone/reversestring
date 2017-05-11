'use strict';

function reverseString(word) {
  word = String(word.trim());

  if (word === '') 
    return null;

  let reversedWord = reverse(word);
  
  if (word === reversedWord) 
    return true;
  else
    return reversedWord;
  
  }
  

  function reverse(word) {
    let reversedString = [];
    let words = word.split('');
    
    for (let i = words.length - 1; i >= 0; i--) {
      reversedString.push(words[i]);
    }

    return reversedString.join('');
  }

module.exports = reverseString