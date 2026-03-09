document.getElementById("bookingForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("#bookingForm input, #bookingForm select, #bookingForm textarea");

    const bookingData = {
        name: inputs[0].value,
        destination: inputs[1].value,
        phone: inputs[2].value,
        email: inputs[3].value,
        date: inputs[4].value,
        details: inputs[5].value
    };

    try {
        const response = await fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });

        if (response.ok) {
            alert("Booking saved successfully!");
            document.getElementById("bookingForm").reset();
        } else {
            alert("Error submitting booking.");
        }
    } catch (error) {
        alert("Server not connected.");
        console.error(error);
    }
});