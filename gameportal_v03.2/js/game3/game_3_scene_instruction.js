function Game3SceneInstruction()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game3/INSTRUCTION.png",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.voltar_btn = new Button_2("imgs/game3/inst_btn.png", 172, 52, 601, 529);
	
	
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
						game3.currentGameScene = game3.GAMESCENE.INTRO; 
						//som de click
						click_btn.play();						
					};
		};
				
};