const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.close');

let lightboxActive = true;

function openLightbox(img) {
    if (!lightboxActive) return;
    lbImg.src = img.src; // or use data-large for bigger images
    lbImg.alt = img.alt || '';
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(){
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    lbImg.src = '';
}

// attach event listeners to images
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
});

// close buttons
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// function to toggle lightbox based on window width
function checkLightboxActive() {
    lightboxActive = window.innerWidth >= 1068;
    if (!lightboxActive) closeLightbox(); // ensure it's closed if disabled
}

// initial check
checkLightboxActive();

// listen for resize
window.addEventListener('resize', checkLightboxActive);
