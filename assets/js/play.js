// Create by Prasad Madhuranga @ 2024.05
const musicFiles = [
    // "assets/audio/bgm_installer.ogg",
    // "assets/audio/halo-7.mp3",
    "../../assets/audio/Halo_S1_theme.ogg",
    "../../assets/audio/PM_GL_BGM1.ogg",
    "../../assets/audio/PM_GL_MM1.ogg",
    "../../assets/audio/PM_LP_MSC1-BB.ogg",
    "../../assets/audio/PM_LP_MSC1.ogg",
    "../../assets/audio/Remix-music-web1.ogg"
];
const audioElement = document.getElementById("backgroundMusic");
function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const randomSource = musicFiles[randomIndex];
    audioElement.src = randomSource;
    audioElement.loop = true;
    audioElement.play();
}
playRandomMusic();