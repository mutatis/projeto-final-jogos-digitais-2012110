function Game4SceneIntro()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new Game4Background("imgs/game4/intro_fundo.png", 600, 800, 0, 0);

	//----------- intro musica----------
	this.intro_musica = new Audio();
	this.intro_musica.src = "sounds/game4/Long Timedd Coming.mp3";
	this.intro_musica.load();
	this.intro_musica.loop = true;
	this.intro_musica.volume = 0.6;	

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_start = new Game4Button("imgs/game4/play1.png", 161, 66, 300, 250);
    this.button_tuto = new Game4Button("imgs/game4/play_cre.png", 161, 66, 300, 350);
	this.button_voltar = new Button_2("imgs/game2/return.png", 148, 60, 323,474);	
	
	this.titulo = new Game4Titulo_move("imgs/game4/titulo.png",663,111,60,100);
	
	
	
	this.update=function()
	{	
		this.titulo.update();
		//-----------musica----------
		this.intro_musica.play();
	}
	
	this.draw=function()
	{  		
		// img de fundo
		this.fundo.draw();	
		
		// desenha botão 
		this.button_tuto.draw();
        this.button_start.draw();
		this.button_voltar.draw();
		this.titulo.draw();
	};
		
		
		
	this.mouse_down=function(mouse)
   	{
		
		// click para comesar o game
		if(this.button_start.clicked(mouse))
		{
			//som de click
			click_btn.play();
					
			//--pause/stop na musica do catch-- 
			this.intro_musica.pause();
					
			//--vai para o game3--
			game4.currentGameScene = game4.GAMESCENE.LEVEL1
		}
			

			// vai para instrução do game
			if(this.button_tuto.clicked(mouse))
			{
				//som de click
				click_btn.play();
					
				game4.currentGameScene = game4.GAMESCENE.INSTRUCTION; 	
			}
				
				// click para volta para o menu inicial do portal
				if(this.button_voltar.clicked(mouse))
				{
					//som de click
					click_btn.play();
				
					//--pause/stop na musica de intro do jogo 3-- 
					this.intro_musica.pause();
					
					//--vai para o menu inicial do portal--
					currentScene = SCENE.MENU;
					
					//--play na musica do menu inicial--
					musica.play();
				}

	}

}