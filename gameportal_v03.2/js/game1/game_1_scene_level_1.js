function Game1SceneLevel1()
{

	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game1/FundoBackground.png",800, 600, 0, 0);
	
	this.meteoros = new Array();
	
	this.criarObjetos=function()
	{
		this.meteoro1 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, -1);
		this.meteoro2 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, -1);
		this.meteoro3 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, -1);
		this.meteoro4 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, -1);
	
		this.meteoros.push(this.meteoro1);
		this.meteoros.push(this.meteoro2);
		this.meteoros.push(this.meteoro3);
		this.meteoros.push(this.meteoro4);
	}
		
	this.criarObjetos();

	this.points = 0;
	this.pointsMax = 10;
	this.seconds = 60;
	this.milliSeconds = 0;

	this.update=function()
	{//abre update
		//tempoSeg++
		
		
		//GAME WIN
		
		
		
		
		
		//GAME OVER
			if(this.seconds <= 0)
		{
			
			game1.currentGameScene = game1.GAMESCENE.GAMEOVER;
			this.seconds = 60;
			this.points = 0;
		}
		
		 if(this.points > 30)
		{
			game1.currentGameScene = game1.GAMESCENE.THEEND;	
			//this.points = 0;
			//this.seconds = 60;
		}			
		
		for(var i = 0; i < this.meteoros.length; i++)
		{
			this.meteoros[i].update();
		}
		
		this.milliSeconds += 1000/48;
		
		if(this.milliSeconds > 1000)
		{
			this.seconds--;
			this.milliSeconds -= 1000;
		}
					
		//console.log(this.meteoros.length);
		
		this.fundo.update();
		
		this.mouse_down=function(mouse)
   		{
   			for(var i = 0; i < this.meteoros.length; i++)
			{
   				if(Collide(
   					mouse.x, 
   					mouse.y, 
   					1, 
   					1, 
   					this.meteoros[i].position_x, 
   					this.meteoros[i].position_y, 
   					this.meteoros[i].size_x, 
   					this.meteoros[i].size_y))
   	 				{
						
						if(this.meteoros[i].mouse_down(mouse) && this.meteoros[i].visible)
   						{
   							this.points += this.meteoros[i].points;
   							this.position_y = -this.size_y;
							this.position_x = Math.floor((Math.random()*(SCREENWIDTH - this.size_x))); 
							this.velocity_y = Math.floor((Math.random()*10)+1);
							console.log("mouse X " + mouse.x + " mouse Y " + mouse.y );

   			
	
   						}
   						else
   						{
   							this.points -= this.meteoros[i].points;
   							
							this.position_y = -this.size_y;
							this.position_x = Math.floor((Math.random()*(SCREENWIDTH - this.size_x))); 
							this.velocity_y = Math.floor((Math.random()*10)+1);
							console.log("mouse X " + mouse.x + " mouse Y " + mouse.y );

   						}
						
						if(this.meteoros[i].visible)	
						{	
							this.meteoros[i].visible = false;
							this.position_y = -this.size_y;
							this.position_x = Math.floor((Math.random()*(SCREENWIDTH - this.size_x))); 
							this.velocity_y = Math.floor((Math.random()*10)+1);
							
							console.log("mouse X " + mouse.x + " mouse Y " + mouse.y );

						} 
					}
					
					
			}
   		};
	};//fecha update
		
		
		
	
	
	this.draw = function()
	{//abre draw
		
		this.fundo.draw();
		
		for(var i = 0; i < this.meteoros.length; i++)
		{
			this.meteoros[i].draw();
		}
	
		screen.font = "50px Comic Sans MS";
		screen.fillStyle = "#000000";
		screen.fillText("Pontos: " + this.points + " / " +
		  this.pointsMax + "   Segundos: " + this.seconds, 40,	40);
		//screen.fillText( this.alvo1.pontos + this.alvo2.pontos, 670, 550);

	};//fecha draw
	
	
	this.mouse_down=function(mouse)
	{//abre mouse down
		
		if(this.meteoros[i].clicked(mouse))
   		{
   			this.points += this.meteoros[i].points;
   			
			this.meteoros[i].visible=false;
		
   		}
   		else
   		{
   			this.points -= this.meteoros[i].points;
   		}

/*
	this.voltar=function()
   {   	
		this.position_y = -this.size_y;
		this.position_x = Math.floor((Math.random()*(SCREENWIDTH - this.size_x))); 
		this.velocity_y = Math.floor((Math.random()*10)+1);
   } 	
*/		
		 
	};//fecha mouse down
	
	
}