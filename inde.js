
// let bag = ''
// for (let a = 1; a <= n; a++) {
//   if(a%2===0){
//     bag +=a
//   }
// }
function prime(n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    if (n % a === 0) {
      count++;
    }
  }
  return count === 2;
}
function cheakprime1(n) {
  for (let a = 1; a <= n; a++) {
    if (prime(a)) {
      console.log(a);
    }
  }
}

cheakprime1(30);
