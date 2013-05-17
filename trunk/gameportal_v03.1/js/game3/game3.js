function SceneGame3()
{		
	this.intro = new Game3SceneIntro();
	this.leve1 = new Game3SceneLevel1();
	this.theEnd = new Game3SceneTheEnd();
	this.gameOver = new Game3SceneGameOver();
	this.instruction = new Game3SceneInstruction();
	
	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3, INSTRUCTION:4 };
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
	
	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_start = new Button_2("imgs/game3/but_play.jpg", 178, 64, 311, 150);
	this.button_voltar = new Button_2("imgs/game3/but_voltar.jpg", 178, 64, 311,290);
	this.button_instrucao = new Button_2("imgs/game3/but_instru.jpg", 178, 64, 311, 220);
	
	
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				this.intro.update();
			break;
			case this.GAMESCENE.LEVEL1:
				this.leve1.update();
				
			break;
			case this.GAMESCENE.THEEND:
				//theEnd.update();
			break;
			case this.GAMESCENE.GAMEOVER:
				//gameOver.update();
			break;
			case this.GAMESCENE.INSTRUCTION:
			//
			break;
		}
	}

	this.draw=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
			
				// desenha botão 
				this.button_voltar.draw();
				this.button_instrucao.draw();
				this.button_start.draw();
			
				this.intro.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 INTRO", 20, 20);
			break;
			case this.GAMESCENE.LEVEL1:
				this.leve1.draw();
				//screen.font = "20px Comic Sans MS";
				//screen.fillStyle="#000000";
				//screen.fillText("GAME3 LEVEL1", 20, 20);
			break;
			case this.GAMESCENE.INSTRUCTION:
				this.instruction.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 INSTRUCTION", 20, 20);
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
				//this.currentGameScene = this.GAMESCENE.LEVEL1;

				// click para comesar o game
			if(this.button_start.clicked(mouse))
				{
					// vai para o game
					this.currentGameScene = this.GAMESCENE.LEVEL1;	
				}
			
			
			// vai para instrução do game
			if(this.button_instrucao.clicked(mouse))
				{
					this.currentGameScene = this.GAMESCENE.INSTRUCTION; 	
				}
				
				
				// click para volta para o menu inicial do portal
				if(this.button_voltar.clicked(mouse))
				{
					// vai para o menu inicial do portal
					currentScene = SCENE.MENU;
					
					// aumenta o volume da musica do menu inicial
					musica.volume = 0.09;	
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
			
			case this.GAMESCENE.INSTRUCTION:
				this.currentGameScene = this.GAMESCENE.INTRO;
			break;
			
			
			
			
			
			
			
			
		}	
	}

	

	  this.key_down=function(key)
    {
		this.leve1.key_down(key);	    	
    };
    
    this.key_up=function(key)
    {		
		this.leve1.key_up(key);
    }; 

	
	
	
	
	
	
	
	
	
	
	
}