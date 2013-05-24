function Game3SceneLevel1()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo_level1 = new img_cenario("imgs/game3/fundo.jpg",800, 600, 0, 0);

	// --personagem-- 	
	this.player1 = new Pallete();

	//--Bot�o--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_close = new Button_2("imgs/close_btn.png", 36, 36, 749, 3);	
		
	//----------- level1 musica----------
	this.level1_musica = new Audio();
	this.level1_musica.src = "sounds/game3/em jogoPixel Peeker Polka - faster.mp3";
	this.level1_musica.load();
	this.level1_musica.loop = true;
	this.level1_musica.volume = 0.6;
	
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
	this.song_fx.src = "sounds/game3/item comum.mp3";
	this.song_fx.load();
	this.song_fx.loop = false;
	this.song_fx.volume = 0.6;
		
	this.Lista_coisas_caindo = new Array();	
		
	this.criarObjetos=function()
	{			
	
		// Elmentos caindo-----------------(file, size_x, size_y,pontos,vida)
		// ganha 1 vida
		this.star = new QuimicalElement("imgs/game3/Star.png", 47, 48,+10, +1);
		
		// ganha
		this.helio = new QuimicalElement("imgs/game3/He.png", 47, 48,+10, 0);
		this.argon = new QuimicalElement("imgs/game3/Ar.png", 47, 48,+10, 0);
		this.neon = new QuimicalElement("imgs/game3/Ne.png", 47, 48,+10, 0);
		this.criptonio = new QuimicalElement("imgs/game3/Kr.png", 47, 48,+10, 0);
		
		//perde
		this.ferro = new QuimicalElement("imgs/game3/Fe.png", 47, 48,-50,-1);
		this.sodio = new QuimicalElement("imgs/game3/Na.png", 47, 48,-25,-1);
		this.oxigenio = new QuimicalElement("imgs/game3/O.png", 47, 48,-10,-1);
		this.hidrogenio = new QuimicalElement("imgs/game3/H.png", 47, 48,-10,-1);

		
		this.Lista_coisas_caindo.push(this.helio);
		this.Lista_coisas_caindo.push(this.neon);
		this.Lista_coisas_caindo.push(this.argon);
		this.Lista_coisas_caindo.push(this.criptonio);	

		this.Lista_coisas_caindo.push(this.star);
		
		this.Lista_coisas_caindo.push(this.ferro);
		this.Lista_coisas_caindo.push(this.sodio);
		this.Lista_coisas_caindo.push(this.oxigenio);
		this.Lista_coisas_caindo.push(this.hidrogenio);
	}
	
	this.criarObjetos();

	this.update=function()
	{
		
		//-----------musica----------
		// play na musica quando ela esta na tela do lvel 1
		this.level1_musica.play();
		
		
		// --personagem-- 	
		this.player1.update();
				

		for(var i = 0; i < this.Lista_coisas_caindo.length; i++)
		{
			this.Lista_coisas_caindo[i].update();
					
			if(Collide(this.Lista_coisas_caindo[i].position_x, this.Lista_coisas_caindo[i].position_y, this.Lista_coisas_caindo[i].size_x, 
				this.Lista_coisas_caindo[i].size_y,
				this.player1.position_x, this.player1.position_y, 
				this.player1.size_x, this.player1.size_y))
			{	
				this.song_fx.play();
						
				this.Lista_coisas_caindo[i].voltar();
				this.player1.life += this.Lista_coisas_caindo[i].life;
				this.player1.points += this.Lista_coisas_caindo[i].points;	
			}
					
				if(this.Lista_coisas_caindo[i].position_y > SCREENHEIGHT)		
				{
					this.Lista_coisas_caindo[i].voltar();
				}							
		}		
				
								
			// GAME OVER
			if (this.player1.life <= 0)
			{	
				//reset life end points of player
				this.player1.life = 3;
				this.player1.points = 0;				
				this.musica_gameOver.play();				
				game3.currentGameScene = game3.GAMESCENE.GAMEOVER; 
			}
						
			// GAME WIM
			if (this.player1.points >= 300)
			{
				//reset life end points of player
				this.player1.life = 3;
				this.player1.points = 0;	
				this.musica_gamewin.play();
				game3.currentGameScene = game3.GAMESCENE.THEEND
			}
			
			
		} // fecha update
	
		this.draw=function()
		{  			
			//background.
			this.fundo_level1.draw();
								
			// desenha o personagem na tela.
			screen.drawImage(this.player1.img, this.player1.position_x, this.player1.position_y);	
			
			// desenha os elementos qu�micos
			for(var i = 0; i < this.Lista_coisas_caindo.length; i++)
			{
				screen.drawImage(this.Lista_coisas_caindo[i].img, this.Lista_coisas_caindo[i].position_x, this.Lista_coisas_caindo[i].position_y);
			}
			
			// desenha o btn de fechar o lvl 1
			this.button_close.draw();
			
			// desenha os posntos, vida e etc...
			screen.font="27px Comic Sans";
			screen.fillStyle="#E6F4E9";
			screen.fillText("Lives: " + this.player1.life,20,28);
			screen.fillText("Pick up: noble gases",291,28);
			screen.fillText("Points: "+ this.player1.points,603,28);			
		};

		
	this.key_down=function(key)
    {
		// para de apertar as setas  do teclado para parar o personagem
		this.player1.key_down(key);	    	
    };
    
    this.key_up=function(key)
    {		
		// aperta as setas  do teclado para mover o personagem
		this.player1.key_up(key);
    }; 
		
		
	this.mouse_down=function(mouse)
		{
		
		// click para sair do game
		if(this.button_close.clicked(mouse))
			{			
				this.player1.life = 3;
				this.player1.points = 0;
				//som de click
				click_btn.play();					
				//--pause/stop na musica do LVL 1-- 
				this.level1_musica.pause();
				//--vai para o game3--
				game3.currentGameScene = game3.GAMESCENE.INTRO
			}
		}
		
	
};