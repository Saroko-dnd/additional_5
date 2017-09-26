module.exports = function check(str, bracketsConfig) {
  const stackForBrackets = [];
  let currentBracketsPair = null;

  for (let index = 0; index < str.length; ++index){
    currentBracketsPair = bracketsConfig.find((foundBrackets) => {return foundBrackets.includes(str[index]);});

    if (!stackForBrackets.length){
      if (str[index] !== currentBracketsPair[0]){
        return false;
      }else{
        stackForBrackets.push(str[index]);
      }
    }else if (str[index] === currentBracketsPair[1]){
      if (stackForBrackets[stackForBrackets.length - 1] === currentBracketsPair[0]){
        stackForBrackets.pop(); 
      }else if(currentBracketsPair[1] === currentBracketsPair[0]){
        stackForBrackets.push(str[index]);
      }else{
        return false;
      }
    }else{
      stackForBrackets.push(str[index]);
    }
  }

  return !stackForBrackets.length;
}
