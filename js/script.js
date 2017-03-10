var play = true;

function onKeyDown(event) {
    var myAudio = document.getElementById("bgaud");
    switch (event.keyCode) {
        case 32: //SpaceBar                    
            if (play) {
                myAudio.pause();
                play = false;
            } else {
                myAudio.play();
                play = true;
            }
            break;
    }
    return false;
}

window.addEventListener("keydown", onKeyDown, false);

var randomSong;

function songSelecter(){
    var songs = ["kanye", "mansion", "real", "timmy"];

    var rand = Math.floor(Math.random() * songs.length);
    randomSong = songs[rand];
}

songSelecter();
var audioPath = "files/media/" + randomSong + ".mp3";