/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// store input box element 
const inputBox = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")

// convert a particular category
function convert(category, input) {
    let toImperial = 0
    let metUnit = ""
    let impUnit = ""
    switch (category) {
        case "length":
            toImperial = 3.281
            metUnit = "meters"
            impUnit = "feet"
            break
        case "volume":
            toImperial = 0.264
            metUnit = "liters"
            impUnit = "gallons"
            break
        case "mass":
            toImperial = 2.204
            metUnit = "kilos"
            impUnit = "pounds"
            break
    }  
    let toImp = input * toImperial
    toImp = toImp.toFixed(3)
    let toMet = input / toImperial
    toMet = toMet.toFixed(3)
    if (input != Math.round(input)) {
        input = input.toFixed(3)
    }
    const curId = `${category}-results`
    const curEl = document.getElementById(curId)
    curEl.textContent = `${input} ${metUnit} = ${toImp} ${impUnit} | ${input} ${impUnit} = ${toMet} ${metUnit}`
}

// call conversion on each thing functions
function renderConversion() {
    let userNumber = inputBox.value
    userNumber = Number(userNumber)
    if (Number.isNaN(userNumber)) {
        // console.log("That is not a number.")
    } else {
        convert("length", userNumber)
        convert("volume", userNumber)
        convert("mass", userNumber)
    }
}

// initial conversions
renderConversion()

// perform render when button pressed
convertBtn.addEventListener("click", renderConversion)
