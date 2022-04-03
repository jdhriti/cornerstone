const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById('title');
const album = document.getElementById('album');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const play = document.getElementById("play");
const next = document.getElementById('next');
const cover = document.getElementById('cover');
const loop = document.getElementById('loop');
const shuffle = document.getElementById('shuffle');
const down = document.getElementById('down');
const down1 = document.getElementById('down1');
const down2 = document.getElementById('down2');
const down3 = document.getElementById('down3');
const down4 = document.getElementById('down4');
const sNames = document.getElementById('sNames');
const sNames1 = document.getElementById('sNames1');
const sNames2 = document.getElementById('sNames2');
const sNames3 = document.getElementById('sNames3');
const sNames4 = document.getElementById('sNames4');

const wpsiatwin = Array.from(document.querySelectorAll('#wpsiatwin>ul>li'));
const fwn = Array.from(document.querySelectorAll('#fwn>ul>li'));
const am = Array.from(document.querySelectorAll('#am>ul>li'));
const humbug = Array.from(document.querySelectorAll('#humbug>ul>li'));
const sias = Array.from(document.querySelectorAll('#sias>ul>li'));


let song_duration = document.getElementById('duration');
let current = document.getElementById('current-time');
const progress_div = document.getElementById('progress-div');
let progress = document.getElementById("progress");
const array1 = [];
let a = 0;


let isplaying = false;
const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    cover.classList.add("anime");
};
const pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    cover.classList.remove("anime");
};
play.addEventListener("click", () =>{
    isplaying?pausemusic():playmusic(); 
});
let isloop = false;
const loopmusic = () => {
    isloop= true;
    document.getElementById('audio').loop = true;
    document.getElementById('loop').style.color = "green";
    
};
const unloop =  () => {
    isloop= false;
    document.getElementById('audio').loop = false;
    document.getElementById('loop').style.color = "#242424";
};
loop.addEventListener("click" , () => {
    isloop?unloop():loopmusic();
});
const songs = [
    {
        title : "the view from the afternoon",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "i bet you look good on the dancefloor",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "dancing shoes",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "red light indicates doors are secured",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "mardy bum",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "when the sun goes down",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "from the ritz to the rubble",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "a certain romance",
        album : "wpsiatwin",
        artist: "arctic monkeys"
    },
    {
        title : "teddy picker",
        album : "favourite worst nightmare",
        artist: "arctic monkeys"
    },
    {
        title : "balaclava",
        album : "favourite worst nightmare",
        artist: "arctic monkeys"
    },
    {
        title : "fluorescent adolescent",
        album : "favourite worst nightmare",
        artist: "arctic monkeys"
    },
    {
        title : "do me a favour",
        album : "favourite worst nightmare",
        artist: "arctic monkeys"
    },
    {
        title : "old yellow bricks",
        album : "favourite worst nightmare",
        artist: "arctic monkeys"
    },{
        title : "505",
        album : "favourite worst nightmare",
        artist: "arctic monkeys"
    },{
        title : "do i wanna know",
        album : "am",
        artist: "arctic monkeys"
    },{
        title : "r u mine",
        album : "am",
        artist: "arctic monkeys"
    },{
        title : "arabella",
        album : "am",
        artist: "arctic monkeys"
    },{
        title : "no.1 party anthem",
        album : "am",
        artist: "arctic monkeys"
    },
    {
        title : "fireside",
        album : "am",
        artist: "arctic monkeys"
    },{
        title : "why'd you only call me when you're high",
        album : "am",
        artist: "arctic monkeys"
    },{
        title : "knee socks",
        album : "am",
        artist: "arctic monkeys"
    },{
        title : "crying lightning",
        album : "humbug",
        artist: "arctic monkeys"
    },{
        title : "secret door",
        album : "humbug",
        artist: "arctic monkeys"
    },{
        title : "fire and the thud",
        album : "humbug",
        artist: "arctic monkeys"
    },{
        title : "cornerstone",
        album : "humbug",
        artist: "arctic monkeys"
    },{
        title : "pretty visitors",
        album : "humbug",
        artist: "arctic monkeys"
    },{
        title : "the jeweller's hands",
        album : "humbug",
        artist: "arctic monkeys"
    },{
        title : "library pictures",
        album : "suck it and see",
        artist: "arctic monkeys"
    },
]
const loadSongs = (songs) => {
    title.textContent = songs.title;
    album.textContent = songs.album;
    artist.textContent = songs.artist;
    img.src = "images/" + songs.album + ".jpg";
    music.src = "music/" + songs.title + ".mp3"
    
}
let isshuffle = false;
shuffle.addEventListener("click" , () => {
    if(isshuffle){
        unshufflemusic();
    }
    else{
        var i = 0;
        for (i=0 ; i<songs.length ; i++){
             array1[i] = i;
        }
        randomize1(array1);
        console.log(array1);
        shufflemusic();
    }
}
);

let songIndex = 0;
let j = 0;
const nextsong = () => {
    if(j== songs.length){
        j = 0;
    }
    if(isshuffle){
        shufflemusic();
        songIndex = array1[j];
        j++;
    }
    else{songIndex = (songIndex + 1)%songs.length ;}
    loadSongs(songs[songIndex]);
    playmusic();
    
}
const prevsong = () => {
    if(isshuffle){
        shufflemusic();
        if(j==0){
            songIndex = array1[songIndex.length];
        }
        else 
         { --j;
        songIndex = array1[--j];
        j++;}
    }
    else{
    songIndex = (songIndex - 1 +songs.length)%songs.length ;}
    loadSongs(songs[songIndex]);
    playmusic();
}
next.addEventListener("click" , nextsong);
prev.addEventListener("click" , prevsong);
music.onended = () => {
    nextsong();
}


