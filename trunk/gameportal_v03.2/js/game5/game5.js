function SceneGame5()
{		
	this.intro = new Game5SceneIntro();
	this.leve1 = new Game5SceneLevel1();
	this.theEnd = new Game5SceneTheEnd();
	this.gameOver = new Game5SceneGameOver();
	this.instruction = new Game5SceneInstruction();
	
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
			break;
			
			case this.GAMESCENE.THEEND:			
				this.theEnd.draw();	
			break;
			
			case this.GAMESCENE.GAMEOVER:					
				this.gameOver.draw();				
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
				this.theEnd.mouse_down(mouse);					
			break;
			
			case this.GAMESCENE.GAMEOVER:			
				this.gameOver.mouse_down(mouse);	
			break;
			
			case this.GAMESCENE.INSTRUCTION:
				this.instruction.mouse_down(mouse);	
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