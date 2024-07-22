// script.js
document.getElementById('donationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const donorName = document.getElementById('donorName').value;
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;

    const donation = {
        donorName,
        foodType,
        quantity,
        date
    };

    try {
        const response = await fetch('http://localhost:3000/donations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donation)
        });

        if (response.ok) {
            alert('Donation submitted successfully!');
            document.getElementById('donationForm').reset();
        } else {
            alert('Failed to submit donation.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting donation.');
    }
});
