document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements from the DOM
    const bmiForm = document.getElementById("bmi-form");
    const bmiResult = document.getElementById("bmi-result");
    const bmiMessage = document.getElementById("bmi-message");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");

    // Function to calculate BMI
    function calculateBMI(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get input values and convert them to numbers
        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value); // Height already in meters

        // Validation: Check if inputs are valid numbers
        if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            bmiResult.innerHTML = `<span style="color: red;">⚠️ Please enter a valid weight and height!</span>`;
            bmiMessage.innerHTML = "";
            return;
        }

        // BMI Formula: weight (kg) / height² (m²)
        let bmi = weight / (height * height);
        let category = getBMICategory(bmi);

        // Display BMI result
        bmiResult.innerHTML = `<strong>Your BMI: ${bmi.toFixed(1)}</strong>`;
        bmiMessage.innerHTML = `<span style="color: ${category.color}; font-weight: bold;">${category.text}</span>`;
        
        // Apply a smooth fade-in effect
        bmiResult.style.opacity = "0";
        bmiMessage.style.opacity = "0";
        setTimeout(() => {
            bmiResult.style.opacity = "1";
            bmiMessage.style.opacity = "1";
        }, 200);
    }

    // Function to determine BMI category
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return { text: "Underweight ❗", color: "blue" };
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return { text: "Normal Weight ✅", color: "green" };
        } else if (bmi >= 25 && bmi <= 29.9) {
            return { text: "Overweight ⚠️", color: "orange" };
        } else {
            return { text: "Obese ❌", color: "red" };
        }
    }

    // Add event listener to form submit event
    bmiForm.addEventListener("submit", calculateBMI);
});
