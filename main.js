song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.position(500, 160);
    
}

function modelLoaded()
{
    console.log('Pose Net is Initialized!');
    poseNet.on('pose', gotPoses);
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "and Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "and Right Wrist Y = " + rightWristY);
    }
}