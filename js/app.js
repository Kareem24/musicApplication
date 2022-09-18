const musicContainer = document.querySelector('.music-container');
const toggleBtn = document.getElementById('toggle-btn');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.getElementById('title');
const audio = document.getElementById('audio')
// const cover = document.getElementById('cover');

// DarkMode Function
const toggleMode = () => {
    document.body.classList.toggle('dark-theme');
}

toggleBtn.addEventListener('click', toggleMode);

// Song titles
const songs = ['hey', 'summer', 'ukele', 'love', 'hate'];

// keep track of songs
let songIndex = 2;

// Initially load song info DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    // cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    audio.pause();
}


const prevSong = () => {
    songIndex = songIndex - 1;

    if (songIndex < 0) {
        songs = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
};

const nextSong = () => {
    songIndex = songIndex + 1;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
};

const updateProgress = (e) => {
    console.log('Wha')
};

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong(); 
    }else {
        playSong(); 
    }
});

// Change Song event
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeUpdate', updateProgress);