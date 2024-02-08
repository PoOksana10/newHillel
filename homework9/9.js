const userEntries = parseInt(prompt('How many number would you like to add to array?'))
const userArray = [];
for (let i = 1; i <= userEntries; i++) {
    let userData = prompt('Number' + i)
    userArray.push(userData);
}
userArray.sort()
document.write("User specified array: " + userArray + "<br>")

if (userArray.length > 4) {
    userArray.splice(1, 3)
    document.write("User specified array with deleted elements from 2 till 4 included: " + userArray + "<br>")
}
