function SceneGame3()
{		
	this.intro = new Game3SceneIntro();
	this.leve1 = new Game3SceneLevel1();
	this.theEnd = new Game3SceneTheEnd();
	this.gameOver = new Game3SceneGameOver();
	this.instruction = new Game3SceneInstruction();
	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3, INSTRUCTION:4 };
	
	this.currentGameScene = this.GAMESCENE.INTRO; 

		
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				this.intro.update();
	
				//-----------musica----------
				//this.intro.intro_musica.play();
			break;
			case this.GAMESCENE.LEVEL1:
				this.leve1.update();	
				
				//-----------musica----------
				//this.leve1.level1_musica.play();
			break;
			case this.GAMESCENE.THEEND:
			
				// pause musica lvl 1
				this.leve1.level1_musica.pause();
			
				//theEnd.update();
			break;
			case this.GAMESCENE.GAMEOVER:
			
				// pause musica lvl 1
				this.leve1.level1_musica.pause();
				
				this.gameOver.update();
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
			
				this.intro.draw();

			break;
			case this.GAMESCENE.LEVEL1:		
				this.leve1.draw();
			break;
			
			case this.GAMESCENE.INSTRUCTION:
				this.instruction.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 INSTRUCTION", 20, 20);
			break;
			case this.GAMESCENE.THEEND:
			
				this.theEnd.draw();
				
				
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME3 THEEND", 20, 20);
			break;
			case this.GAMESCENE.GAMEOVER:
			
			
				this.gameOver.draw();
				
				
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
			
			this.intro.mouse_down(mouse);
			
			break;
			
			case this.GAMESCENE.LEVEL1:
				//this.currentGameScene = this.GAMESCENE.THEEND;			
			break;
			
			case this.GAMESCENE.THEEND:
												
				this.currentGameScene = this.GAMESCENE.INTRO;		
				
			break;
			case this.GAMESCENE.GAMEOVER:
			    // vai para a tela de intro
				this.currentGameScene = this.GAMESCENE.INTRO;
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