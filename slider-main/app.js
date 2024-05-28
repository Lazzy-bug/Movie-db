// Selecting DOM elements
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Configuration parameters
let countItem = items.length;
let itemActive = 0; // Initialize to 0

// Function to show slider
function showSlider() {
    // Remove active class from old items
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    // Add active class to new items
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    console.log(`Displayed item index: ${itemActive}`); // Debug log
}

// Event listener for next button click
next.addEventListener('click', function() {
    itemActive = (itemActive + 1) % countItem;
    console.log("Next clicked, itemActive:", itemActive); // Debug log
    showSlider();
});

// Event listener for previous button click
prev.addEventListener('click', function() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    console.log("Previous clicked, itemActive:", itemActive); // Debug log
    showSlider();
});

// Show the initial slide (One Piece) when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlider();
});

// Event listener for clicking on thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        console.log(`Thumbnail clicked, itemActive: ${itemActive}`); // Debug log
        showSlider();
    });
});

// Auto run slider every 5 seconds
let refreshInterval = setInterval(function() {
    next.click();
}, 5000);
