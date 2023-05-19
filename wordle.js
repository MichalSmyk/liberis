function compareWords(target, guess) {
    let result = "";
    const targetChar = target.split("");
    const guessChar = guess.split("");
    const machedChars = []; // keep track of the chars that alredy have been mached
  
    for (let i = 0; i < target.length; i++) {
      if (targetChar[i] === guessChar[i]) {
        result += "2";
      } else {
        const index = targetChar.findIndex((char, j) => {
          return char === guessChar[i] && !machedChars.includes(j);
        });
  
        if (index !== -1) {
          machedChars.push(index);
          result += "1";
        } else {
          result += "0";
        }
      }
    }
  
    return result;
  }
  
  module.exports = compareWords;
  