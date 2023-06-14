function eliminateUnsetBits(number) {
  let numArr = number.split("");
  
  const augmentedArr = numArr.filter(x => x != 0);
  let result = 0;

  for (let i = 0; i < augmentedArr.length; i++) {
    result += Number(augmentedArr[i]) * Math.pow(2, i);
  }
  
  // console.log(result);
  return result;
}
eliminateUnsetBits("11010101010101");