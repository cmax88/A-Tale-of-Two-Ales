// Function to play the rain sound
function playRainSound() {
  const rainSound = document.getElementById('rain-sound');
  
  // Try to play the rain sound
  rainSound.volume = 0.5;  // Set volume to a comfortable level
  const playPromise = rainSound.play();

  // Handle autoplay blocking by browser
  if (playPromise !== undefined) {
      playPromise.catch(error => {
          console.log("Autoplay was prevented. Waiting for user interaction.");
          enableRainSoundOnUserInteraction();  // Fallback for browsers blocking autoplay
      });
  }
}

// Enable rain sound after user interaction (if autoplay is blocked)
function enableRainSoundOnUserInteraction() {
  document.body.addEventListener('click', function() {
      const rainSound = document.getElementById('rain-sound');
      rainSound.play();
      document.body.removeEventListener('click', arguments.callee);  // Remove listener after first click
  });
}

// Play rain sound on page load
window.onload = playRainSound;
