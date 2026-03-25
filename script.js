var audio = document.createElement("audio");
audio.src = "sound.mp3";
audio.loop = true;

document.addEventListener("click", function () {
    audio.play();
});
