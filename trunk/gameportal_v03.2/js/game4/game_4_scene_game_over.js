function Game4SceneGameOver()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game_over.jpg",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.voltar_btn = new Button_2("imgs/Menu.png", 175, 77, 607, 518);
	this.restart_btn = new Button_2("imgs/Rgame.png", 175, 77,12, 518);

	this.update=function()
	{
	
	};
	
	this.draw=function()
	{  		
		// img de fundo
		this.fundo.draw();
			
		this.voltar_btn.draw();	
			
		this.restart_btn.draw();						
	};
	    
	this.mouse_down=function(mouse)
	{
		if(this.voltar_btn.clicked(mouse))
		{	
			game4.currentGameScene = game4.GAMESCENE.INTRO; 
			//som de click
			click_btn.play();
		};
					
			if(this.restart_btn.clicked(mouse))
			{	
				game4.currentGameScene = game4.GAMESCENE.LEVEL1; 
				//som de click
				click_btn.play();
			};		
	};//mouse	
		
};//function