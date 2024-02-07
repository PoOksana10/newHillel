let num = parseInt(prompt("Please input two-digit number"));
document.write(String(num).split("").map(Number)[0])