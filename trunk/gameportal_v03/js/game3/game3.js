function SceneGame3()
{		
	this.intro = new Game1SceneIntro();
	this.leve1 = new Game1SceneLevel1();
	this.theEnd = new Game1SceneTheEnd();
	this.gameOver = new Game1SceneGameOver();
	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3};
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
	
	//file, size_x, size_y, pos_x, pos_y
	this.button_start = new Button_2("imgs/game3/but_play.jpg", 178, 64, 311, 150);
	this.button_voltar = new Button_2("imgs/game3/but_voltar.jpg", 178, 64, 311,220);
	this.button_instrucao = new Button_2("imgs/game3/but_instru.jpg", 178, 64, 311, 290);
	
	
	
	//file, size_x, size_y, pos_x, pos_y
	this.fundo_intro = new img_cenario("imgs/game3/tela_inicial.jpg",800, 600, 0, 0);
	this.fundo_level1 = new img_cenario("imgs/game3/fundo.jpg",800, 600, 0, 0);
		
		
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				//intro.update();
			break;
			case this.GAMESCENE.LEVEL1:
				//level1.update();
			break;
			case this.GAMESCENE.THEEND:
				//theEnd.update();
			break;
			case this.GAMESCENE.GAMEOVER:
				//gameOver.update();
			break;
		}
	}

	this.draw=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				//intro.draw();
				
				// img de fundo
				this.fundo_intro.draw();
				
				this.button_voltar.draw();
				this.button_instrucao.draw();
				this.button_start.draw();
				
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 INTRO", 20, 20);
			break;
			case this.GAMESCENE.LEVEL1:
				//level1.draw();
				
				this.fundo_level1.draw();
				
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 LEVEL1", 20, 20);
			break;
			case this.GAMESCENE.THEEND:
				//theEnd.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 THEEND", 20, 20);
			break;
			case this.GAMESCENE.GAMEOVER:
				//gameOver.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 GAMEOVER", 20, 20);
			break;
		}
	}
	
	this.mouse_down=function(mouse)
   	{
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
			
			if(this.button_start.clicked(mouse))
				{
					this.currentGameScene = this.GAMESCENE.LEVEL1;	
				}
			
			if(this.button_instrucao.clicked(mouse))
				{
					//currentScene = SCENES.INSRUCAO;	
				}
				
				if(this.button_voltar.clicked(mouse))
				{
					currentScene = SCENE.MENU;
				}
				
	
			break;
			
			case this.GAMESCENE.LEVEL1:
				//this.currentGameScene = this.GAMESCENE.THEEND;
			break;
			case this.GAMESCENE.THEEND:
				this.currentGameScene = this.GAMESCENE.GAMEOVER;
			break;
			case this.GAMESCENE.GAMEOVER:
				this.currentGameScene = this.GAMESCENE.INTRO;
				currentScene = SCENE.MENU;
			break;
		}	
	}

}