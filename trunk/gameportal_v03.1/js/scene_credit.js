function SceneCredit()
{

	//--img de fundo----------------file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/credits.jpg",800, 600, 0, 0);
	
	
	this.background = new Image();
	this.background.src="imgs/background.png";
	this.loaded = false;		
	
    this.button_back = new Button("imgs/button_back.png", 70, 70);
    this.button_back.position_x = 500;
    this.button_back.position_y = 500;
    
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
   	{
   		//screen.drawImage(this.background, 0, 0);
		
		// desenha img
   		this.fundo.draw();
		
   		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("CREDIT", 20, 20);
   		
   		this.button_back.draw();
   	};
   
   
   	this.mouse_down=function(mouse)
   	{
   		if(this.button_back.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
    	}
   	};
   
   	this.key_down=function(key)
   
   	{
   		
   	};
   
}