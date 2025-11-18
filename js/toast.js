let toastTimer; // Store the timeout ID to manage multiple clicks
          
function copyToClipboard(event, text) {
// Copy text to clipboard
const textarea = document.createElement('textarea');
textarea.value = text;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
document.body.removeChild(textarea);
          
// Get cursor position
const { clientX: mouseX, clientY: mouseY } = event;
          
// Show the toast near the cursor
const toast = document.getElementById('toast');
toast.textContent = `Copied: ${text}`;
toast.style.top = `${mouseY - 40}px`; // Slight offset below the cursor
toast.style.left = `${mouseX- 10}px`; // Slight offset to the right of the cursor
toast.classList.add('show');
          
// Clear any existing timeout
if (toastTimer) {
    clearTimeout(toastTimer);
}
          
// Set a new timeout to hide the toast
toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    }, 2000);
}