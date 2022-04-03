btsimage = "";
modelstatus = "";
finalresultsarray = [];

function backbtn() {
    window.location = "home.html";
}

function preload() {
    btsimage = loadImage("BTS.jpeg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    cocomodel = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("statustag").innerHTML = "Detecting My Bias...";
}

function modelloaded() {
    console.log("model has loaded");
    modelstatus = true;
    cocomodel.detect(btsimage, getreults);
}

function getreults(arrayresults, arrayerror) {

    if (arrayerror) {
        console.error(arrayerror);
    } else {
        console.log(arrayresults);
        finalresultsarray = arrayresults;
    }
}

function draw() {
    image(btsimage, 0, 0, 700, 500);

    if (modelstatus != "") {

        for (loopvalue = 0; loopvalue <= finalresultsarray.length; loopvalue = loopvalue + 1) {

            stroke("blue");
            noFill();
            rect(finalresultsarray[loopvalue].x, finalresultsarray[loopvalue].y, finalresultsarray[loopvalue].width, finalresultsarray[loopvalue].height);
            stroke("blue");
            fill("blue");
            text(finalresultsarray[loopvalue].label, finalresultsarray[loopvalue].x, finalresultsarray[loopvalue].y)
        }

    }


}