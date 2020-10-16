class Game{
 constructor(){

 }
getState(){
    var gameStateref = database.ref('gameState');
  gameStateref.on("value", function(data){
      gameState=data.val();
  });


}

 update(state){
  database.ref('/').update({
  gameState:state    
  })

 }
 start(){
     if(gameState===0){

        player=new Player()
        player.getCount()
        form=new Form();
        form.display();
     }
 }
   play(){

    form.hide();
    text("game started",120,100);
    Player.getPlayerInfo();
     if(allPlayer!=undefined){
     
        var postion=130 
        for(var plr in allPlayer) {
         if(plr=="player"+player.index){
         fill("blue")
         }else{  
            
           fill("red") 

         }

         positon=position+20
         text(allPlayer[plr].name+": "+allPlayer[plr].distance,120,position   )
         }
         
        
                     
     }
 

     if(keyIsDown(UP_ARROW)){

      player.distance += 50

      player.update;

     }

    }

}