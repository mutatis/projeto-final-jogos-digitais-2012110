function SCENETutorial()
{//abre tutorial
  
  this.tutorial = new Fundo("img/fundo.jpg", 0, 0)
  
  this.update=function()
  {//abre update
  
  };//fecha update
  
  this.draw = function()
  {//abre draw

this.tutorial.draw();

  };//fecha draw
  
  
  this.mouse_down=function(mouse)
  {//abre mouse down
  
  console.log("CREDITS mouse X " + mouse.x + " mouse Y " + mouse.y );
  
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

  
}//fecha tutorial