function Creditos()
{	
	this.background = new fundo("img/Fundo.png", 900, 600);
	this.botao_back = new Button("img/Back.png", 339, 41, 200, 490);
	
	
	this.update=function()
   {
   	
   };
   
   this.draw=function()
   {
   	
		this.background.draw();
		this.botao_back.draw();
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("CREDiITOS", 20, 20);
  };
   
   
    this.mouse_down=function(mouse)
    {
    	console.log("CREDITS mouse X " + mouse.x + " mouse Y " + mouse.y );
    	if(this.botao_back.clicked(mouse))
		{
			currentScene = SCENE.INTRODUCAO;
    	};
    


   this.key_down=function(key)
   	{
   	
   	};
   
       
   this.mouse_up=function(mouse)
   	{
   	
   	};
   
   this.key_up=function(key)
   	{
   	
   	};

   }

}