function randomize1(array){
    let currentIndex = songs.length , randomIndex;
    while(currentIndex !=0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        a = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex]= a;
    }
    return array;
}

const shufflemusic = () => {
    isshuffle = true;
    document.getElementById('shuffle').style.color = "green";
   
    // for (i=0 ; i<songs.length ; i++){
    //     songIndex = array1[i];
    //         music.onended = () => {
    //             loadSongs(songs[songIndex]);
    //             playmusic();
    //             shufflemusic();
    //         }
    //     }
    } 
 const unshufflemusic = () => {
        isshuffle = false;
        document.getElementById('shuffle').style.color = "#242424";
        music.onended = () => {
            nextsong();
        }
    }
    


music.addEventListener("timeupdate", (event) =>{
    const{currentTime,duration} = event.target; //dynamic, get live time from the site
    // console.log(currentTime);
    let progress_time = (currentTime/duration)*100;
    progress.style.width = `${progress_time}%`; //DO NOT forget to add % sign ever!
    //duration update
    let min_duration = Math.floor(duration/60); //minute duration
    let sec_duration = Math.floor(duration%60); //seconds duration
    if(sec_duration<10){
        sec_duration = `0${sec_duration}`;
    }


    let total_duration = `${min_duration}:${sec_duration}`;
    // song_duration.textContent = total_duration; 
    // the above gives NaN for a millisecond before showing so fixing the prob
    if(duration){ 
        //DO NOT use total_duration, it's in 0:00 format
        //will not give NaN value because the code will execute only after duration is calculated
        song_duration.textContent = `${total_duration}`; 
    }


    let min_currentTime = Math.floor(currentTime/60); //minute currentTime
    let sec_currentTime = Math.floor(currentTime%60); //seconds currentTime
    if(sec_currentTime<10){
        sec_currentTime = `0${sec_currentTime}`;
    }

    let total_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current.textContent = total_currentTime; 
    
   
});

//progress onclick functionality
 
progress_div.addEventListener('click' , (event)=>{
    
    const {duration} = music;
    let move_progress = (event.offsetX/event.target.clientWidth)*duration;
    music.currentTime = move_progress;

});

//sidenav 
const  openNav = () => {
    document.getElementById('sidenav').style.width = "250px";
}
const  closeNav = () => {
    document.getElementById('sidenav').style.width = "0px";
}
let isDown = false;
let isDown1 = false;
let isDown2 = false;
let isDown3 = false;
let isDown4 = false;
var b;
var c;

down.addEventListener('click',() => {
   if(isDown){
    
       isDown= false;
    upbar(sNames , down);
   }
   else{
    
       isDown= true;
    downbar(sNames , down);
   }
});
const upbar = (sNames , down) => {
    down.classList.replace("fa-caret-up","fa-caret-down");
     sNames.style.display = "none";
}
const downbar = (sNames , down) => {
     down.classList.replace("fa-caret-down" , "fa-caret-up");
    sNames.style.display = "block";
}
down1.addEventListener('click',() => {
    if(isDown1){
        isDown1= false;
     upbar(sNames1, down1);
    }
    else{
        isDown1= true;
     downbar(sNames1,down1);
    }
 });
 down2.addEventListener('click',() => {
    if(isDown2){
        isDown2= false;
     upbar(sNames2, down2);
    }
    else{
        isDown2= true;
     downbar(sNames2 , down2);
    }
 });
 down3.addEventListener('click',() => {
    if(isDown3){
        isDown3= false;
     upbar(sNames3 , down3);
    }
    else{
        isDown3= true;
     downbar(sNames3 , down3);
    }
 });

 down4.addEventListener('click',() => {
    if(isDown4){
        isDown4= false;
     upbar(sNames4, down4);
    }
    else{
        isDown4= true;
     downbar(sNames4, down4);
    }
 });
var item ;


wpsiatwin.forEach(function(button,index){
    button.addEventListener('click',()=>{
        item = button.textContent;
        var pos = songs.map(function(e){
            return e.title;}).indexOf(item);
            console.log(pos);
            songIndex = pos;
            loadSongs(songs[songIndex]);
            playmusic();
    });
});

fwn.forEach(function(button,index){
    button.addEventListener('click',()=>{
        item = button.textContent;
        var pos = songs.map(function(e){
            return e.title;}).indexOf(item);
            console.log(pos);
            songIndex = pos;
            loadSongs(songs[songIndex]);
            playmusic();
    });
});

am.forEach(function(button,index){
    button.addEventListener('click',()=>{
        item = button.textContent;
        var pos = songs.map(function(e){
            return e.title;}).indexOf(item);
            console.log(pos);
            songIndex = pos;
            loadSongs(songs[songIndex]);
            playmusic();
    });
});

humbug.forEach(function(button,index){
    button.addEventListener('click',()=>{
        item = button.textContent;
        var pos = songs.map(function(e){
            return e.title;}).indexOf(item);
            console.log(pos);
            songIndex = pos;
            loadSongs(songs[songIndex]);
            playmusic();
    });
});

sias.forEach(function(button,index){
    button.addEventListener('click',()=>{
        item = button.textContent;
        var pos = songs.map(function(e){
            return e.title;}).indexOf(item);
            console.log(pos);
            songIndex = pos;
            loadSongs(songs[songIndex]);
            playmusic();
    });
});
 