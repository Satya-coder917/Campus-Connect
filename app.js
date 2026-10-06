function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (email === "admin@campusconnect.com" && password === "admin123") {
        localStorage.setItem("currentUser", JSON.stringify({
            name: "Campus Administrator",
            email: email,
            role: "admin"
        }));

        window.location.href = "admin.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(function(u) {
        return u.email === email && u.password === password;
    });

    if (!user) {
        alert("Invalid email or password.");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "dashboard.html";
}


function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const studentId = document.getElementById("studentId").value.trim();
    const department = document.getElementById("department").value;
    const semester = document.getElementById("semester").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !studentId || !department || !semester || !password) {
        alert("Please fill all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(function(u) {
        return u.email === email;
    })) {
        alert("This email is already registered.");
        return;
    }

    const newUser = {
        id: "STU-" + Date.now(),
        name: name,
        email: email,
        studentId: studentId,
        department: department,
        semester: semester,
        password: password,
        role: "student"
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Registration successful!");

    window.location.href = "dashboard.html";
}


function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}