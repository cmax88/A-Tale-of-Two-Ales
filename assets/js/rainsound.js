// Function to play the rain sound when the page loads
function playRainSound() {
    const rainSound = document.getElementById('rain-sound');
    rainSound.volume = 0.5;  // Set volume to a comfortable level
    rainSound.play();
  }
  
  // Start playing the rain sound when the page loads
  window.onload = playRainSound;
  