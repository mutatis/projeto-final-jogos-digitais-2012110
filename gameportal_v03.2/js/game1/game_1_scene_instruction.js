function Game1SceneInstruction()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game1/Instruction.jpg",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.voltar_btn = new Button_2("imgs/game1/	returndoinstruction.png", 134, 110, 612, 482);
	this.play_game_btn = new Button_2("imgs/game1/Accept.png", 134, 110, 363, 480);	
	
	
	this.update=function()
		{
	
		};
	
	this.draw=function()
		{  		
			// img de fundo
			this.fundo.draw();
			
			//--Botão--
			this.voltar_btn.draw();
			this.play_game_btn.draw();

		};
		
	this.mouse_down=function(mouse)
		{
			if(this.voltar_btn.clicked(mouse))
					{	
						game1.currentGameScene = game1.GAMESCENE.INTRO; 
						//som de click
						click_btn.play();						
					};
			if(this.play_game_btn.clicked(mouse))
					{	
						game1.currentGameScene = game1.GAMESCENE.LEVEL1; 
						//som de click
						click_btn.play();						
					};				
					
		};
				
};