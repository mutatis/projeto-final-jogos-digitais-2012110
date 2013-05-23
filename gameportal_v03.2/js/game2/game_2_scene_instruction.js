function Game2SceneInstruction()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game2/credita.png",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.voltar_btn = new Button_2("imgs/game2/close.png", 50, 50, 675, 215);
	
	this.player = new Game2Player("imgs/game2/animation.png", 88, 117, 190, 450, 4, -0.1, 4 ,10);
	
	
	this.update=function()
		{
			
			this.player.position_x_dst += this.player.velocity_x;
			this.player.position_y_dst += this.player.velocity_y;
		
		if(this.player.position_x_dst > 815)
		{
			this.player.image.src = ("imgs/game2/animation2.png")
			this.player.velocity_x = -4;
			this.player.velocity_y = 0.1;
		}
		
		if(this.player.position_x_dst < -90)
		{
			this.player.image.src = ("imgs/game2/animation.png")
			this.player.velocity_x = 4;
			this.player.velocity_y = -0.1;
		}	    	

		};
	
	this.draw=function()
		{  		
			// img de fundo
			this.fundo.draw();
			
			//--Botão--
			this.voltar_btn.draw();
			
			this.player.draw();
		};
		
	this.mouse_down=function(mouse)
	{
			if(this.voltar_btn.clicked(mouse))
			{	
				game2.currentGameScene = game2.GAMESCENE.INTRO; 
				//som de click
				click_btn.play();						
			};
	};
				
};