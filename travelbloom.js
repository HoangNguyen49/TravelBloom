document.getElementById('searchBtn').addEventListener('click', () => {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('searchResults');

    fetch('travelbloom.json')
        .then(response => response.json())
        .then(data => {
            const result = data.destinations.find(dest => 
                dest.name.toLowerCase().includes(input) || 
                dest.keywords.some(keyword => keyword.toLowerCase().includes(input))
            );

            if (result) {
                resultDiv.innerHTML = `
                    <h2>${result.name}</h2>
                    <img src="${result.image1}" alt="${result.name} 1">
                    <img src="${result.image2}" alt="${result.name} 2">
                    <img src="${result.image3}" alt="${result.name} 3">
                    <p>${result.description}</p>
                `;
            } else {
                resultDiv.innerHTML = '<p>No destinations found. Try another keyword!</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = '<p>Error loading recommendations.</p>';
        });
});

document.getElementById('bookBtn').addEventListener('click', () => {
    alert('Booking feature coming soon!');
});