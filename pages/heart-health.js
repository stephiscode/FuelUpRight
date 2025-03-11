document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const calculateBtn = document.getElementById("calculate-btn");
    const healthScore = document.getElementById("health-score");
    const foodItems = document.querySelectorAll(".food-item");

    // Quiz questions for heart health
    const questions = [
        { question: "Do you eat fruits and vegetables daily?", points: 2 },
        { question: "Do you exercise at least 30 minutes a day?", points: 2 },
        { question: "Do you avoid processed and high-sodium foods?", points: 2 },
        { question: "Do you drink enough water daily?", points: 1 },
        { question: "Do you manage stress effectively?", points: 1 }
    ];

    // Function to calculate health score
    function calculateHealthScore() {
        let totalScore = 0;
        let responses = [];
        
        for (let i = 0; i < questions.length; i++) {
            let answer = confirm(questions[i].question);
            responses.push({ question: questions[i].question, answer });
            if (answer) totalScore += questions[i].points;
        }
        
        displayHealthScore(totalScore, responses);
    }

    // Function to display health score message
    function displayHealthScore(score, responses) {
        let message;
        if (score >= 7) {
            message = "Excellent! You have great heart health habits.";
        } else if (score >= 4) {
            message = "Good job! But there’s room for improvement.";
        } else {
            message = "Consider making healthier lifestyle choices for a stronger heart.";
        }
        
        healthScore.innerHTML = `<strong>Your Heart Health Score: ${score}/8</strong><br>${message}<br><br>`;
        responses.forEach(resp => {
            healthScore.innerHTML += `<strong>${resp.question}</strong>: ${resp.answer ? "✔️ Yes" : "❌ No"}<br>`;
        });
    }

    // Add click event to calculate button
    calculateBtn.addEventListener("click", calculateHealthScore);

    // Add hover effect to food items
    foodItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = "#ff4d4d";
            item.style.color = "#fff";
        });
        item.addEventListener("mouseout", function () {
            item.style.backgroundColor = "#fff";
            item.style.color = "#333";
        });
    });
});
