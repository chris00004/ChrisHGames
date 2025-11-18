//toggles hamburger menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const navSpacer = document.querySelector('.nav-spacer');

    //activates drop down menu
    navbarLinks.classList.toggle('active');
    //activates spacer 
    navSpacer.classList.toggle('active');
}

// Auto-reset when resizing to desktop
window.addEventListener('resize', () => {
    const navbarLinks = document.querySelector('.navbar-links');
    const navSpacer = document.querySelector('.nav-spacer');

    //if window gets larger than value, deactivate spacer and drop down menu
    if (window.innerWidth > 1068) {
         navbarLinks.classList.remove('active');
        navSpacer.classList.remove('active');
    }
});