let currentAudio = null;  // To keep track of the currently playing paragraph audio
let songAudio = null;     // To keep track of the song audio

// Function to check if an element is in the middle of the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const middle = (window.innerHeight || document.documentElement.clientHeight) / 2;
    return rect.top <= middle && rect.bottom >= middle;
}

// Function to play the custom audio for each paragraph
function playAudio(audioSrc) {
    if (currentAudio) {
        currentAudio.pause();  // Pause the currently playing paragraph audio
        currentAudio.currentTime = 0;  // Reset to the beginning
    }
    
    if (audioSrc) {
        currentAudio = new Audio(audioSrc);  // Load new audio
        currentAudio.play();  // Play the new audio file
    }
}

// Function to highlight and play audio for paragraphs
function highlightAndNarrate() {
    const paragraphs = document.querySelectorAll('#story p');

    paragraphs.forEach(paragraph => {
        if (isInViewport(paragraph)) {
            if (!paragraph.classList.contains('active')) {
                // Remove active class from other paragraphs
                document.querySelectorAll('#story p').forEach(p => p.classList.remove('active'));

                // Highlight the current paragraph
                paragraph.classList.add('active');

                // Play the associated paragraph audio
                const audioSrc = paragraph.getAttribute('data-audio');
                playAudio(audioSrc);

                // Check for song start or stop
                const songAction = paragraph.getAttribute('data-song');
                if (songAction === 'start') {
                    // Start the song
                    const songSrc = paragraph.getAttribute('data-song-src');
                    if (songSrc) {
                        if (songAudio) {
                            songAudio.pause();
                            songAudio.currentTime = 0;
                        }
                        songAudio = new Audio(songSrc);
                        songAudio.play();
                    }
                } else if (songAction === 'stop') {
                    // Stop the song
                    if (songAudio) {
                        songAudio.pause();
                        songAudio.currentTime = 0;
                        songAudio = null;
                    }
                }
            }
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', highlightAndNarrate);

// Initial check when page loads
highlightAndNarrate();
