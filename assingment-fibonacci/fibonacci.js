//  Takes a number and returns an array containing that many numbers
// from the fibonacci sequence. Using an example input of 8,
// this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibArray(n) {
  const array = [0];
  let a = 1;
  let b = 1;
  let c = a + b;

  for (let i = 0; i < n - 1; i++) {
    array.push(a);
    a = b;
    b = c;
    c = a + b;
  }
  return array;
}
console.log(fibArray(1));
console.log(fibArray(2));
console.log(fibArray(3));
console.log(fibArray(8));

// function fibArrayRec(number) {
//   if ((number = 3)) {
//     return [0, 1, 1];
//   }
//   return [0, 1, 1];
// }
