const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Image filenames and alternative text
const images = [
    { src: '111.jpg', alt: 'Two stuffed animals in a shop window' },
    { src: '222.jpg', alt: 'A man handing a woman a promise ring' },
    { src: '333.jpg', alt: 'Woman and man holding stuffed animals' },
    { src: '444.jpg', alt: 'A couple walking in the city at night' },
    { src: '555.jpg', alt: 'A scenic view of a bridge over a river' }
];

// Function to update displayed image size
function updateDisplayedImageSize() {
    const thumbWidth = document.querySelector('.thumb-bar img').offsetWidth;
    const totalWidth = thumbWidth * images.length; // Get combined width of 5 images
    displayedImg.style.width = `${totalWidth}px`; // Stretch displayed image
}

// Loop through images and add to thumb-bar
images.forEach(({ src, alt }) => {
    const newImage = document.createElement('img');
    newImage.src = `images/${src}`;
    newImage.alt = alt;

    newImage.addEventListener('click', () => {
        displayedImg.src = `images/${src}`;
        displayedImg.alt = alt;
        updateDisplayedImageSize(); // Resize displayed image dynamically
    });

    thumbBar.appendChild(newImage);
});

// Ensure displayed image resizes on page load
window.addEventListener('load', updateDisplayedImageSize);
window.addEventListener('resize', updateDisplayedImageSize);

// Darken function
btn.addEventListener('click', () => {
    const isDark = overlay.style.backgroundColor === 'rgba(0, 0, 0, 0.5)';
    overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)';
    btn.textContent = isDark ? 'darken' : 'lighten';
});
