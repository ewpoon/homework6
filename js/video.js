var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	// document.querySelector('h1').innerHTML
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.getElementById("myVideo");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video = document.querySelector("#myVideo");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video = document.getElementById("myVideo");
	
	video.playbackRate = video.playbackRate - (video.playbackRate * 0.1);
	// change the speed
	console.log("speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video = document.getElementById("myVideo");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video = document.getElementById("myVideo");
	if (video.currentTime + 5 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = video.currentTime + 5;
	}
	console.log("Current Location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video = document.getElementById("myVideo");
	if (video.muted == true) {
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
	console.log(video.muted);
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	let volumeNum = document.getElementById('volumeSlider');
	video = document.getElementById('myVideo');
	// video.volume = video.value / 100;
	// go back to this; figure out a way to get the volume value from the slider
	video.volume = volumeNum.value / 100;
	console.log(video.volume);
	document.getElementById('volume').innerHTML = (video.volume * 100) + '%';
});

document.querySelector("#old").addEventListener("click", function() {
	// document.body.style = document.getElementsByClassName(".oldTime");
	// document.getElementsByName('body') = document.getElementsByClassName('.oldTime');
	// video = document.getElementsByTagName('body');
	// document.body.style = document.getElementsByClassName('.oldTime');
	// document.body.classList.add('oldTime');
	document.body.className = 'oldTime';
	// is this right?
});

document.querySelector("#original").addEventListener("click", function() {
	document.body.classList.remove('oldTime');
	
});
