function SceneGame4()
{	
	
	this.intro = new Game4SceneIntro();
	this.leve1 = new Game4SceneLevel1();
	this.theEnd = new Game4SceneTheEnd();
	this.gameOver = new Game4SceneGameOver();
	this.Instruct = new Game4SceneInstruction();
    	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3};
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
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
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME4 INTRO", 20, 20);
						break;
			case this.GAMESCENE.LEVEL1:
				//level1.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME4 LEVEL1", 20, 20);
							break;
			case this.GAMESCENE.THEEND:
				//theEnd.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME4 THEEND", 20, 20);
			break;
			case this.GAMESCENE.GAMEOVER:
				//gameOver.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME4 GAMEOVER", 20, 20);
			break;
			
      
		}
	}
	
	this.mouse_down=function(mouse)
   	{
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				this.currentGameScene = this.GAMESCENE.LEVEL1;
			break;
			case this.GAMESCENE.LEVEL1:
				this.currentGameScene = this.GAMESCENE.THEEND;
			break;
			case this.GAMESCENE.THEEND:
				this.currentGameScene = this.GAMESCENE.GAMEOVER;
			break;
			case this.GAMESCENE.GAMEOVER:
				this.currentGameScene = this.GAMESCENE.INTRO;
				currentScene = SCENE.MENU;
			break;
			
		}
   	};	
}
