document.addEventListener('DOMContentLoaded', () => {
  console.log("LEO Officer Hub Ready");
  // Future: Add login checks, Firebase integration, or dynamic news updates here
});

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.getElementById('sidebarToggle');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

  const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const resetBtn = document.getElementById('resetBtn');
  const volumeSlider = document.getElementById('volumeSlider');
  const songTitle = document.getElementById('songTitle');

  let isPlaying = false;

  // Extract file name as title
  const fileName = audioPlayer.src.split('/').pop().replace('.mp3', '');
  songTitle.textContent = `Now Playing: ${fileName}`;

  // Play/Pause
  playPauseBtn.addEventListener('click', () => {
    if (!isPlaying) {
      audioPlayer.play();
      playPauseBtn.textContent = '⏸';
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = '▶';
    }
    isPlaying = !isPlaying;
  });

  // Reset
  resetBtn.addEventListener('click', () => {
    audioPlayer.currentTime = 0;
    if (!isPlaying) {
      audioPlayer.play();
      playPauseBtn.textContent = '⏸';
      isPlaying = true;
    }
  });

  // Volume
  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
  });
});
