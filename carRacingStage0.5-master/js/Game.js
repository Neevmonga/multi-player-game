class Game {

  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("Same Stars Now",50,50)
    Player.getplayerinfo();
    if(allplayers!==undefined){
      var displayposition=50;
      for(var i in allplayers){
        if(i==="player"+player.index){
          fill ("red")
        }else {fill("black")
      }
      }
      displayposition=displayposition+20

    }
    if (keyIsDown(UP_ARROW)&&player.index!==null){
     player.distance+=50;
     player.update()
    }
  }
}
