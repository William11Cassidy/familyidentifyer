console.log(ml5.version);

Webcam.set({
    width: 350,
    hieght: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach("#camera")

function takesnapshot() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='picture' src='" + data + "'>"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/V9bBPt5O2/model.json", modelloaded)

function modelloaded() {
    console.log("model loaded");
}