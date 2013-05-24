function Game4SceneInstruction()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game4/credt_fundo.png",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.voltar_btn = new Button_2("imgs/game4/close.png", 50, 50, 585, 170);
	
	
	this.update=function()
	{
	
	};
	
	this.draw=function()
	{  		
		// img de fundo
		this.fundo.draw();
			
		//--Botão--
		this.voltar_btn.draw();
	};
		
	this.mouse_down=function(mouse)
	{
		if(this.voltar_btn.clicked(mouse))
		{	
			game4.currentGameScene = game4.GAMESCENE.INTRO; 
			//som de click
			click_btn.play();						
		};
	};
				
};