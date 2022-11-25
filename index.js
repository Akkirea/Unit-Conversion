/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("convert-btn")
const lengthParagraph = document.getElementById("length-p")
const volumeParagraph = document.getElementById("volume-p")
const massParagraph = document.getElementById("mass-p")
let input = document.getElementById("input-el")


button.addEventListener("click", function() {
    let value = input.value
    let feet = input.value * 3.281
    let meters = input.value / 3.281
    lengthParagraph.textContent = ` ${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${ meters.toFixed(3) } meters  `
}) 

button.addEventListener("click", function() {
    let value = input.value
    let liter = value * 0.264 
    let gallon = value / 0.264
    volumeParagraph.textContent = `${value} liters = ${ liter.toFixed(3) } gallons | ${value} gallons = ${ gallon.toFixed(3) } liters`
})

button.addEventListener("click", function() {
    let value = input.value
    let kilo = value * 2.204 //pound
    let pound = value / 2.204 //kilo 
    massParagraph.textContent = `${value} kilos = ${ kilo.toFixed(3) } pounds | ${value} pounds = ${ pound.toFixed(3) } kilos`
})