var ball;

var pos,database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,30,30);
    ball.shapeColor = "red";
    database = firebase.database();
    var locRef = database.ref("ball/position");
    locRef.on("value",readOp,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref("ball/position").set({x:ball.x + x,y:ball.y + y})
}

function readOp(data){
pos = data.val();
ball.x = pos.x;
ball.y = pos.y;
}

function showError(){
    console.log("This is the error function");
}