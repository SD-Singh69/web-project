document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expDate = document.getElementById("exp_date").value;
    const today = new Date();
    const exp = new Date(expDate);

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Card number must be exactly 16 digits!");
        return;
    }

    if (exp <= today) {
        alert("Expiration date must be in the future!");
        return;
    }

    alert("✅ Payment Successful!");
    window.location.href = "thank.html";
});
