const marked = require('marked');

// Get the DOM elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Function to update preview
function updatePreview() {
    // Convert markdown to HTML using marked.js
    preview.innerHTML = marked.parse(editor.innerText);
}

// Add event listener for input
editor.addEventListener('input', updatePreview);

// Initial render
updatePreview();