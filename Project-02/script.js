const form = document.querySelector('form')

const showBMI = (bmi, text) => {
    let x = setTimeout((e) => {
        let result = document.querySelector("#results")
        result.style.display = "block"
        result.innerHTML = `${text} ${bmi}`
    }, 100);

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value) / 100
    const weight = parseInt(document.querySelector("#weight").value)

    const bmi = Math.floor(weight / (height * height))

    if (height < 0 || height === '' || isNaN(height)) {
        alert('Enter valid weight and height');
    } else if (weight < 0 || weight === '' || isNaN(weight)) {
        alert('Enter valid weight and weight');
    } else if (bmi < 18.6) {
        showBMI(bmi, "You are underweight and your BMI is:")
    } else if (bmi > 18.6 && bmi < 24.9) {
        showBMI(bmi, "You are normal and your BMI is:")
    } else if (bmi > 24.9) {
        showBMI(bmi, "You are overweight and your BMI is:")
    }
})
