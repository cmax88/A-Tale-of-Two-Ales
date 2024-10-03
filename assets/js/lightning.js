// Function to play a random lightning sound
function playLightningSound() {
    // Array of sound element IDs
    const soundIDs = ['lightning-1', 'lightning-2', 'lightning-3', 'lightning-4'];

    // Select a random sound ID
    const randomIndex = Math.floor(Math.random() * soundIDs.length);
    const sound = document.getElementById(soundIDs[randomIndex]);

    // Play the selected sound
    sound.currentTime = 0; // Start from the beginning
    sound.play();
}

// Function to trigger the lightning flash and screen shake effect
function triggerLightning() {
    const lightning = document.querySelector('.lightning-flash');
    const body = document.body;

    // Flash on
    lightning.style.opacity = '1';

    // Play the lightning sound
    playLightningSound();

    // Flash off after a short duration
    setTimeout(() => {
        lightning.style.opacity = '0';
    }, 100);  // Duration of the flash (100ms)

    // Delay the screen shake to occur slightly after the flash
    setTimeout(() => {
        // Add screen shake
        body.classList.add('shake');

        // Remove shake after the animation
        setTimeout(() => {
            body.classList.remove('shake');
        }, 300);  // Duration of the shake (300ms)
    }, 100);  // Delay shake by 150ms after flash starts

    // Set the next lightning strike randomly between 1 and 10 seconds
    const randomInterval = Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;

    // Schedule the next flash
    setTimeout(triggerLightning, randomInterval);
}

// Start the first flash after the page loads
triggerLightning();
