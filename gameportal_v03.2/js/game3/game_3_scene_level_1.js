function Game3SceneLevel1()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo_level1 = new img_cenario("imgs/game3/fundo.jpg",800, 600, 0, 0);

	// --personagem-- 	
	this.player1 = new Pallete();

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
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
		
	
	// interruptor para "criarObjetos (numero)"  no Update
	this.cb1 = true; 
	this.cb2 = true; 
	this.cb3 = true; 
	this.cb4 = true; 
	this.cb5 = true;		
	//ferifica se o jogador ja perdeu ou ganhou e jogou novamente
	this.segunda_vez = false;	
					
	this.Lista_coisas_caindo = new Array();	
		
	this.criarObjetos1=function()
		{		
			// Elmentos caindo-----------------(file, size_x, size_y,pontos,vida)
			// ganha 1 vida
			this.star = new QuimicalElement("imgs/game3/Star.png", 47, 48,+10, +1);			
			this.Lista_coisas_caindo.push(this.star);
			
			// ganah pontos
			this.Radonio = new QuimicalElement("imgs/game3/Rn.png", 47, 48,+5, 0);
			this.xenonio = new QuimicalElement("imgs/game3/Xe.png", 47, 48,+5, 0);
			
			this.Lista_coisas_caindo.push(this.Radonio);
			this.Lista_coisas_caindo.push(this.xenonio);

		};
	
	this.criarObjetos2=function()
		{
			// ganha pontos
			// Elmentos caindo-----------------(file, size_x, size_y,pontos,vida)
			this.argon = new QuimicalElement("imgs/game3/Ar.png", 47, 48,+5, 0);
			this.neon = new QuimicalElement("imgs/game3/Ne.png", 47, 48,+5, 0);
			
			this.Lista_coisas_caindo.push(this.neon);
			this.Lista_coisas_caindo.push(this.argon);	
		};
		
	this.criarObjetos3=function()
	{		
		// ganha pontos
		// Elmentos caindo-----------------(file, size_x, size_y,pontos,vida)
		this.helio = new QuimicalElement("imgs/game3/He.png", 47, 48,+5, 0);
		this.criptonio = new QuimicalElement("imgs/game3/Kr.png", 47, 48,+5, 0);
		
		this.Lista_coisas_caindo.push(this.helio);
		this.Lista_coisas_caindo.push(this.criptonio);		
	};
	
	
	this.criarObjetos4=function()
	{
		//perde pontos
		this.oxigenio = new QuimicalElement("imgs/game3/O.png", 47, 48,-10,-1);
		this.hidrogenio = new QuimicalElement("imgs/game3/H.png", 47, 48,-10,-1);
		this.ferro = new QuimicalElement("imgs/game3/Fe.png", 47, 48,-50,-1);
		this.aluminio = new QuimicalElement("imgs/game3/Al.png", 47, 48,-50,-1);
		
		this.Lista_coisas_caindo.push(this.oxigenio);
		this.Lista_coisas_caindo.push(this.hidrogenio);
		this.Lista_coisas_caindo.push(this.ferro);
		this.Lista_coisas_caindo.push(this.aluminio);
	
	};
		
		
	this.criarObjetos5=function()
	{		
		//perde pontos
		this.sodio = new QuimicalElement("imgs/game3/Na.png", 47, 48,-25,-1);
		this.carbono = new QuimicalElement("imgs/game3/C.png", 47, 48,-25,-1);
		this.cloro = new QuimicalElement("imgs/game3/Cl.png", 47, 48,-25,-1);
		this.mercurio = new QuimicalElement("imgs/game3/Hg.png", 47, 48,-25,-1);

		this.Lista_coisas_caindo.push(this.sodio);
		this.Lista_coisas_caindo.push(this.carbono);
		this.Lista_coisas_caindo.push(this.cloro);
		this.Lista_coisas_caindo.push(this.mercurio);				
	};

	
	// grupo de objetos  iniciais no jogo
	if (this.segunda_vez == false)
	{		
		this.criarObjetos2();
		this.criarObjetos5();
	}

	
	// cria os objetos para ele cairem quando o jogo acaba
	this.re_criar_objetos=function ()
	{
		if (this.segunda_vez == true) 
		{
			// grupo de objetos  iniciais no jogo
			if ((this.player1.points == 0)&&( this.cb2 == true) )
			{
				this.criarObjetos2();
				this.cb2 = false;
			};	
				
			if ((this.player1.points == 0)&&( this.cb5 == true) )
			{
				this.criarObjetos5();
				this.cb5 = false;
			};
		}
	
	if ((this.player1.points >= 80)&&( this.cb1 == true) )
	{
		// estrela, ganha pontos 
		this.criarObjetos1();
		this.cb1 = false;
	}

						
	if ((this.player1.points >= 30)&&( this.cb3 == true) )
	{
		this.criarObjetos3();
		this.cb3 = false;
	}

						
	if ((this.player1.points >= 150)&&( this.cb4 == true) )
	{
		this.criarObjetos4();
		this.cb4 = false;
	}		
		
	} // fecha function re_criar_objetos	
	
			
	this.update=function()
	{
		
		// cria os objetos para ele cairem quando o jogo acaba
		this.re_criar_objetos();	
		
		
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
				this.Lista_coisas_caindo.length = 0;
			
				this.segunda_vez = true;	
				//reset life end points of player
				this.player1.position_x = 400;	
				this.player1.life = 3;
				this.player1.points = 0;
				//play na musica de GAME OVER
				this.musica_gameOver.play();
				// reseta o interruptor para "criarObjetos (numero)"  no Loop	
				this.cb1 = true; 
				this.cb2 = true; 
				this.cb3 = true; 
				this.cb4 = true; 
				this.cb5 = true;				
				// vai para a tela de GAME OVER		
				game3.currentGameScene = game3.GAMESCENE.GAMEOVER; 
			};
						
			// GAME WIM
			if (this.player1.points >= 300)
			{			
				this.Lista_coisas_caindo.length = 0;				
				this.segunda_vez = true;
				//reset life end points of player
				this.player1.position_x = 400;	
				this.player1.life = 3;
				this.player1.points = 0;
				//play na musica de GAME WIN
				this.musica_gamewin.play();
				// reseta o interruptor para "criarObjetos (numero)"  no Update		
				this.cb1 = true; 
				this.cb2 = true; 
				this.cb3 = true; 
				this.cb4 = true; 
				this.cb5 = true;								
				// vai para a tela de GAME WIN
				game3.currentGameScene = game3.GAMESCENE.THEEND
			};
			
			if (this.player1.points < 0)
			{
				this.player1.points = 0;
			};	
						
	}; // fecha update
	
	
	this.draw=function()
	{  			
		//background.
		this.fundo_level1.draw();
							
		// desenha o personagem na tela.
		screen.drawImage(this.player1.img, this.player1.position_x, this.player1.position_y);	
			
		// desenha os elementos químicos
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

			//reset life end points of player
			this.player1.position_x = 400;		
			this.player1.life = 3;
			this.player1.points = 0;
			//som de click
			click_btn.play();					
			//--pause/stop na musica do LVL 1-- 
			this.level1_musica.pause();
			//--vai para o game3--
			game3.currentGameScene = game3.GAMESCENE.INTRO
			
			this.Lista_coisas_caindo.length = 0;
			
			this.segunda_vez = true;	
				
				// reseta o interruptor para "criarObjetos (numero)"  no Loop	
				this.cb1 = true; 
				this.cb2 = true; 
				this.cb3 = true; 
				this.cb4 = true; 
				this.cb5 = true;
				
			}
		};
		
	
};