//  Takes a number and returns an array containing that many numbers
// from the fibonacci sequence. Using an example input of 8,
// this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibArray(number) {
  const array = [0, 1, 1];

  for (let i = 3; i < number; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  return array;
}

console.log(fibArray(8));
