let operation = prompt('Select 1. for addition, 2. for subtraction, 3. for multiplication and 4. for division.');

let num1 = prompt('Enter first  value');
let num2 = prompt('Enter second value');
let a = Number(num1);
let b = Number(num2);
let addition = a + b;
let subtraction = a-b;
let multiplication = a*b;
let division = a/b;
//console.log(operation);
//console.log(num1);
//console.log(num2);
//console.log(result);

if (operation === '1') {
  console.log(addition);
 
} else if (operation === '2') {
  console.log('The result of '+a+ '-'+ b+' is '+subtraction)
} else if (operation === '3') {
  console.log('The result of ' + a + '*' + b + ' is ' + multiplication)
} else if (operation === '4') {
  console.log('The result of ' + a + '/' + b + ' is ' + division)
} else{
  alert('You selected an invalid options')
}

