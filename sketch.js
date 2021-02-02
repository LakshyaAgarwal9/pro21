var canvas;
var music;
var gameObject1,gameObject2,gameObject3,gameObject4,box;
var edge1,edge2,edge3,edge4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    gameObject1=createSprite(100,550,180,20);
    gameObject1.shapeColor ="green";
    gameObject2=createSprite(300,550,180,20);
    gameObject2.shapeColor ="blue";
    gameObject3=createSprite(500,550,180,20);
    gameObject3.shapeColor ="red";
    gameObject4=createSprite(700,550,180,20);
    gameObject4.shapeColor ="yellow";

    box=createSprite(random(100,700),100,20,20);
    box.velocityX=-5;
    box.velocityY=5;
    
    edge1=createSprite(400,700,800,200);
    edge1.visible=false;
    edge2=createSprite(400,-100,800,200);
    edge2.visible=false;
    edge3=createSprite(-100,300,200,800);
    edge3.visible=false;
    edge4=createSprite(900,300,200,800);
    edge4.visible=false;
}

function draw() {
    background(rgb(169,169,169));
    if(isTouching(box,gameObject1)===true){
        bounceOff(box,gameObject1);
        box.shapeColor=gameObject1.shapeColor;
    }
    if(isTouching(box,gameObject2)===true){
        bounceOff(box,gameObject2);
        box.shapeColor=gameObject2.shapeColor;
        box.velocityX=0;
        box.velocityY=0;
    }
    if(isTouching(box,gameObject3)===true){
        bounceOff(box,gameObject3);
        box.shapeColor=gameObject3.shapeColor;
    }
    if(isTouching(box,gameObject4)===true){
        bounceOff(box,gameObject4);
        box.shapeColor=gameObject4.shapeColor;
    }
    bounceOff(edge1,box);
    bounceOff(edge2,box);
    bounceOff(edge3,box);
    bounceOff(edge4,box);


    //add condition to check if box touching surface and make it box
    drawSprites();
}
