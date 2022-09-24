// Grabbing Element from the DOM
const musicContainer = document.querySelector('.music-container');
const listContainer = document.querySelector('.list-container');
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
const cover = document.getElementById('cover');
const cover_snippet = document.getElementById('cover-snippet');
const list = document.getElementById('list');
const favoriteList = document.getElementById('favorite');
const playlistList = document.getElementById('playlist');
const artist = document.getElementById('artist');
const artist_snippet = document.getElementById('artist-snippet');
let small = document.getElementById('small');
const closeSlide = document.getElementById('close-btn');
const openSlide = document.getElementById('open-btn');
const minimize = document.querySelector('.minimize_container_box');
const songInfo = document.querySelector('.song-info');
const filter = document.getElementById('search_box');

// Swiper Functionality
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });

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
];

// Favorite songs
let favoriteSongs = [
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
    }
]; 

// Playlist songs
let playListSongs = [
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
    }
]; 

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
closeSlide.addEventListener('click', closeSlides);
openSlide.addEventListener('click', openSlides);
minimize.addEventListener('click', openSlides);

let songIndexNo = 0;

const listSongs = () => {
    songs.map((song) => {
        // Create Songs DOM ELement
        let box = document.createElement('div');
        let div = document.createElement('p');
        let li = document.createElement('li');
        let p = document.createElement('p');
        let extension = document.createElement('p');

        // Create popup 
        let popBox = document.createElement('p');
        let popItemOne = document.createElement('p');
        let popItemTwo = document.createElement('p');
        let popItemThree = document.createElement('p');

        // Add Class Name
        box.className = 'box';
        div.className = 'song-info';
        li.className = 'music-list';
        p.className = 'artist';
        extension.className = 'extend';
        popBox.className = 'popBox';
        popItemOne.className = 'popItem';
        popItemTwo.className = 'popItem';
        popItemThree.className = 'popItem';

        // AppendChild
        box.appendChild(div);
        box.appendChild(extension);
        div.appendChild(li);
        div.appendChild(p);
        li.appendChild(document.createTextNode(song.title));
        p.appendChild(document.createTextNode(`${song.artist} ${' - '} ${song.title}`));
        extension.appendChild(document.createTextNode('p'));
        popBox.appendChild(popItemOne);
        popBox.appendChild(popItemTwo);
        popBox.appendChild(popItemThree);
        popItemOne.appendChild(document.createTextNode('Favorite'));
        popItemTwo.appendChild(document.createTextNode('Add to playlist'));
        popItemThree.appendChild(document.createTextNode('Delete'));
        
        // <i class="fa-regular fa-heart"></i>
        // <i class="fa-regular fa-square-plus"></i>
        // <i class="fa-solid fa-trash-can"></i>
        
        // Add EventListener
        div.addEventListener('click', () => {
            songIndex = song.id;
            loadSong(songs[songIndex]);
            playSong();
            musicContainer.classList.add('hide');
            listContainer.classList.add('hide');
        });

        // Popup display function
        extension.addEventListener('click', () => {
            popBox.classList.toggle('extension-container');
        });

        popItemOne.addEventListener('click', () => {
            favoriteSongs =[ 
                ...favoriteSongs, 
                {
                  id: Math.floor(Math.random() * 100),
                  title: song.title,
                  artist: 'codeboyfriend'  
                }
            ]
        });

        popItemTwo.addEventListener('click', () => {
            playListSongs =[ 
                ...playListSongs, 
                {
                  id: Math.floor(Math.random() * 100),
                  title: song.title,
                  artist: 'codeboyfriend'  
                }
            ]
        });

        popItemThree.addEventListener('click', deleteHandler);
        
        // Append to ul
        list.appendChild(box);
        list.appendChild(popBox);
    })
}

// Delete Handler Function
const deleteHandler = (id) => {
    songs.filter((el) => el.id !== id)
  }

const faSongs = () => {
    favoriteSongs.map((favoriteSong) => {
        // Create Favorite songs DOM Element
        let box = document.createElement('div');
        let div = document.createElement('p');
        let li = document.createElement('li');
        let p = document.createElement('p');
        let extension = document.createElement('p');

        // Create Favorite popup 
        let popBox = document.createElement('p');
        let popItemOne = document.createElement('p');
        let popItemTwo = document.createElement('p');
        let popItemThree = document.createElement('p');

        // Add Class Name
        box.className = 'box';
        div.className = 'song-info';
        li.className = 'music-list';
        p.className = 'artist';
        extension.className = 'extend';
        popBox.className = 'popBox';
        popItemOne.className = 'popItem';
        popItemTwo.className = 'popItem';
        popItemThree.className = 'popItem';

        // AppendChild
        box.appendChild(div);
        box.appendChild(extension);
        div.appendChild(li);
        div.appendChild(p);
        li.appendChild(document.createTextNode(favoriteSong.title));
        p.appendChild(document.createTextNode(`${favoriteSong.artist} ${' - '} ${favoriteSong.title}`));
        extension.appendChild(document.createTextNode('p'));
        popBox.appendChild(popItemOne);
        popBox.appendChild(popItemTwo);
        popBox.appendChild(popItemThree);
        popItemOne.appendChild(document.createTextNode('Favorite'));
        popItemTwo.appendChild(document.createTextNode('Add to playlist'));
        popItemThree.appendChild(document.createTextNode('Delete'));

        // Append to ul
        favoriteList.appendChild(box);
        favoriteList.appendChild(popBox);

        // Add EventListener
        div.addEventListener('click', (id) => {
            songIndex = favoriteSong.id;
            loadSong(songs[songIndex]);
            playSong();
            musicContainer.classList.add('hide');
            listContainer.classList.add('hide');
        });

        // Popup display function
        extension.addEventListener('click', (id) => {
            popBox.classList.toggle('extension-container');
        });
    });
}

