document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("gmail").value.trim();
    const phone = document.getElementById("phonenumber").value.trim();

    if (!name || !email || !phone) {
        alert("All fields are required!");
        return;
    }

    localStorage.setItem("userName", name);
    window.location.href = "payment.html";
});
