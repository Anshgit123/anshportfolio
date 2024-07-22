// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    fetchFoodInsecurityInfo();

    document.querySelector('#donation-form')?.addEventListener('submit', handleDonationSubmit);
});

async function fetchFoodInsecurityInfo() {
    try {
        const response = await fetch('http://localhost:3000/api/food-insecurity');
        const data = await response.json();
        document.querySelector('#food-insecurity-info').innerText = data.info;
    } catch (error) {
        console.error('Error fetching food insecurity info:', error);
    }
}

async function handleDonationSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/api/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Donation submitted successfully!');
        } else {
            alert('Failed to submit donation.');
        }
    } catch (error) {
        console.error('Error submitting donation:', error);
    }
}
