let playing = false;
function smashPlay() {
  let audio = document.getElementById("audio");
  if (playing === false) {
    audio.play();
    playing = true;
    document.getElementById("audioText").innerHTML = "⋆˚꩜｡";
  } else {
    audio.pause();
    playing = false;
    document.getElementById("audioText").innerHTML = "♫";
  }
}