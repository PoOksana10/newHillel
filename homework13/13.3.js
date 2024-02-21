const userEntries = parseInt(prompt('How many inner arrays would you like to add to main array?'))
const mainArray = [];
let innerArray = [];

function elementEntry() {
    for (let i = 1; i <= userEntries; i++) {
        const innerArrayElementsQty = parseInt(prompt('How many elements would you like to add to No ' +
            i + ' inner array?'));
        for (let e = 1; e <= innerArrayElementsQty; e++) {
            const innerElements = prompt('Enter element No' + e + ' for No ' + i
                + ' inner array');
            innerArray.push(innerElements);
            if (innerArray.length === innerArrayElementsQty) {
                mainArray.push(innerArray);
                innerArray = [];
            }
        }
    }
}

elementEntry();

document.write(mainArray[0].join(' , '));
console.log(mainArray);







