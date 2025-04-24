document.getElementById('rickRollButton').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('rickRollVideo');
    videoContainer.style.display = 'block';
    video.currentTime = 0;
    video.play();
});