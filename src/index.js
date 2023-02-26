
module.exports = function towelSort (matrix) {
  let arrayOfNumbers = [];
  if(matrix)
    for(let i = 0; i < matrix.length; i++){
      getValue(matrix[i], arrayOfNumbers, i % 2 == 1);
    }

  return arrayOfNumbers;
}

function getValue(matrix, arrayOfNumbers, isReversed){
  if (!isReversed){
    for (let i = 0; i < matrix.length; i++){
      arrayOfNumbers.push(matrix[i]);
    }
  } else {
    for (let i = matrix.length-1; i>=0; i--){
      arrayOfNumbers.push(matrix[i]);
    }
  }
}
