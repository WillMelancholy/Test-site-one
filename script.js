// Get references to our HTML elements
const button = document.getElementById('myButton');
const image = document.getElementById('myImage');
const sound = document.getElementById('mySound');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Play the sound
    sound.play();
    
    // Show the image
    image.style.display = 'block';
});