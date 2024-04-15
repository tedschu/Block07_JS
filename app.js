
//creating variables
const taxRate = 0.07;
const tip = 0.2;

//user input
let bill = prompt("How much was your bill?");
bill = Number(bill);

//computes the input + tax + tip
let finalBill = bill + (bill * taxRate) + (bill * tip);

//outputs the final bill
console.log(finalBill)








