var canvas = new fabric.Canvas('myCanvas');

block_width=30;
block_height=30;
player_X=10;
player_Y=10;
var player_object="";
var block_object="";

block_img_width=50;
block_img_height=50;

var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object=Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
          block_object.set({
              top:player_Y,
              left:player_X
          });
          canvas.add(block_object);
          
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='71'){
        console.log("shift and G pressed together");
        new_image('GOLD.jpg');
    }
    if (keypressed=='83'){
        new_image('S.jpg');
        console.log("s");
    }
    if(e.shiftKey==true && keypressed=='66'){
        console.log("shift and G pressed together");
        new_image('BLACK.png');
    }


    if (keypressed=='82'){
        new_image('R.jpg');
        console.log("r");
    
    }
    if (keypressed=='66'){
        new_image('B.jpg');
        console.log("b");
    }

    if (keypressed=='71'){
        new_image('G.jpg');
        console.log("g");
    }
    if (keypressed=='80'){
        new_image('P.jpg');
        console.log("p");
    }
    
}

function up(){
    if(player_y>=0){
        player_y-=block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when up arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function down(){
    if(player_y<=500){
        player_y+=block_img_height;
        console.log("block image height ="+block_img_height);
        console.log("when down arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function left(){
    if(player_x>0){
        player_x-=block_img_width;
        console.log("block image height ="+block_img_width);
        console.log("when left arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function right(){
    if(player_x<=850){
        player_x+=block_img_width;
        console.log("block image height ="+block_img_width);
        console.log("when right arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

}
