'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 0; i <= number; i++){
	sum = sum + i;
}
console.log(Factorial(5));

function Factorial(n){
	if(n <= 1){
		return n;
	}else{
		return n * Factorial(n - 1);
	}
}
