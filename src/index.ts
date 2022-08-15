function prepend(numSpaces: number, inputString: string) {
  let i = 0;
  while (i < numSpaces){
    inputString = " " + inputString;
    i++;
  }
  return inputString;
}

console.log("start" + prepend(7, "sauce"))
