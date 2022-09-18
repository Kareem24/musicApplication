const musicContainer = document.querySelector('.music-container');
const toggleBtn = document.getElementById('toggle-btn');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const prevBtnSec = document.getElementById('prev30s');
const nextBtnSec = document.getElementById('next30s');
const nextBtn = document.getElementById('next');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.getElementById('title');
const audio = document.getElementById('audio');
const songCurrentTime = document.getElementById('currentTime');
const songDuration = document.getElementById('duration');
const fastBtn = document.querySelector('.fast_btn');
// const cover = document.getElementById('cover');

// DarkMode Function
const toggleMode = () => {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        toggleBtn.querySelector('.fa-solid').classList.remove('fa-sun');
        toggleBtn.querySelector('.fa-solid').classList.add('fa-moon');
    }else {
        toggleBtn.querySelector('.fa-solid').classList.add('fa-sun');
        toggleBtn.querySelector('.fa-solid').classList.remove('fa-moon');
    }
}

toggleBtn.addEventListener('click', toggleMode);


// Song titles
let songs = ['hey', 'hello', 'world', 'love', 'hate', 'glitter'];

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
    playBtn.querySelector('.fa-solid').classList.add('fa-pause')
    playBtn.querySelector('.fa-solid').classList.remove('fa-play')

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('.fa-solid').classList.remove('fa-pause')
    playBtn.querySelector('.fa-solid').classList.add('fa-play')

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

const prevSec = () => {
    audio.currentTime = audio.currentTime - 30.000
}

const nextSec = () => {
    audio.currentTime = audio.currentTime + 30.000
}

const fastForward = () => {
    let test = (audio.duration / 3 )
    audio.duration = test
    // console.log(test)
}

const updateDuration = (e) => {
    let duration = 0;
    duration = e.srcElement.duration;
    let isDurationMin = Math.floor(duration / 60);
    let isDurationSec= duration.toString().split(".")[1].substring(0, 2);

    isDurationMin = (isDurationMin >= 10) ? isDurationMin : `0${isDurationMin}`;
    isDurationSec = (isDurationSec >= 10) ? isDurationSec : `0${isDurationSec}`;
    
    songDuration.innerText = `${isDurationMin}:${isDurationSec}`;
}

// variable declaration
let time = 0
let sec = 0;
let min = 0;

const updateCurrentTime = (e) => {
    let { currentTime } = e.srcElement;
    let roundCurrentTime = Math.floor(currentTime);
    
    time++;

    if (time % 4 === 0) {
        sec = sec + 1
    }

    if(time % 240 === 0){
        min = min + 1
    }

    if ( sec % 60 === 0) {
        sec = 0
    }

    

    songCurrentTime.innerText = `${min}:${sec}`
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
prevBtnSec.addEventListener('click', prevSec);
nextBtnSec.addEventListener('click', nextSec);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', updateDuration);
audio.addEventListener('timeupdate', updateCurrentTime)
progressContainer.addEventListener('click', setProgress);
fastBtn.addEventListener('click', fastForward);