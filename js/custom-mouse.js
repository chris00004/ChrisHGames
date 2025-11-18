//get cursor element
const cursor = document.getElementById("custom-cursor");

//update mouse pos
function updateCursor(x, y) {
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

//idle state - default
cursor.className = "idle";

//get prev mouse pos from local storage
window.addEventListener("load", () => {
    const savedX = localStorage.getItem("cursorX");
    const savedY = localStorage.getItem("cursorY");

    //if exist stored position
    if (savedX && savedY) {
        updateCursor(parseInt(savedX, 10), parseInt(savedY, 10));
    } 
    //otherwise set pos to center of window
    else {
        updateCursor(window.innerWidth / 2, window.innerHeight / 2);
    }
});

//update mouse sprite pos
document.addEventListener("mousemove", e => {
    updateCursor(e.clientX, e.clientY);

    //store mouse position
    localStorage.setItem("cursorX", e.clientX);
    localStorage.setItem("cursorY", e.clientY);
});

//grabs elements and changes states based on the element
document.querySelectorAll("a, button, .thumb, .contact-item, .navbar .menus").forEach(el => 
{
    el.addEventListener("mouseenter", () => 
    {
        if (el.classList.contains("thumb")) 
        {
            cursor.classList.add("zoom-in");
        } 
        else 
        {
            cursor.classList.add("hover");
        }
    });

//if mouse leaves an element reset to idle
    el.addEventListener("mouseleave", () => 
    {
        cursor.classList.remove("hover", "zoom-in");
    });
});

// click state
document.addEventListener("mousedown", () => cursor.classList.add("click"));
document.addEventListener("mouseup", () => cursor.classList.remove("click"));