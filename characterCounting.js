function countLetters(words) {
  var output = {};
  var noSpaces = words.split(" ").join("").toLowerCase();

  for (var i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
}
