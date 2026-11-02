// Select the video element and the text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Video file paths for toggling
const videoSources = [
  "videos/video01.mp4",
  "videos/video02.mp4",
  "videos/video03.mp4",
  "videos/video04.mp4",
  "videos/video05.mp4"
];

// Which video is playing (0 = first)
let currentVideoIndex = 0;

// Saved playback time for each video
const videoTimes = [0, 0, 0, 0, 0];

// Browsers block sound until the user interacts with the page
var isSoundEnabled = false;

// Pick a random video index that is not the current one
function getRandomIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * videoSources.length);
  } while (newIndex === currentVideoIndex);
  return newIndex;
}

function toggleVideo() {
  // First click: turn the sound on
  if (isSoundEnabled === false) {
    videoPlayer.muted = false;
    isSoundEnabled = true;
  }

  // Save where the current video is
  videoTimes[currentVideoIndex] = videoPlayer.currentTime;

  // Pick a new random video (not the one that is playing)
  currentVideoIndex = getRandomIndex();

  // Load the chosen video and resume from its saved time
  videoPlayer.src = videoSources[currentVideoIndex];
  videoPlayer.load();
  videoPlayer.currentTime = videoTimes[currentVideoIndex];
  videoPlayer.play();
}

// Clicking the text box switches videos
textBox.addEventListener("click", toggleVideo);