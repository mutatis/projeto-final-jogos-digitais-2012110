function Instrucao()
{
	this.background = new fundo("img/INSTRUCTION.png", 900, 600, 0, 0);
	
   this.update=function()
   {
	
   };
   
   this.draw=function()
   {
		 
	this.background.draw();	 
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("fsdg asshsf h", 20, 20);
   };
   
   
    this.mouse_down=function(mouse)
	{
		if(this.Back.clicked(mouse))
		{
			console.log("cena creditos mouse X " + mouse.x + " mouse Y " + mouse.y );
			currentScene = SCENE.INTRODUCAO;
		};
   }
	   
   
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
