function displayMailingLabel(name, address, city, state, zip){

    console.log(name)
    console.log(address)
    console.log(city + ",", state)
    console.log(zip)
}
displayMailingLabel("Tiffany", "1508 9th St","Dade City", "Fl","33765")

function addNumbers(num1, num2){
    console.log(num1, "+", num2, "=", num1 + num2)
}
    addNumbers(50,50)   

function displayReceipt(totalDue, amountPaid){

console.log("totaldue", totalDue)
console.log("amountPaid", amountPaid)
console.log("changeDue", amountPaid - totalDue);
}
displayReceipt(25,100);
displayReceipt(25,25);
displayReceipt(25,18);
