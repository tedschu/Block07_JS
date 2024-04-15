
//creating variables
const taxRate = 0.07;
const tip = 0.2;

let bill = prompt("How much was your bill?");
bill = Number(bill);

let finalBill = bill + (bill * taxRate) + (bill * tip);


console.log(finalBill)








