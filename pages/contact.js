document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMsg = document.getElementById("error-message");
        let successMsg = document.getElementById("success-message");

        // Clear previous messages
        errorMsg.innerText = "";
        successMsg.innerText = "";

        // Validation checks
        if (name === "" || email === "" || message === "") {
            event.preventDefault(); // Stop form from submitting
            errorMsg.innerText = "All fields are required!";
            errorMsg.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            event.preventDefault();
            errorMsg.innerText = "Please enter a valid email address!";
            errorMsg.style.color = "red";
            return;
        }

        // Allow the form to submit if validation passes
        successMsg.innerText = "Message sent successfully!";
        successMsg.style.color = "green";
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
