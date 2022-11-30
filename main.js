//https://teachablemachine.withgoogle.com/models/JXJdz0kF7/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
 camra=document.getElementById("cam");
Webcam.attach(camra);
function captureing(){
Webcam.snap(function(data_uri){
document.getElementById("pic").innerHTML="<img  id='snapp' src='"+data_uri+"'>"
});
}
console.log("ml5version",ml5.version);
var machine=ml5.imageClassifier("https://teachablemachine.withgoogle.com/model.jason",modelloaded);
function modelloaded(){
console.log("Hiiiiiiiiiiiiiiiii the model is loaded yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
}
function analyseing(){
    var daimage=document.getElementById("snapp");
    machine.classify(daimage,gotresult);

}
function gotresult(error,results){
if(error){
console.error(error);
} else{
    document.getElementById("object").innerHTML=results[0].label
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}