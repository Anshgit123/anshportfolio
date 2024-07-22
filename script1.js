document.getElementById('helpForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:3000/api/request-help', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });

    const responseMessage = document.getElementById('responseMessage');

    if (response.ok) {
        responseMessage.textContent = 'Help request submitted successfully!';
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = 'Error submitting help request.';
        responseMessage.style.color = 'red';
    }
});
