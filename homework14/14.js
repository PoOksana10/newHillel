
function makeCounter() {
    let currentCount1 = parseInt(prompt("Please input first number"));
  

    return function resultSum() {
       return currentCount1 += currentCount1;
    };
}

let counter = makeCounter();
alert ( counter());
alert ( counter());
alert ( counter());

