document.addEventListener("DOMContentLoaded", function () {
    function showPlan(planType) {
        const mealTitle = document.getElementById("meal-title");
        const mealDescription = document.getElementById("meal-description");
        const mealList = document.getElementById("meal-list");

        // Meal plan data
        const mealPlans = {
            "weight-loss": {
                title: "Weight Loss Plan",
                description: "A well-balanced, calorie-controlled diet to help you shed excess weight while staying energized.",
                meals: ["Oatmeal with berries", "Grilled chicken salad", "Steamed fish with vegetables", "Smoothie with protein"]
            },
            "muscle-gain": {
                title: "Muscle Gain Plan",
                description: "High-protein meals to build and repair muscle while maintaining energy levels.",
                meals: ["Eggs and whole-grain toast", "Chicken breast with quinoa", "Salmon with sweet potatoes", "Protein shake with nuts"]
            },
            "heart-health": {
                title: "Heart-Healthy Plan",
                description: "A diet rich in fiber, healthy fats, and low sodium to support cardiovascular health.",
                meals: ["Oatmeal with flaxseeds", "Grilled salmon with avocado", "Lentil soup with whole grains", "Almonds and mixed fruits"]
            }
        };

        // Update the UI with selected meal plan
        if (mealPlans[planType]) {
            mealTitle.textContent = mealPlans[planType].title;
            mealDescription.textContent = mealPlans[planType].description;
            mealList.innerHTML = ""; // Clear previous list

            mealPlans[planType].meals.forEach(meal => {
                let listItem = document.createElement("li");
                listItem.textContent = meal;
                mealList.appendChild(listItem);
            });

            document.querySelector(".meal-details").style.display = "block"; // Show details
        }
    }

    // Expose function globally
    window.showPlan = showPlan;
});
