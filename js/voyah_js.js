document.getElementById('backwardBtn').addEventListener('click', skipBackward);
document.getElementById('forwardBtn').addEventListener('click', skipForward);

function skipForward() {
    var video = document.getElementById("myVideo");
    video.currentTime = Math.min(video.currentTime + 10, video.duration);
}

function skipBackward() {
    var video = document.getElementById("myVideo");
    video.currentTime = Math.max(video.currentTime - 10, 0);
}
