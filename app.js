console.log('hello');
const music = new Audio('Audio/0.mp3')


var rightButton = document.getElementById('right');
rightButton.onclick = () => {
    var container = document.getElementById('box');
    sideScroll(container, 'right', 250, 100, 135);
}

var leftButton = document.getElementById('left')
leftButton.onclick = () => {
    var container = document.getElementById('box');
    sideScroll(container, 'left', 250, 100, 135);
}

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}

const songs = [{
    id: '1',
    songName: `Dandelions <br>
    <div class="subtitle">Ruth B</div>`,
    poster: "../images/Dandelions.jpeg"
},
{
    id: '2',
    songName: `At My Worst <br>
    <div class="subtitle">Pink Sweat</div>`,
    poster: "../images/at my worst.jpeg"
},
{
    id: '3',
    songName: `Arcade <br>
    <div class="subtitle">Duncan Laurance</div>`,
    poster: "../images/arcade.jpeg"
},
{
    id: '4',
    songName: `Believer <br>
    <div class="subtitle">Imagine Dragons</div>`,
    poster: "../images/Believer.jpeg"
},
{
    id: '5',
    songName: `Enemy <br>
    <div class="subtitle">Imagine Dragons</div>`,
    poster: "../images/Enemy.jpeg",
},
{
    id: '6',
    songName: `Memories <br>
    <div class="subtitle">Maroon 5</div>`,
    poster: "../images/Memories.jpeg",
},
{
    id: '7',
    songName: `Middle-Of-The-Night <br>
    <div class="subtitle">Elley Duhe</div>`,
    poster: "../images/Middle-Of-The-Night.jpeg",
},
{
    id: '8',
    songName: `Snap <br>
    <div class="subtitle">Rosa Linn</div>`,
    poster: "../images/snap.jpeg",
},
{
    id: '9',
    songName: `The Nights <br>
    <div class="subtitle">Avicii</div>`,
    poster: "../images/The-Nights.jpeg",
},
]


const popularSongs = [{
    id: '10',
    songName: `Let Me Love You 
    <div class="subtitle">DJ Snakes</div>`,
    poster: "../images/let-me-love-you.jpeg"
},
{
    id: '11',
    songName: `Life Of Ram 
    <div class="subtitle">96</div>`,
    poster: "../images/96.jpeg"
},
{
    id: '12',
    songName: `Nene nuvvantu
    <div class="subtitle">Harris J</div>`,
    poster: "../images/orange.jpeg"
},
{
    id: '13',
    songName: `Malang Sajna 
    <div class="subtitle">Artist</div>`,
    poster: "../images/malang-sajna.jpeg"
},
{
    id: '14',
    songName: `Levitating 
    <div class="subtitle">Dua Lipa</div>`,
    poster: "../images/levitating.jpeg"
},
{
    id: '15',
    songName: `Oola Oolala
    <div class="subtitle">Harris J</div>`,
    poster: "../images/orange.jpeg"
},
{
    id: '16',
    songName: `People 
    <div class="subtitle">Libianca</div>`,
    poster: "../images/people.jpeg"
},
{
    id: '17',
    songName: `Once upon a time
    <div class="subtitle">Anirudh</div>`,
    poster: "../images/vikram.jpeg"
},
{
    id: '18',
    songName: `Steal My Girl 
    <div class="subtitle">1 direction</div>`,
    poster: "../images/steal my girl.jpeg"
},
{
    id: '19',
    songName: `Thunder 
    <div class="subtitle">Imagine Dragons</div>`,
    poster: "../images/thunder.jpeg"
},
{
    id: '20',
    songName: `Unstoppable 
    <div class="subtitle">Sia</div>`,
    poster: "../images/unstoppable.jpeg"
},
{
    id: '21',
    songName: `Until I Found
    <div class="subtitle">Stephan Sanchez</div>`,
    poster: "../images/96.jpeg"
},
{
    id: '22',
    songName: `vikram
    <div class="subtitle">Anirudh</div>`,
    poster: "../images/vikram.jpeg"
},
{
    id: '23',
    songName: `Hello Rammante
    <div class="subtitle">Harris J</div>`,
    poster: "../images/orange.jpeg"
},
{
    id: '24',
    songName: `Porkanda Singam
    <div class="subtitle">Anirudh</div>`,
    poster: "../images/vikram.jpeg"
},
]

Array.from(document.getElementsByClassName('songitem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

Array.from(document.getElementsByClassName('popularSong-item')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = popularSongs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = popularSongs[i].songName;
})




let masterplay = document.getElementById('play-pause');
masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause()
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill')

    }
})



const playMusic = () => {
    Array.from(document.getElementsByClassName('playlist-play')).forEach((element) => {
        element.classList.add('bi-play-fill');
        element.classList.remove('bi-pause-fill');
    })
}

let index = 0;
Array.from(document.getElementsByClassName('playlist-play')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        console.log(index)
        playMusic();
        e.target.classList.remove('bi-play-fill');
        e.target.classList.add('bi-pause-fill');
        music.src = `Audio/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    })
})

let startTime=document.getElementById('start-time')
let endTime=document.getElementById('end-time')
let playBar=document.getElementById('playbar');


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min=Math.floor(music_dur/60);
    let sec=Math.floor(music_dur%60);
    if(sec<10){
        sec=`0${sec}`
    } 
    endTime.innerText=`${min}:${sec}`;

    let min1=Math.floor(music_curr/60);
    let sec1=Math.floor(music_curr%60);
    if(sec1<10){
        sec1=`0${sec1}`
    } 
    startTime.innerText=`${min1}:${sec1}`;

    let progressBar=parseInt((music.currentTime/music.duration)*100);
    playBar.value=progressBar
})

playBar.addEventListener('change',()=>{
    music.currentTime=playBar.value*music.duration/100;
})

let volumeicon=document.getElementById('volume-icon');
let volumee=document.getElementById('soundbar');
volumee.addEventListener('change',()=>{
    if(volumee.value==0){
        volumeicon.classList.remove("bi-volume-up-fill")
        volumeicon.classList.remove("bi-volume-down-fill")
        volumeicon.classList.add("bi-volume-off-fill")
    }
    if(volumee.value>0 ){
        volumeicon.classList.remove("bi-volume-up-fill")
        volumeicon.classList.add("bi-volume-down-fill")
        volumeicon.classList.remove("bi-volume-off-fill")
    }
    if(volumee.value>50){
        volumeicon.classList.add("bi-volume-up-fill")
        volumeicon.classList.remove("bi-volume-down-fill")
        volumeicon.classList.remove("bi-volume-off-fill")
    }
    let vol=volumee.value;
    music.volume=vol/100;
    
})

let next=document.getElementById('skip-end');
let prev=document.getElementById('skip-back');

let playlist_len=Array.from(document.getElementsByClassName('songitem')).length;
let popularSongs_len=Array.from(document.getElementsByClassName('popularSong-item')).length;
let totalSongs=playlist_len+popularSongs_len;

prev.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=totalSongs;
    }
        playMusic();
        music.src = `Audio/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
})

next.addEventListener('click',()=>{
    index++;
    if(index>totalSongs){
        index=1;
    }
        playMusic();
        music.src = `Audio/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
})
