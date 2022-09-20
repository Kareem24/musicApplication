const musicContainer = document.querySelector('.music-container');
const listContainer = document.querySelector('.list-container');
const toggleBtn = document.getElementById('toggle-btn');
const playBtn = document.getElementById('play');
const playBtn_snippet = document.getElementById('play-snippet');
const prevBtn = document.getElementById('prev');
const prevBtnSec = document.getElementById('prev30s');
const nextBtnSec = document.getElementById('next30s');
const nextBtn = document.getElementById('next');
const progress = document.querySelector('.progress');
const progress_snippet = document.querySelector('.progress-snippet');
const progressContainer = document.querySelector('.progress-container');
const progressContainerSnippet = document.querySelector('.progress-container-snippet');
const title = document.getElementById('title');
const title_snippet = document.getElementById('title-snippet');
const audio = document.getElementById('audio');
const songCurrentTime = document.getElementById('currentTime');
const songDuration = document.getElementById('duration');
const fastBtn = document.querySelector('.fast_btn');
const cover = document.getElementById('cover');
const cover_snippet = document.getElementById('cover-snippet');
const listItem = document.getElementById('list-item');
const list = document.getElementById('list');
const artist = document.getElementById('artist');
const artist_snippet = document.getElementById('artist-snippet');
let small = document.getElementById('small');
const closeSlide = document.getElementById('close-btn');
const openSlide = document.getElementById('open-btn');
const minimize = document.querySelector('.minimize_container_box');
const songInfo = document.querySelector('.song-info');
const filter = document.getElementById('search_box');

// Songs
let songs = [
    {
        id: 0,
        title: 'hey',
        artist: 'codeboyfriend'
    },
    {
        id: 1,
        title: 'hello',
        artist: 'codeboyfriend'
    },
    {
        id: 2,
        title: 'world',
        artist: 'codeboyfriend'
    },
    {
        id: 3,
        title: 'love',
        artist: 'codeboyfriend'
    },
    {
        id: 4,
        title: 'hate',
        artist: 'codeboyfriend'
    },
    {
        id: 5,
        title: 'glitter',
        artist: 'codeboyfriend'
    },
    {
        id: 6,
        title: 'Boy',
        artist: 'codeboyfriend'
    },
    {
        id: 7,
        title: 'girl',
        artist: 'codeboyfriend'
    },
    {
        id: 8,
        title: 'empty',
        artist: 'codeboyfriend'
    },
    {
        id: 9,
        title: 'moonlight',
        artist: 'codeboyfriend'
    },
]

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

//  Close Home Function
const closeSlides = () => {
    musicContainer.classList.remove('hide');
    listContainer.classList.remove('hide');
}

//  Open Home Function
const openSlides = () => {
    musicContainer.classList.add('hide');
    listContainer.classList.add('hide');
}

// Add Event Listener
toggleBtn.addEventListener('click', toggleMode);
closeSlide.addEventListener('click', closeSlides);
openSlide.addEventListener('click', openSlides);
minimize.addEventListener('click', openSlides);

let songIndexNo = 0;

const listSongs = () => {
    songs.map((song) => {
        // Create DOM ELement
        let box = document.createElement('div');
        let div = document.createElement('div');
        let li = document.createElement('li');
        let p = document.createElement('p');
        let extension = document.createElement('p')

        // Add 
        box.className = 'box';
        div.className = 'song-info';
        li.className = 'music-list';
        p.className = 'artist';
        extension.className = 'extend';

        // AppendChild
        box.appendChild(div);
        box.appendChild(extension);
        div.appendChild(li);
        div.appendChild(p);
        li.appendChild(document.createTextNode(song.title));
        p.appendChild(document.createTextNode(`${song.artist} ${' - '} ${song.title}`));
        extension.appendChild(document.createTextNode('hi'))
        
        // Add EventListener
        div.addEventListener('click', (id) => {
            songIndex = song.id;
            loadSong(songs[songIndex]);
            playSong();
            musicContainer.classList.add('hide');
            listContainer.classList.add('hide');
        })
        
        // Append to ul
        list.appendChild(box)
        
        // Append to the Dom
        listItem.appendChild(list)
    })
}

// Call listSongs function
listSongs()

// keep track of songs
let songIndex = songIndexNo;

// Initially load song info DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    small.innerText = songs.length;
    title.innerText = song.title;
    title_snippet.innerText = song.title;
    artist.innerText = song.artist;
    artist_snippet.innerText = song.artist;
    audio.src = `music/${song.title}.mp3`;
    cover.src = `images/${song.title}.jpg`;
    cover_snippet.src = `images/${song.title}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('.fa-solid').classList.add('fa-pause');
    playBtn.querySelector('.fa-solid').classList.remove('fa-play');
    playBtn_snippet.querySelector('.fa-solid').classList.add('fa-pause');
    playBtn_snippet.querySelector('.fa-solid').classList.remove('fa-play');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('.fa-solid').classList.remove('fa-pause');
    playBtn.querySelector('.fa-solid').classList.add('fa-play');
    playBtn_snippet.querySelector('.fa-solid').classList.remove('fa-pause');
    playBtn_snippet.querySelector('.fa-solid').classList.add('fa-play');

    audio.pause();
}

const prevSong = () => {
    songIndex = songIndex - 1;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
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
    progress.style.width = `${progressPercent}%`;
    progress_snippet.style.width = `${progressPercent}%`;
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
    
}


const setProgress = (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

const setSnippetProgress = (e) => {
    const width = progressContainerSnippet.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Filter Songs
const filterSong  = (e) => {
    // Get Search Input
    let text = e.target.value.toLowerCase();
    // Get All Songs
    let allSongs = list.getElementsByTagName('div');
    // Convert collection to array
    Array.from(allSongs).forEach(function (eachSong) {
        let songTitle = eachSong.textContent
        
        if (songTitle.toLowerCase().indexOf(text) != -1) {
            eachSong.style.display = 'block'
        }else {
            eachSong.style.display = 'none'
        }
    })
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

playBtn_snippet.addEventListener('click', () => {
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
progressContainerSnippet.addEventListener('click', setSnippetProgress);
fastBtn.addEventListener('click', fastForward);
filter.addEventListener('keyup', filterSong);