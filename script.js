// script.js
$(document).ready(function () {
    $("#loginBtn").click(function () {
        const username = $("#username").val();
        const password = $("#password").val();
        const errorMessage = $("#errorMessage");

        // Simple validation: Check if the fields are not empty
        if (username.trim() === "" || password.trim() === "") {
            errorMessage.text("Please enter both username and password.");
        } else {
            // You can add more advanced validation logic here
            // For simplicity, consider it a successful login for any non-empty values
            errorMessage.text("");
            alert("Login successful!"); // Replace with actual authentication logic
        }
    });
});
