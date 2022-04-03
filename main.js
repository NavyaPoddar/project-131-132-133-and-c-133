dogcatimage = "";
modelstatus = "";
// Will only say true or false it is called a boolean variable //
finalresultsarray = [];

function preload() {
    dogcatimage = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(700, 450);
    canvas.center();
    cocomodel = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("statustag").innerHTML = "Detecting Object..."
}

function modelloaded() {
    console.log("the results are loaded");
    modelstatus = true;
    cocomodel.detect(dogcatimage, getresults);
    // detect function turns on the model //
}

function getresults(arrayresults, arrayerror) {

    if (arrayerror) {
        console.error(arrayerror);
    } else {
        console.log(arrayresults);
        finalresultsarray = arrayresults;
    }
}


function draw() {
    image(dogcatimage, 0, 0, 700, 450);

    if (modelstatus != "") {
        for (loopvalue = 0; loopvalue < finalresultsarray.length; loopvalue = loopvalue + 1) {
            document.getElementById("statustag").innerHTML = "objects detected"
            stroke("cyan");
            noFill();
            rect(finalresultsarray[loopvalue].x, finalresultsarray[loopvalue].y, finalresultsarray[loopvalue].width, finalresultsarray[loopvalue].height);
            stroke("cyan");
            fill("cyan");
            text(finalresultsarray[loopvalue].label, finalresultsarray[loopvalue].x, finalresultsarray[loopvalue].y);
        }
    }

}