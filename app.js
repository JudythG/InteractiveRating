const desktopPreviewDiv = document.querySelector('.desktop-preview-content')
const ratingButtons = document.querySelectorAll('.rating-selector');
const submitButton = document.getElementById('submit-btn');
let selectedRating = 0;

const desktopThankYouDiv = document.querySelector('.desktop-thankyou-content');
const selectionResults = document.querySelector('#selection-results');

function loadEventListeners() {
    // Ratings Buttons
    for (let i = 0; i < ratingButtons.length; i++) {
        ratingButtons[i].addEventListener('click', ratingSelected);
    }

    // Submit Button
    submitButton.addEventListener('click', onSubmit);
}

function ratingSelected(e) {
    selectedRating = e.target.value;
    submitButton.style.color = 'hsl(25, 97%, 53%)';
    submitButton.style.backgroundColor = 'hsl(0, 0%, 100%)';
}

function onSubmit(e) {
    console.log(`You selected ${selectedRating} out of 5.`);
    if (selectedRating != 0) {
        desktopPreviewDiv.style.display = 'none';
        desktopThankYouDiv.style.display = 'block';
        selectionResults.textContent = `You selected ${selectedRating} out of 5.`;
    }
}

loadEventListeners();