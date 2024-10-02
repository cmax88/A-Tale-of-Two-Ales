// Function to trigger the lightning flash and screen shake effect
function triggerLightning() {
    const lightning = document.querySelector('.lightning-flash');
    const body = document.body;

    // Flash on
    lightning.style.opacity = '1';

    // Add screen shake
    body.classList.add('shake');

    // Flash off and remove shake after a short duration
    setTimeout(() => {
        lightning.style.opacity = '0';
        body.classList.remove('shake');
    }, 100);  // Duration of the flash and shake (100ms)

    // Set the next lightning strike randomly between 1 and 5 seconds
    const randomInterval = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    // Schedule the next flash
    setTimeout(triggerLightning, randomInterval);
}

// Start the first flash after the page loads
triggerLightning();
