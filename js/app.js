const musicContainer = document.querySelector('.music-container');
const toggleBtn = document.getElementById('toggle-btn');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.getElementById('title');
const audio = document.getElementById('audio');
const songCurrentTime = document.getElementById('currentTime');
const songDuration = document.getElementById('duration');
// const cover = document.getElementById('cover');

// DarkMode Function
const toggleMode = () => {
    document.body.classList.toggle('dark-theme');
}

toggleBtn.addEventListener('click', toggleMode);


// Song titles
let songs = ['hey', 'hello', 'world', 'love', 'hate'];

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
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
};


const updateDuration = (e) => {
    let duration = 0;
    duration = e.srcElement.duration;
    let isDurationHour = Math.floor(duration / 3600);
    let isDurationMin = Math.floor(duration / 60);

    songDuration.innerText = `${isDurationHour}:${isDurationMin}`;
}

const updateCurrentTime = (e) => {
    let sec = 0;
    let min = 0;
    let { currentTime } = e.srcElement;
    let roundCurrentTime = Math.floor(currentTime);
    // console.log(roundCurrentTime)

    if( roundCurrentTime % 2 === 0 ) {
        sec = sec + 1
        console.log(sec)
    }

    // if (roundCurrentTime  % 60 == 0) {
    //     min = min + 1;
    // }

    // songCurrentTime.innerText = `${min}:${roundCurrentTime}`
    // console.log(roundCurrentTime)
    
}

const setProgress = (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

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

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', updateDuration);
audio.addEventListener('timeupdate', updateCurrentTime)
progressContainer.addEventListener('click', setProgress);