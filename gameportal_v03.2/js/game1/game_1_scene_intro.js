function Game1SceneIntro()
{

	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game1/game.jpg",800, 600, 0, 0);

	//----------- intro musica----------
	this.intro_musica = new Audio();
	this.intro_musica.src = "sounds/game3/Introdução.mp3";
	this.intro_musica.load();
	this.intro_musica.loop = true;
	this.intro_musica.volume = 0.6;	

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_start = new Button_2("imgs/game1/play.png", 221, 182, 323, 399);
	this.button_instrucao = new Button_2("imgs/game1/Instruc.png", 141, 115, 14, 470);
	this.button_voltar = new Button_2("imgs/game1/Returnmenu.png", 141, 115, 650,469);
		
	this.update=function()
		{
			//-----------musica----------
			this.intro_musica.play();
		}
	
	this.draw=function()
		{  		
			// img de fundo
			this.fundo.draw();	
		
			// desenha botão 
			this.button_voltar.draw();
			this.button_instrucao.draw();
			this.button_start.draw();
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
					game1.currentGameScene = game1.GAMESCENE.LEVEL1
				}
			
			// vai para instrução do game
			if(this.button_instrucao.clicked(mouse))
			{
				//som de click
				click_btn.play();
					
				game1.currentGameScene = game1.GAMESCENE.INSTRUCTION; 	
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

	};


}; // function;