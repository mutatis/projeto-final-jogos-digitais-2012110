function Game1SceneLevel1()
{

	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game1/FundoBackground.png",800, 600, 0, 0);
	
	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_close = new Button_2("imgs/close_btn.png", 36, 36, 749, 3);	
	
	//----------- level1 musica----------
	this.level1_musica = new Audio();
	this.level1_musica.src = "sounds/game2/menu_fall.mp3";
	this.level1_musica.load();
	this.level1_musica.loop = true;
	this.level1_musica.volume = 1;
	
	//-----------musica_gameWin----------
	this.musica_gamewin = new Audio();
	this.musica_gamewin.src = "sounds/Tela de Venceu.wav";
	this.musica_gamewin.load();
	this.musica_gamewin.loop = false;
	this.musica_gamewin.volume = 1;
				
	//-----------musica_gameOver----------
	this.musica_gameOver = new Audio();
	this.musica_gameOver.src = "sounds/Tela de Perdeu.wav";
	this.musica_gameOver.load();
	this.musica_gameOver.loop = false;
	this.musica_gameOver.volume = 1;
	
	//----------- efeito sonoro 1----------
	this.song_fx = new Audio();
	this.song_fx.src = "sounds/game1/Explodindo.mp3";
	this.song_fx.load();
	this.song_fx.loop = false;
	this.song_fx.volume = 0.6;

	
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
	{
		
		//-----------musica----------
		// play na musica quando ela esta na tela do lvel 1
		this.level1_musica.play();
	
		//tempoSeg++
		
		
		//GAME WIN
		if(this.points >= 10)
			{	
				this.musica_gamewin.play();
				this.level1_musica.pause();
				game1.currentGameScene = game1.GAMESCENE.THEEND;
				this.seconds = 60;
				this.points = 0;
			}		
		
		
		//GAME OVER
		if(this.seconds <= 0)
			{			
				this.musica_gameOver.play();
				this.level1_musica.pause();
				game1.currentGameScene = game1.GAMESCENE.GAMEOVER;
				this.seconds = 60;
				this.points = 0;
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
							
			// click para sair do game
			if(this.button_close.clicked(mouse))
				{			
					this.seconds = 60;
					this.points = 0;
					this.level1_musica.pause();
					//som de click
					click_btn.play();					
					//--pause/stop na musica do LVL 1-- 
						//this.level1_musica.pause();
					//--vai para o game3--
					game1.currentGameScene = game1.GAMESCENE.INTRO
				}
		
		
		
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
   							this.song_fx.play();
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
					}//fecha if (Collide)										
			}//fecha for
   		};// fecha mouse_down
	};//fecha update
		
		
		
	
	
	this.draw = function()
	{//abre draw
		
		this.fundo.draw();
		
		for(var i = 0; i < this.meteoros.length; i++)
			{
				this.meteoros[i].draw();
			}
	
		// desenha o btn de fechar o lvl 1
		this.button_close.draw();
	
		screen.font = "30px Comic Sans MS";
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