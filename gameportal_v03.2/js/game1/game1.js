function SceneGame1()
{		
	this.intro = new Game1SceneIntro();
	this.level1 = new Game1SceneLevel1();
	this.theEnd = new Game1SceneTheEnd();
	this.gameOver = new Game1SceneGameOver();
	this.instruction = new Game1SceneInstruction();
	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3,INSTRUCTION:4 };
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				this.intro.update();
			break;
			case this.GAMESCENE.LEVEL1:
				this.level1.update();
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
				this.intro.draw();
			break;
			case this.GAMESCENE.LEVEL1:
				
				this.level1.draw();

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
				this.level1.mouse_down(mouse);
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

}