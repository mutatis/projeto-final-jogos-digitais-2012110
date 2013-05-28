function Game1SceneLevel1()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game1/FundoBackground.png",800, 600, 0, 0);
	
	this.placar = new img_cenario("imgs/placar.png",800, 600, 0, 0);
	
	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_close = new Button_2("imgs/close_btn.png", 36, 36, 749, 3);	
	
	//----------- level1 musica----------
	this.level1_musica = new Audio();
	this.level1_musica.src = "sounds/game1/Durante Jogo.mp3";
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
		
	// interruptor para "criarObjetos"  no Update
	this.cb1 = true; 
	
	//ferifica se o jogador ja perdeu ou ganhou e jogou novamente
	this.segunda_vez = false;	
			
	this.points = 0;
	this.pointsMax = 100;
	this.secondsRes = 60;
	this.seconds = this.secondsRes;
	this.milliSeconds = 0;
		
	this.meteoros = new Array();
	
	this.criarObjetos=function()
	{
		this.meteoro1 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +3);
		this.meteoro2 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +3);
		this.meteoro3 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +3);
		this.meteoro4 = new Meteor ("imgs/game1/meteoro1.png", 50, 38, +3);
		 
		this.meteoro5 = new Meteor ("imgs/game1/meteoro2.png", 50, 38, +4);
		this.meteoro6 = new Meteor ("imgs/game1/meteoro3.png", 50, 38, +5);
	
		this.meteoros.push(this.meteoro1);
		this.meteoros.push(this.meteoro2);
		this.meteoros.push(this.meteoro3);
		this.meteoros.push(this.meteoro4);
		
		this.meteoros.push(this.meteoro5);
		this.meteoros.push(this.meteoro6);
	};
		
	// grupo de objetos  iniciais no jogo
	if (this.segunda_vez == false)
	{		
		this.criarObjetos();
	}
	
	
	// cria os objetos para ele cairem quando o jogo acaba
	this.re_criar_objetos=function ()
	{
		if ( (this.segunda_vez == true) && (this.cb1 == true))
			{
						this.criarObjetos();
						this.cb1 = false;			
			};	
	};
	
	
	this.update=function()
	{					
		// cria os objetos para ele cairem quando o jogo acaba
		this.re_criar_objetos();	

		//-----------musica----------
		// play na musica quando ela esta na tela do lvel 1
		this.level1_musica.play();
			
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
				this.cb1 = true; 
				this.meteoros.length = 0;	
				this.segunda_vez = true;
			
				this.musica_gamewin.play();
				this.level1_musica.pause();
				game1.currentGameScene = game1.GAMESCENE.THEEND;
				this.seconds = this.secondsRes;
				this.points = 0;
			}		
		
		
		//GAME OVER
		if ( (this.seconds <= 0) || (this.points <= - 50) )
			{			
				this.cb1 = true; 
				this.meteoros.length = 0;	
				this.segunda_vez = true;
					
				this.musica_gameOver.play();
				this.level1_musica.pause();
				game1.currentGameScene = game1.GAMESCENE.GAMEOVER;
				this.seconds = this.secondsRes;
				this.points = 0;
			}								
		//console.log(this.meteoros.length);		
		this.fundo.update();				
	};//fecha update
	
	this.mouse_down=function(mouse)
   		{							
			// click para sair do game
			if(this.button_close.clicked(mouse))
				{
					this.cb1 = true; 
					this.meteoros.length = 0;	
					this.segunda_vez = true;
					
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
						// + pontos quando clica nos meteoros
						this.points += this.meteoros[i].points;
						this.song_fx.play();						
					};					
			}//fecha for			
   		};// fecha mouse_down
	
	
	this.draw = function()
	{//abre draw		
		this.fundo.draw();
		
		this.placar.draw();
		
		for(var i = 0; i < this.meteoros.length; i++)
			{
				this.meteoros[i].draw();
			}
	
		// desenha o btn de fechar o lvl 1
		this.button_close.draw();
	
		screen.font = "16px Comic Sans MS";
		screen.fillStyle = "#ff3366";
		screen.fillText("Pontos: " + this.points + " / " +this.pointsMax, 20,23); 
		screen.fillText("Segundos: " + this.seconds, 20,43);
	};//fecha draw
		
};// fecha function