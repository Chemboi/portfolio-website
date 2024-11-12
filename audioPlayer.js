document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const stopBtn = document.getElementById("stop-btn");
    const volumeControl = document.getElementById("volume-control");
    const progressBar = document.getElementById("progress-bar");
    const timeDisplay = document.getElementById("time-display");

    // Play/Pause toggle function
    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "Play";
        }
    }

    // Stop function
    function stopAudio() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseBtn.textContent = "Play";
    }

    // Update volume function
    function updateVolume() {
        audioPlayer.volume = volumeControl.value;
    }

    // Update progress bar function
    function updateProgress() {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progressPercent || 0;

        // Display current time in mm:ss format
        const minutes = Math.floor(audioPlayer.currentTime / 60);
        const seconds = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, "0");
        timeDisplay.textContent = `${minutes}:${seconds}`;
    }

    // Seek function for progress bar
    function seekAudio() {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    }

    // Event listeners for the controls
    playPauseBtn.addEventListener("click", togglePlayPause);
    stopBtn.addEventListener("click", stopAudio);
    volumeControl.addEventListener("input", updateVolume);
    audioPlayer.addEventListener("timeupdate", updateProgress);
    progressBar.addEventListener("input", seekAudio);
});
