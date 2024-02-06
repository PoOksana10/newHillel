const a = 27
for (let i = 10; i <= 100; i += 10) {
    document.write(i + "USD" + " = " + a * i + "UAH" + ",  ");
    if (i ===100) {
        document.write(i + "USD" + " = " + a * i + "UAH" + ". ");
        
    }
}
