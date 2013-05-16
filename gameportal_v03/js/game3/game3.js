function SceneGame3()
{		
	this.intro = new Game1SceneIntro();
	this.leve1 = new Game1SceneLevel1();
	this.theEnd = new Game1SceneTheEnd();
	this.gameOver = new Game1SceneGameOver();
	this.instruction = new Game1SceneInstruction();
	
	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3, GAMEINSTRUCTION: 4 };
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
	
	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_start = new Button_2("imgs/game3/but_play.jpg", 178, 64, 311, 150);
	this.button_voltar = new Button_2("imgs/game3/but_voltar.jpg", 178, 64, 311,290);
	this.button_instrucao = new Button_2("imgs/game3/but_instru.jpg", 178, 64, 311, 220);
	
	
	//--Background--file, size_x, size_y, pos_x, pos_y
	this.fundo_intro = new img_cenario("imgs/game3/tela_inicial.jpg",800, 600, 0, 0);
	this.fundo_level1 = new img_cenario("imgs/game3/fundo.jpg",800, 600, 0, 0);
	this.fundo_instruction = new img_cenario("imgs/game3/INSTRUCTION.png",800, 600, 0, 0);
		
		
	// --personagem-- 	
	this.player1 = new Pallete();
	this.player1.points = 0;
	this.player1.life = 3;
	
	
	// Elmentos caindo------------------file, size_x, size_y
	this.element1 = new QuimicalElement("imgs/game3/H.png", 47, 48);	
		
		
		
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				//intro.update();
				

				
			break;
			
			case this.GAMESCENE.GAMEINSTRUCTION:
				
			break;			
			
			case this.GAMESCENE.LEVEL1:
				//level1.update();
				
				// --personagem-- 	
				this.player1.update();
				
				// --update para o elementos cair--
				this.element1.update();
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
			
			
			case this.GAMESCENE.GAMEINSTRUCTION:
				this.fundo_instruction.draw();
				
			break;	
			
			
			case this.GAMESCENE.LEVEL1:
				//level1.draw();
				
				//background.
				this.fundo_level1.draw();
				
				// desenha o elemento 
				this.element1.draw();
				
				// desenha o personagem na tela.
				screen.drawImage(this.player1.img, this.player1.position_x, this.player1.position_y);	
			
				// desenha os posntos, vida e etc...
				screen.font="27px Comic Sans";
				screen.fillStyle="#E6F4E9";
				screen.fillText("Vidas: " + this.player1.life,20,28);
				screen.fillText("Pegue os: gases nobres",291,28);
				screen.fillText("Pontos: "+ this.player1.points,639,28);
				
				//screen.font = "20px Comic Sans MS";
				//screen.fillStyle="#000000";
				//screen.fillText("GAME3 LEVEL1", 20, 20);
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
			
			// click para comesar o game
			if(this.button_start.clicked(mouse))
				{
					// vai para o game
					this.currentGameScene = this.GAMESCENE.LEVEL1;	
				}
			
			
			// vai para instrução do game
			if(this.button_instrucao.clicked(mouse))
				{
					this.currentGameScene = this.GAMESCENE.GAMEINSTRUCTION; 	
				}
				
				
				// click para volta para o menu inicial do portal
				if(this.button_voltar.clicked(mouse))
				{
					// vai para o menu inicial do portal
					currentScene = SCENE.MENU;
				}
				
	
			break;
			
			
			case this.GAMESCENE.GAMEINSTRUCTION:
			
				this.currentGameScene = this.GAMESCENE.INTRO; 
				
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

	
	  this.key_down=function(key)
    {
		// para de apertar as setas  do teclado para parar o personagem
		this.player1.key_down(key);	    	
    };
    
    this.key_up=function(key)
    {		
		// aperta as setas  do teclado para mover o personagem
		this.player1.key_up(key);
    }; 
	
	
}