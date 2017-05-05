function countLetters(words) {
  var output = {};
  var lowerCase = words.toLowerCase();
  
  for (var i = 0; i < lowerCase.length; i++) {
    var character = lowerCase[i];
    if (character !== " ") {
      if (output[character]) {
        output[character].push(i);
      } else {
        output[character] = [i];
      }
    } 
  } 

  return output;

} 

console.log(countLetters("Alysia is here"));

