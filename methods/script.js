// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın
//  Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

// Expected Output:

// consectetur.
// function funksiya (sentence , words){
//  let index = sentence.indexOf(words)
//  return index;
// }
// console.log(funksiya("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores." , "ipsum"));
// Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")
// function findLongestWord(sentence) {
//   let words = sentence.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (longestWord.length < words[i].length) {
//       longestWord=words[i];
//     }
//   }
//   return longestWord;
// }
// console.log(
//   findLongestWord("Lorem ipsum dolor sit, amet consectetur adipisicing elit.")
// );


//  Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"
// function convertToUpper(sentence) {
//   return sentence.toUpperCase();
// }

// // Funksiyanı yoxlayırıq
// console.log(convertToUpper("Hello World")); 
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}


console.log(reverseWords("Hello World!")); 
