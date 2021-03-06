Webcam.set({
    width:300,    
    height:300,
    img_format:"png",
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach(camera);
console.log("ml5.version",ml5.version)
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
console.log("modeloaded");
}
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img src='"+data_uri+"'id='pic'>";
    });
};
function identify(){
    var snip=document.getElementById("pic");
classifier.classify(snip,gotresult);
};
function gotresult(error,result){
    if (error){
console.log(error)

    }
    else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label;
    }
}