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

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/train/image.json", modelloaded)

function modelloaded() {
    console.log("model loaded");
}

function check(){
    img=document.getElementById("picture")
    classifier.classify(img,gotresult)

}

function gotresult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
document.getElementById("result_object").innerHTML=result[0].label
document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3)

    }
}