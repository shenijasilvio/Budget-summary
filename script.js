// Toggle between Login and Registration Forms
function toggleForms() {
    document.getElementById("loginBox").style.display = 
        document.getElementById("loginBox").style.display === "none" ? "block" : "none";
    document.getElementById("registerBox").style.display = 
        document.getElementById("registerBox").style.display === "none" ? "block" : "none";
}

// Register Function
function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if (localStorage.getItem(email)) {
        alert("User already exists! Try logging in.");
    } else {
        localStorage.setItem(email, password);
        alert("Registration successful! You can now log in.");
        toggleForms(); // Switch to login form
    }
}

// Login Function
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (localStorage.getItem(email) === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email); // Save session
        window.location.href = "new ex trc.html"; // Redirect to dashboard
    } else {
        alert("Invalid credentials! Please try again.");
    }
}
