let question;
question = prompt("Hello, What do you want to do? (add, sub, mult, div");
console.log(question);

let number1;
number1 = parseInt(prompt("What is the first number?"));
console.log(number1);

let number2;
number2 = parseInt(prompt("What is the second number?"));
console.log(number2);

if (question === "add") {
    let result = number1 + number2;
    alert(number1 + "+" + number2 + "=" + result);
} else if (question === "sub") {
    let result = number1 - number2;
    alert(number1 + "-" + number2 + "=" + result);
} else if (question === "mult") {
    let result = number1 * number2;
    alert(number1 + "*" + number2 + "=" + result);
} else if (question === "div") {
    let result = number1 / number2;
    alert(number1 + "/" + number2 + "=" + result);
}








