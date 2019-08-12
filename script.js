"use strict"
// Random Table Number
let table = document.getElementById('table')
let min = 10 
let max = 25 
let randomNum = Math.floor(Math.random() * (max - min + 1))
table.innerHTML = randomNum



// Date & Time

    // Variables
let d = new Date()
let year = d.getFullYear()
let month = d.getMonth()
let date = d.getDate()
let hour = d.getHours()
let minute = d.getMinutes()

    // Functions
function minuteLessThanTen (){
    if (minute < 10){
        return `0${minute}`
    } else {
        return `${minute}`
    }
}

document.getElementById('date').innerHTML = `${month + 1}/${date}/${year}`
document.getElementById('time').innerHTML = `${hour}:${minuteLessThanTen()}`


// Calculate Tip & Total Bill
    
    // Variables
let bill
let percent

let tip = document.getElementById('tip')
let total = document.getElementById('total')
let calculate = document.getElementById('calculate')

    // Functions
calculate.addEventListener('click', function(){
    
    function getTipAmount (totalBill, tipPercent) {
        totalBill = document.getElementById('userBillInput').value
        tipPercent = document.getElementById('userPercentInput').value

        bill = parseFloat(totalBill)
        percent = parseFloat(tipPercent)
     
        return totalBill * (tipPercent * .01)
    }

    let tipOwed = getTipAmount()

    tip.innerHTML = '$' + parseFloat(tipOwed.toFixed(2))
    total.innerHTML = '$' + (parseFloat(bill.toFixed(2)) + parseFloat(tipOwed.toFixed(2)))
})

