// BMI = Body Mass Index
function calculateBMI(weight, height)
{
    const BMI = weight / height ** 2 // squared
    return BMI.toFixed(2) // 2 decimal places
}

/*
    Body Mass Index	        Classification

    < 18.5	                Underweight
    18.5 — 24.9	            Normal weight
    25.0 — 29.9	            Overweight
    30.0 —29.9	            Obese (Class I)
    35.0 — 39.9	            Obese (Class II)
    >= 40.0	                Obese (Class III) 

*/

function calculateBMIClassification (BMI)
{
    const BMIClassification = [
    'Underweight', 
    'Normal weight', 
    'Overweight', 
    'Obese (Class I)','Obese (Class II)', 
    'Obese (Class III)']

    if (BMI > 39.9)
        return BMIClassification[5] // Obese (Class III)
    
    if (BMI >= 34.9)
        return BMIClassification[4] // Obese (Class II)
    
    if (BMI >= 29.9) 
        return BMIClassification[3] // Obese (Class I)
    
    if (BMI >= 24.9) 
        return BMIClassification[2] // Overweight

    if (BMI >= 18.5) 
        return BMIClassification[1] // Normal weight
    
    if (BMI < 18.5)
        return BMIClassification[0] // Underweight
}

function createParagraph()
{
    const p = document.createElement('p')
    return p
}

function setResult(resultMessage, isValid) 
{
    const result = document.querySelector('#result')
    result.innerHTML = '' // clears the div content

    const p = createParagraph()
    
    if (isValid)
    {
        const h2 = document.createElement('h2')
        h2.classList.add('result-h2')
        h2.innerHTML = 'Results'
        result.appendChild(h2)

        p.classList.add('correctResult')
    }
    else
    {
        p.classList.add('invalidInputs')
    }

    p.innerHTML = resultMessage
    result.appendChild(p)
}

const form = document.querySelector('#form') // catches the form submit event

form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    // inputs
    const weightInput = event.target.querySelector('#weight')
    const heightInput = event.target.querySelector('#height')
    
    // values
    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)

    console.log(weight, height)

    if (!weight && !height ) // both are NaN
    {
        setResult('Invalid inputs. Please try again.', false)
        return // ends function 
    }

    if (!weight) // weight is NaN
    {
        setResult('Invalid weight input. Please try again.', false)
        return // ends function 
    }

    if (!height) // height is NaN
    {
        setResult('Invalid height input. Please try again.', false)
        return // ends function 
    }

    const BMI = calculateBMI(weight, height)
    const BMIClassification = calculateBMIClassification(BMI)

    console.log(BMI, BMIClassification)

    const resultMessage = `Your BMI is ${BMI} <br> Classification: ${BMIClassification}`

    setResult(resultMessage, true)

});











