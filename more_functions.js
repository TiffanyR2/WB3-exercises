function displayMailingLabel(name, address, city, state, zip){

    console.log(name)
    console.log(address)
    console.log(city + ",", state, zip)
}
displayMailingLabel("Tiffany", "1508 9th St","Dade City", "FL", "33765")

function addNumbers(num1, num2){
    console.log(num1, "+", num2, "=", num1 + num2)
}
    console.log("")

    addNumbers(50,50)   
    console.log ("")

function displayReceipt(totalDue, amountPaid){

    console.log("totaldue", totalDue)
    console.log("amountPaid", amountPaid)
    console.log("changeDue", amountPaid - totalDue);
}
displayReceipt(25,100);
    console.log("")

displayReceipt(25,25);
    console.log("")

displayReceipt(25,18);
