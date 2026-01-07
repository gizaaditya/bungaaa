onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("container");

    // Memainkan musik otomatis saat animasi bunga dimulai
    const audio = document.getElementById("myAudio");
    audio.volume = 0.5; // Set volume ke 50%
    audio.play().catch((error) => {
      console.log("Autoplay dicegah browser, perlu klik manual");
    });

    clearTimeout(c);
  }, 1000);
};

// Fungsi klik icon musik untuk play/pause
const musicControl = document.getElementById("musicControl");
const audio = document.getElementById("myAudio");

musicControl.onclick = () => {
  if (audio.paused) {
    audio.play();
    musicControl.innerHTML = "🎵";
  } else {
    audio.pause();
    musicControl.innerHTML = "🔇";
  }
};
