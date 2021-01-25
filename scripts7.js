console.log("Task 7. Переплата по кредиту");
let S = 2, p = 10, years = 5;
let Pereplata = 0;
for ( let i=0; i<=8; i+=2) {
    let PercentYear = (S - (i / years)) * 0.1;
    Pereplata += PercentYear;
}

console.log(Pereplata);
