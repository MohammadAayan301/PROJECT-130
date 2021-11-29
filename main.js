dk_song_1 = "";
dk_song_2 = "";
scoreleftwrist=0;
scorerightwrist=0;
leftWrist=0;
rightWrist=0;
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
song1_status="";
song2_status="";

function preload() {
    dk_song_1 = loadSound("dkumar.mp3");
    dk_song_2 = loadSound("dkumar2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 600, 500);

    song1_status=dk_song_1.isPlaying();
    song2_status=dk_song_2.isPlaying();
}

function modelloaded() {
    console.log("POSENET IS INITIALIZED!")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log("scoreleftwrist = " + scoreleftwrist + " scorerightwrist = " + scorerightwrist);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = " + leftwristx + " leftwristy = " + leftwristy);

        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightwristx = " + rightwristx + " rightwristy = " + rightwristy);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}