const paSongs = () => {
    playListSongs.map((playListSong) => {
        // Create Favorite songs DOM Element
        let box = document.createElement('div');
        let div = document.createElement('p');
        let li = document.createElement('li');
        let p = document.createElement('p');
        let extension = document.createElement('p');

        // Create Favorite popup 
        let popBox = document.createElement('p');
        let popItemOne = document.createElement('p');
        let popItemTwo = document.createElement('p');
        let popItemThree = document.createElement('p');

        // Add Class Name
        box.className = 'box';
        div.className = 'song-info';
        li.className = 'music-list';
        p.className = 'artist';
        extension.className = 'extend';
        popBox.className = 'popBox';
        popItemOne.className = 'popItem';
        popItemTwo.className = 'popItem';
        popItemThree.className = 'popItem';

        // AppendChild
        box.appendChild(div);
        box.appendChild(extension);
        div.appendChild(li);
        div.appendChild(p);
        li.appendChild(document.createTextNode(playListSong.title));
        p.appendChild(document.createTextNode(`${playListSong.artist} ${' - '} ${playListSong.title}`));
        extension.appendChild(document.createTextNode('p'));
        popBox.appendChild(popItemOne);
        popBox.appendChild(popItemTwo);
        popBox.appendChild(popItemThree);
        popItemOne.appendChild(document.createTextNode('Favorite'));
        popItemTwo.appendChild(document.createTextNode('Add to playlist'));
        popItemThree.appendChild(document.createTextNode('Delete'));

        // Append to ul
        playlistList.appendChild(box);
        playlistList.appendChild(popBox);

        // Add EventListener
        div.addEventListener('click', (id) => {
            songIndex = playListSong.id;
            loadSong(songs[songIndex]);
            playSong();
            musicContainer.classList.add('hide');
            listContainer.classList.add('hide');
        });

        // Popup display function
        extension.addEventListener('click', (id) => {
            popBox.classList.toggle('extension-container');
        });
    });
}
 
// Call listSongs function
listSongs();
faSongs();
paSongs();

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

// Play Function
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('.fa-solid').classList.add('fa-pause');
    playBtn.querySelector('.fa-solid').classList.remove('fa-play');
    playBtn_snippet.querySelector('.fa-solid').classList.add('fa-pause');
    playBtn_snippet.querySelector('.fa-solid').classList.remove('fa-play');

    audio.play();
}

// Pause Function
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('.fa-solid').classList.remove('fa-pause');
    playBtn.querySelector('.fa-solid').classList.add('fa-play');
    playBtn_snippet.querySelector('.fa-solid').classList.remove('fa-pause');
    playBtn_snippet.querySelector('.fa-solid').classList.add('fa-play');

    audio.pause();
}

// Prev Function
const prevSong = () => {
    songIndex = songIndex - 1;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
};

// Next Function
const nextSong = () => {
    songIndex = songIndex + 1;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
};

// Prev by 30Seconds function
const prevSec = () => {
    audio.currentTime = audio.currentTime - 30.000
}

// Next by 30seconds function
const nextSec = () => {
    audio.currentTime = audio.currentTime + 30.000
}

// Time duration function
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

// Not yet implemented
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

// Progress Function
const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    progress_snippet.style.width = `${progressPercent}%`;
};

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
    let allFaSongs = favoriteList.getElementsByTagName('div');
    let allPaSongs = playlistList.getElementsByTagName('div');
    // Convert collection to array
    Array.from(allSongs).forEach(function (eachSong) {
        let songTitle = eachSong.textContent
        
        if (songTitle.toLowerCase().indexOf(text) != -1) {
            eachSong.style.display = 'flex'
        }else {
            eachSong.style.display = 'none'
        };
    })

    // Favorite songs
    Array.from(allFaSongs).forEach(function (eachFaSong) {
        let songTitle = eachFaSong.textContent
        
        if (songTitle.toLowerCase().indexOf(text) != -1) {
            eachFaSong.style.display = 'flex'
        }else {
            eachFaSong.style.display = 'none'
        };
    });

    // playlist songs
    Array.from(allPaSongs).forEach(function (eachPaSong) {
        let songTitle = eachPaSong.textContent
        
        if (songTitle.toLowerCase().indexOf(text) != -1) {
            eachPaSong.style.display = 'flex';
        }else {
            eachPaSong.style.display = 'none';
        };
    });
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

// Event Listeners
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
filter.addEventListener('keyup', filterSong);