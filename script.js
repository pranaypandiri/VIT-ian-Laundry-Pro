document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const registrationNumber = document.getElementById("registration-number").value;
    const password = document.getElementById("password").value;

    // Simulated authentication logic
    const validCredentials = {
        "21bps1362": "12345",
        "21bai1504": "12345",
        "21bai1536": "12345"
    };

    if (validCredentials.hasOwnProperty(registrationNumber) && validCredentials[registrationNumber] === password) {
        // On successful authentication, redirect to the home page
        window.location.href = "home.html";
    } else {
        // If authentication fails, display an error message
        alert("Invalid registration number or password");
    }
});
document.getElementById("clothes-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get quantities of each type of clothes
    const shirtQty = parseInt(document.getElementById("shirt").value);
    const pantQty = parseInt(document.getElementById("pant").value);
    const nightwearQty = parseInt(document.getElementById("nightwear").value);
    const shortsQty = parseInt(document.getElementById("shorts").value);
    const sareeQty = parseInt(document.getElementById("saree").value);
    const heavyClothesQty = parseInt(document.getElementById("heavy-clothes").value);

    // Calculate total cost
    const shirtCost = shirtQty * 12;
    const pantCost = pantQty * 10;
    const nightwearCost = nightwearQty * 8;
    const shortsCost = shortsQty * 8;
    const sareeCost = sareeQty * 20;
    const heavyClothesCost = heavyClothesQty * 40;

    const totalCost = shirtCost + pantCost + nightwearCost + shortsCost + sareeCost + heavyClothesCost;

    // Display the bill
    alert(`Shirt: ${shirtQty} x $12 = $${shirtCost}\n
            Pant: ${pantQty} x $10 = $${pantCost}\n
            Nightwear: ${nightwearQty} x $8 = $${nightwearCost}\n
            Shorts: ${shortsQty} x $8 = $${shortsCost}\n
            Saree: ${sareeQty} x $20 = $${sareeCost}\n
            Heavy Clothes: ${heavyClothesQty} x $40 = $${heavyClothesCost}\n
            Total Cost: $${totalCost}`);
});
// Function to redirect to the payment page
function redirectToPayment() {
    window.location.href = "payment.html";
}

// Function to handle payment form submission
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform payment processing logic here
    alert("Payment successful!");
});