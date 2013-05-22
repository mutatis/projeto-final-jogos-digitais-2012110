function SceneGame2()
{		
	this.intro = new Game2SceneIntro();
	this.leve1 = new Game2SceneLevel1();
	this.theEnd = new Game2SceneTheEnd();
	this.gameOver = new Game2SceneGameOver();
	this.instruction = new Game2SceneInstruction();
	
	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3, INSTRUCTION: 4};
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
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
				this.theEnd.update();
			break;
			case this.GAMESCENE.GAMEOVER:
				this.gameOver.update();
			break;
			case this.GAMESCENE.INSTRUCTION:
				this.instruction.update();
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
			case this.GAMESCENE.THEEND:
				this.theEnd.draw();
			break;
			case this.GAMESCENE.GAMEOVER:
				this.gameOver.draw();
			break;
				case this.GAMESCENE.INSTRUCTION:
				this.instruction.draw();
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
				this.leve1.mouse_down(mouse);	
			break;
			case this.GAMESCENE.THEEND:
				this.currentGameScene = this.GAMESCENE.GAMEOVER;
				this.theEnd.mouse_down(mouse);	
			break;
			case this.GAMESCENE.GAMEOVER:
				this.currentGameScene = this.GAMESCENE.INTRO;
				currentScene = SCENE.MENU;
				this.gameOver.mouse_down(mouse);	
			break;
			case this.GAMESCENE.INSTRUCTION:
				//this.currentGameScene = this.GAMESCENE.INTRO;
				//currentScene = SCENE.MENU;
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