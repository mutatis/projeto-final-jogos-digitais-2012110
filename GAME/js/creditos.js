function SCENECreditos()
{//abre creditos

	this.botao_volta = new Botao("img/play.png", 119, 51, 386, 452)
  
  this.update=function()
  {//abre update
  
  };//fecha update
  
  this.draw = function()
  {//abre draw
  
 	 	screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("CREDITOS", 20, 20);
		
		this.botao_volta.draw()

  };//fecha draw
  
  
  this.mouse_down=function(mouse)
  {//abre mouse down
  
  		console.log("CREDITS mouse X " + mouse.x + " mouse Y " + mouse.y );
  		if(this.botao_volta.clicado(mouse))
  		{
  			currentScene = SCENES.PLAY;	
  		}
  
   };//fecha mouse down
  
  
  this.key_down=function(key)
  {//abre key down
    
  
  };//fecha key down
  
      
  this.mouse_up=function(mouse)
  {//abre mouse up
  
  
  };//fecha mouse up
  
  this.key_up=function(key)
  {//abre key up
  
  
  };//fecha key up

  
}//fecha creditos