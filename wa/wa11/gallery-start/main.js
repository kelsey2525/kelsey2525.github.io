const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = [
    { src: '111.jpg', alt: 'Two stuffed animals in a shop window' },
    { src: '222.jpg', alt: 'A man handing a woman a promise ring' },
    { src: '333.jpg', alt: 'Woman and man holding stuffed animals' },
    { src: '444.jpg', alt: 'A couple walking in the city at night' },
    { src: '555.jpg', alt: 'A scenic view of a bridge over a river' }
];

function updateDisplayedImageSize() {
    const thumbWidth = document.querySelector('.thumb-bar img').offsetWidth;
    const totalWidth = thumbWidth * images.length;
    displayedImg.style.width = `${totalWidth}px`;
}

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


window.addEventListener('load', updateDisplayedImageSize); // Ensure displayed image resizes on page load
window.addEventListener('resize', updateDisplayedImageSize);

btn.addEventListener('click', () => {
    const isDark = overlay.style.backgroundColor === 'rgba(0, 0, 0, 0.5)';
    overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)';
    btn.textContent = isDark ? 'darken' : 'lighten';
});
