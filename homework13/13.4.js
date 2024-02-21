
let userPhrase = prompt("Please type some phrase you want to delete letters");
let userLetters = []
function elementsFromUser () {
    let letterQty = parseInt(prompt("How many letters would you like to delete?"));
    for (let i = 1; i <= letterQty; i++) {
        let letter = prompt("Please input only letter No " + i).trim()
        userLetters.push(letter)
        userLetters.push(letter.toUpperCase())
    }
}

function userLettersDelete (userPhrase, userLetters) {
    let new_string;
    for (let u = 0; u <= userLetters.length; u++) {
        new_string = userPhrase.replaceAll(userLetters[u], "")
        userPhrase = new_string
    }
    document.write('This is filtered result: ' + new_string)
}

elementsFromUser()
userLettersDelete(userPhrase, userLetters)