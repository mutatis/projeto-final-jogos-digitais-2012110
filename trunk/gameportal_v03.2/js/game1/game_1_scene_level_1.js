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
	
	this.secondsRes = 30;
	this.points = 0;
	//perde pontos quando clica na tela 
	this.perder_pontos = 5;
	this.pointsMax = 100;
	this.seconds = this.secondsRes;
	this.milliSeconds = 0;
		
	this.meteoros = new Array();
	
	this.criarObjetos=function()
	{
		//---------------------------------------------------------------"this.perder_pontos" desconto nos pontos quando clica na tela 
		this.meteoro1 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +1+this.perder_pontos);
		this.meteoro2 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +1+this.perder_pontos);
		this.meteoro3 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +1+this.perder_pontos);
		this.meteoro4 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +1+this.perder_pontos);
		
		//---------------------------------------------------------------"this.perder_pontos" desconto nos pontos quando clica na tela 
		this.meteoro5 = new Meteor ("imgs/game1/meteoro2.png", 50, 38, +2+this.perder_pontos);
		this.meteoro6 = new Meteor ("imgs/game1/meteoro3.png", 50, 38, +5+this.perder_pontos);
	
		this.meteoros.push(this.meteoro1);
		this.meteoros.push(this.meteoro2);
		this.meteoros.push(this.meteoro3);
		this.meteoros.push(this.meteoro4);
		
		this.meteoros.push(this.meteoro5);
		this.meteoros.push(this.meteoro6);
	};
		
	this.criarObjetos();


	this.update=function()
	{
						
		//-----------musica----------
		// play na musica quando ela esta na tela do lvel 1
		this.level1_musica.play();
	
		//tempoSeg++
		
		
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
		
		
		//GAME WIN
		if(this.points >= this.pointsMax )
			{				
				this.musica_gamewin.play();
				this.level1_musica.pause();
				game1.currentGameScene = game1.GAMESCENE.THEEND;
				this.seconds = this.secondsRes;
				this.points = 0;
			}		
		
		
		//GAME OVER
		if(this.seconds <= 0)
			{				
				this.musica_gameOver.play();
				this.level1_musica.pause();
				game1.currentGameScene = game1.GAMESCENE.GAMEOVER;
				this.seconds = this.secondsRes;
				this.points = 0;
			}
								
		//console.log(this.meteoros.length);
		
		this.fundo.update();

		
		this.mouse_down=function(mouse)
   		{							
			// click para sair do game
			if(this.button_close.clicked(mouse))
				{
									
					this.seconds = this.secondsRes;
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
						this.meteoros[i].mouse_down(mouse)	
			
						this.points += this.meteoros[i].points;															
					};					
			}//fecha for
						
			this.points -= this.perder_pontos;
			
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
	
		screen.font = "27px Comic Sans MS";
		screen.fillStyle = "#000000";
		screen.fillText("Pontos: " + this.points + " / " +
		this.pointsMax + "   Segundos: " + this.seconds, 40,40);
	};//fecha draw
		
};// fecha function