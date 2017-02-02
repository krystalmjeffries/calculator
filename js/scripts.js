var add = function(number1,number2) {
	return number1+number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1,number2);
alert(result);

var subtract = function(n1,n2){
  return n1-n2;
};
alert(subtract(parseInt(prompt("Enter a number:")),parseInt(prompt("Enter another number:"))));

var multiply = function(n1,n2){
  return n1*n2;
};
var n1 = parseInt(prompt("Please enter a number:"));
var n2 = parseInt(prompt("Please enter another number:"));
alert(multiply(n1,n2));

var divide = function(number1,number2) {
  return (number1/number2);
};

var number1 = (parseInt(prompt("Enter a number: ")));
var number2 = (parseInt(prompt("Enter another number: ")));

alert(divide(number1,number2));
