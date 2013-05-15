function Level1()
{
		//file, size_x, size_y, pos_x, pos_y
	this.background = new fundo("img/fundo.png", 800, 600, 0, 0);
	this.enemy = new Asteroid("img/asteroid1.png", 50, 50,  2);
	
	this.pontos = 0;
	this.pontosMax = 10;
	
	this.enemies = new Array();
	
	this.seconds = 60;
	
	this.milliSeconds = 0;
	
	this.update=function()
	{
			if(this.seconds < 0)
		{
			currentScene = SCENE.INTRODUCAO;
			this.seconds = 60;
			this.pontos = 0;
		}
		
		 if(this.pontos < -10)
		{
			currentScene = SCENE.INTRODUCAO;	
			this.pontos = 0;
			this.seconds = 60;
		}			
		
		this.enemy.update();	
		//console.log("inimigo pontos: " + this.enemy.pontos);
		
		this.milliSeconds += 1000/60;
		
		if(this.milliSeconds > 1000)
		{
			this.seconds--;
			this.milliSeconds -= 1000;
		}
					
	};
       
    //function diminuirSegundo()
    //{
    //	seconds-=1;	
    //}
   
    //setTimeout(diminuirSegundo(), 1000);
   
	this.draw=function()
	{ 
	   this.background.draw();
	   this.enemy.draw();   	
		
		screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
        screen.fillText("Pontos: " + this.pontos + " / " + this.pontosMax + "   Segundos: " + this.seconds, 20, 20);
	};
       
	this.mouse_down=function(mouse)
	{
   		//Conferir se houve um click em cima do inimigos  		
   		if(this.enemy.clicked(mouse))
   		{
   			this.pontos += this.enemy.pontos;
   			
			this.enemy.visible=false;
		
   		}
   		else
   		{
   			this.pontos -= this.enemy.pontos;
   		}
			
	};

	this.mouse_up=function(mouse)
	{
   	
	};

	this.key_down=function(key)
	{
   		//this.nuvem.key_down(key);
   		//this.AsteroidManager.key_down(key);
	};
   
	this.key_up=function(key)
	{
   		//this.nuvem.key_up(key);
   		//this.AsteroidManager.key_up(key);
	};    
	
	
}





