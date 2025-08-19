document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const emailInput = document.querySelector(".input-box input[type='text']");
    const passwordInput = document.querySelector(".input-box input[type='password']");
    const submitBtn = document.getElementById("submit");
    
    // Add event listener to the form
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });
    
    function validateForm() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        
        if (emailValue === "" || passwordValue === "") {
            alert("Both fields are required.");
            return;
        }
        if (!validateEmail(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Login Successful");
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Password visibility toggle
    const togglePassword = document.createElement("span");
    togglePassword.innerText = "👁️";
    togglePassword.style.cursor = "pointer";
    togglePassword.style.position = "absolute";
    togglePassword.style.right = "15px";
    togglePassword.style.top = "43%";
    togglePassword.style.transform = "translateY(-50%)";
    passwordInput.parentElement.style.position = "relative";
    passwordInput.parentElement.appendChild(togglePassword);
    
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
    
    // Button animation
    
    submitBtn.addEventListener("click", function () {
        submitBtn.style.transform = "scale(0.90)";
        setTimeout(() => {
            submitBtn.style.transform = "scale(1)";
        }, 150);
    });
});

