document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
    if (e.target.tagName === "VIDEO") {
        e.preventDefault();
    }
});