function Game3SceneTheEnd()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/capa-do-jogo-venceuwin.png",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.voltar_btn = new Button_2("imgs/Menuwin.png", 175, 77, 607, 518);
	this.restart_btn = new Button_2("imgs/Rgamewin.png", 175, 77,12, 518);
	
	
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
					game3.currentGameScene = game3.GAMESCENE.INTRO;
					//som de click
					click_btn.play();
				};					
				
			if(this.restart_btn.clicked(mouse))
				{	
					game3.currentGameScene = game3.GAMESCENE.LEVEL1; 
					//som de click
					click_btn.play();
				};		
		};//mouse	
	    
};//function