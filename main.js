Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_URL){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_URL+'"/>';
    });
}

console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
}

function check()
{
    img=document.getElementById("captured_img");
    classifier.classify(img,gotresult);
}

function gotresult(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}