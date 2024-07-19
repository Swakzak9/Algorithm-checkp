
//The length of the sentence 
  const words= "Hi and how are you doing today"
console.log(words.length)


//for counting words seperated by space
function countSpaceWords(sentence) {
    return sentence.split(' ').length;
  }

  const sentence = "Be the x factor";
  console.log(countSpaceords(sentence));



 // The number of Vowels in a sentence
 function getVowel(str){
    const vowel = str.match(/[aeiou]/gi);
    return vowel? vowel.length: 0;
 }
 console.log(getVowel("Good morning my neighbors"))
 console.log(getVowel("Algorithm"))
