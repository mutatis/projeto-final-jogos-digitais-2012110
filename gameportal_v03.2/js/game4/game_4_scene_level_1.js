function Game4SceneLevel1()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new Game4Background("imgs/game4/fundo1.png", 600, 800, 0, 0);

	// --personagem-- 	
	this.nave1 = new Game4Player("imgs/game4/nave.png", 40, 50, 10, 200);
	
	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_close = new Button_2("imgs/close_btn.png", 36, 36, 749, 3);	
		
	//----------- level1 musica----------
	this.level1_musica = new Audio();
	this.level1_musica.src = "sounds/game3/em jogoPixel Peeker Polka - faster.mp3";
	this.level1_musica.load();
	this.level1_musica.loop = true;
	this.level1_musica.volume = 0.6;
	
	//----------- efeito sonoro 1----------
	this.song_fx = new Audio();
	this.song_fx.src = "sounds/game3/item comum.mp3";
	this.song_fx.load();
	this.song_fx.loop = false;
	this.song_fx.volume = 0.6;
		
	this.enemy1 = new Game4Enemy("imgs/game4/alvo1.png", 52, 51, 2, 2);
	this.enemy2 = new Game4Enemy("imgs/game4/alvo2.png", 66, 42, 2, 2);
	this.enemy3 = new Game4EnemyBoss("imgs/game4/alvo3.png", 184, 133, 0, 0);
		
	// Boss	
			if (this.nave1.points >= 100)
			{
				this.enemy3.visible = true;
			}

	this.update=function()
	{
		
	this.nave1.update();
	this.enemy1.update();
	this.enemy2.update();
	this.enemy3.update();	
 		
	//-----------musica----------
	// play na musica quando ela esta na tela do lvel 1
	this.level1_musica.play();
														
			// GAME OVER
			if (this.nave1.life <= 0)
			{	
				//reset life end points of player
				this.nave1.life = 3;
				this.nave1.points = 0;
				
				game3.currentGameScene = game3.GAMESCENE.GAMEOVER; 
			}
						
			// GAME WIM
			if (this.nave1.points >= 200)
			{
				//reset life end points of player
				this.nave1.life = 3;
				this.nave1.points = 0;
						
				game4.currentGameScene = game4.GAMESCENE.THEEND
			}
			
			
		} // fecha update
	
	this.draw=function()
	{  			
		//background.
		this.fundo.draw();
								
		// desenha o personagem na tela.
		this.nave1.draw();
			
		// desenha os elementos químicos
		this.enemy1.draw();
		this.enemy2.draw();
		this.enemy3.draw();
							
		// desenha o btn de fechar o lvl 1
		this.button_close.draw();					
							
		// desenha os posntos, vida e etc...
		screen.font="27px Comic Sans";
		screen.fillStyle="#E6F4E9";
		screen.fillText("Lives: " + this.nave1.life,20,28);
		screen.fillText("Points: "+ this.nave1.points,200,28);			
	};

		
	this.key_down=function(key)
    {
		// para de apertar as setas  do teclado para parar o personagem
		this.nave1.key_down(key);    	
    };
    
    this.key_up=function(key)
    {		
		// aperta as setas  do teclado para mover o personagem
		this.nave1.key_up(key);
    }; 
	
	this.mouse_down=function(mouse)
		{		
		// click para sair do game
		if(this.button_close.clicked(mouse))
			{			
				this.nave1.life = 3;
				this.nave1.points = 0;
				//som de click
				click_btn.play();					
				//--pause/stop na musica do LVL 1-- 
				this.level1_musica.pause();
				//--vai para o game3--
				game4.currentGameScene = game4.GAMESCENE.INTRO
			}
		};	
};