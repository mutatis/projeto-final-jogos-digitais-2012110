function Game2SceneLevel1()
{
	this.background = new Game2Background("imgs/game2/game_bg.png");
	
	//------------------------------------------------file, size_x, size_y, position_x, position_y
	this.player = new Game2Player("imgs/game2/bunny.png", 74, 83, (SCREENWIDTH-74)/2, 0, 3, 3, 1, 1);
	
	//file, size_x, size_y, pos_x, pos_y, vel_x, vel_y
	//this.platform1 = new Platform("Image/meteoro.png", 42, 19, 450, 400, 0, -1);

	plataform_list = new Array();
	cenoura_list = new Array();
	alface_list = new Array();
	snake_list = new Array();

	this.tempoAux = 0;
	this.tempoSeg = 0;

	//----------- level1 musica----------
	this.level1_musica = new Audio();
	this.level1_musica.src = "sounds/game2/em jogo Wallpaper.mp3";
	this.level1_musica.load();
	this.level1_musica.loop = true;
	this.level1_musica.volume = 1;

	//-----------musica_gameWin----------
	this.musica_gamewin = new Audio();
	this.musica_gamewin.src = "sounds/Tela de Venceu.wav";
	this.musica_gamewin.load();
	this.musica_gamewin.loop = false;
	this.musica_gamewin.volume = 0.6;
		
		
	//-----------musica_gameOver----------
	this.musica_gameOver = new Audio();
	this.musica_gameOver.src = "sounds/Tela de Perdeu.wav";
	this.musica_gameOver.load();
	this.musica_gameOver.loop = false;
	this.musica_gameOver.volume = 0.6;
	
	//----------- efeito sonoro 1----------
	this.song_fx = new Audio();
	this.song_fx.src = "sounds/game3/item comum.mp3";
	this.song_fx.load();
	this.song_fx.loop = false;
	this.song_fx.volume = 0.3;

	//cobra1 = new Mob ("Image/cobrazz.png", 73, 15, 200, 200);
		
	function Plataform_Object()
	{

		var a0 = new Game2Platform("imgs/game2/barzz.png", 117, 16, (SCREENWIDTH-74)/2, 200, 0, -1);
		var a1 = new Game2Platform("imgs/game2/barzz.png", 117, 16, Math.floor((Math.random()*(SCREENWIDTH-117))+1), 300, 0, 		-2);
		var a2 = new Game2Platform("imgs/game2/barzz.png", 117, 16, Math.floor((Math.random()*(SCREENWIDTH-117))+1), 400, 0, 		-2);
		var a3 = new Game2Platform("imgs/game2/barzz.png", 117, 16, Math.floor((Math.random()*(SCREENWIDTH-117))+1), 500, 0, 		-2);
		var a4 = new Game2Platform("imgs/game2/barzz.png", 117, 16, Math.floor((Math.random()*(SCREENWIDTH-117))+1), 600, 0, 		-2);
		var a5 = new Game2Platform("imgs/game2/barzz.png", 117, 16, Math.floor((Math.random()*(SCREENWIDTH-117))+1), 700, 0, 		-2); //SCREENWIDTH-58
   
		plataform_list.push(a0);
		plataform_list.push(a1);
		plataform_list.push(a2);
		plataform_list.push(a3);
		plataform_list.push(a4);
		plataform_list.push(a5);
	}

	Plataform_Object();

	function Cenoura_Object()
	{
		var b0 = new Game2Item ("imgs/game2/cenoura.png", 17, 34, 0, 0, 0, -2); 
		cenoura_list.push(b0);	
	}	

	Cenoura_Object();

	function Alface_Object()
	{
		var c0 = new Game2Item ("imgs/game2/alface.png", 47, 31, 0, 0, 0, -2); 
		alface_list.push(c0);	
	}	

	Alface_Object();

	function Snake_Object()
	{
		var d0 = new Game2Mob ("imgs/game2/cobra.png", 91, 17, 0, 0);
		var d1 = new Game2Mob ("imgs/game2/cobra.png", 91, 17, 0, 0);

		snake_list.push(d0);	
		snake_list.push(d1);
	}	

	Snake_Object();






	this.gametime=function()
	{
		this.tempoSeg++;
		if (this.tempoSeg >= 1000)
		{
			this.tempoSeg= 0;
			this.tempoAux = this.tempoAux + 1;
		}
		    else
		    {			
				this.tempoSeg+=1000/30;
			}	
	
	}
	
	this.update=function()
	{			

		//-----------musica----------
		// play na musica quando ela esta na tela do lvel 1
		this.level1_musica.play();


		this.gametime();
	
		this.background.update();
	
		this.player.update();    	
	
		for(var i = 0; i < snake_list.length ; i++)
		{
			snake_list[0].position_x_dst = plataform_list[2].position_x;
			snake_list[0].position_y_dst = plataform_list[2].position_y-20;
		
			snake_list[1].position_x_dst = plataform_list[4].position_x;
			snake_list[1].position_y_dst = plataform_list[4].position_y-20;
		
		
		
		
			if(Collide(
					this.player.position_x_dst, 
    				this.player.position_y_dst, 
    				(this.player.size_x_dst)*this.player.scale_x, 
    				(this.player.size_y_dst)*this.player.scale_y, 
					snake_list[i].position_x_dst,
					snake_list[i].position_y_dst,
					snake_list[i].size_x_dst*this.player.scale_x,
					snake_list[i].size_y_dst*this.player.scale_y
				))
			{
				if(snake_list[i].visible)
				{
					// quando encostar na cobrinha da game over
					snake_list[i].visible = false;
					this.player.points = 0;
					this.tempoAux = 0;
					this.tempoSeg = 0;
					this.player.position_y_dst = 0;
					this.player.position_x_dst = (SCREENWIDTH-74)/2;
					this.musica_gameOver.play();
					//quando encostar em objetos
					this.song_fx.play();
					// GAME OVER
					game2.currentGameScene = game2.GAMESCENE.GAMEOVER;
				}
			}
			
			if(snake_list[i].position_y_dst < -10)
			{
				snake_list[i].visible = true;
			}
		
		}	

		//FAZ O JOGADOR MORRER ao sair da tela por cima ou por baixo
	   	if(this.player.position_y_dst > 605 | this.player.position_y_dst < -90)
    	{	
    		this.player.points = 0;		
			this.player.velocity_y = 0;
    		this.player.velocity_x = 0;
    		this.player.position_y_dst = 0;
			this.player.position_x_dst = (SCREENWIDTH-74)/2;
    		this.player.right = false
    		this.player.left = false
			this.tempoAux = 0;
			this.tempoSeg = 0;
			this.musica_gameOver.play();
			game2.currentGameScene = game2.GAMESCENE.GAMEOVER;
   		}
		
	
		//FAZ O JOGADOR PEGAR AS CENOURAS, faz pontos e elas somem
		for(var i = 0; i < cenoura_list.length ; i++)
		{
			cenoura_list[i].position_x = plataform_list[0].position_x+50;
			cenoura_list[i].position_y = plataform_list[0].position_y-35;	
			
			if(cenoura_list[i].position_y < -10)
			{
				cenoura_list[i].visible = true;
			}

				if(Collide(
				this.player.position_x_dst,
				this.player.position_y_dst,
				this.player.size_x_dst*this.player.scale_x,
				this.player.size_y_dst*this.player.scale_x,
				cenoura_list[i].position_x,
				cenoura_list[i].position_y,
				cenoura_list[i].size_x,
				cenoura_list[i].size_y

			))
				{
					if(cenoura_list[i].visible)
					{
						this.player.points +=10;
						cenoura_list[i].visible = false;
						//quando encostar em objetos
						this.song_fx.play();
				
					}
				}
		}
	
		//FAZ TODOS OS ALFACES ficarem na plataforma 3
		for(var i = 0; i < alface_list.length ; i++)
		{
			alface_list[i].position_x = plataform_list[3].position_x+35;
			alface_list[i].position_y = plataform_list[3].position_y-30;	
			
		if(alface_list[i].position_y < -10)
		{
			alface_list[i].visible = true;
		}

				if(Collide(
				this.player.position_x_dst,
				this.player.position_y_dst,
				this.player.size_x_dst*this.player.scale_x,
				this.player.size_y_dst*this.player.scale_x,
				alface_list[i].position_x,
				alface_list[i].position_y,
				alface_list[i].size_x,
				alface_list[i].size_y
			))
				{
					if(alface_list[i].visible)
					{
						this.player.points +=20;
						alface_list[i].visible = false;
						//quando encostar em objetos
						this.song_fx.play();
				
					}
				}
		}	
		
		
			 
		//FAZ AS PLATAFORMAS CAIREM E O JOGADOR COLIDIR COM ELAS e aumentar a velocidade
		for(var i = 0; i < plataform_list.length ; i++)
		{	
			
			plataform_list[i].update();				
				
			if(this.player.points <= 30)
			{
				plataform_list[i].velocity_y = -2;
			}

			else if((this.player.points > 30) && (this.player.points <= 60))
			{
				plataform_list[i].velocity_y = -3;
			}

			else if((this.player.points > 60) && (this.player.points <= 100))
			{
				plataform_list[i].velocity_y = -4;
			}

			else if((this.player.points > 100) && (this.player.points <= 150))
			{
				plataform_list[i].velocity_y = -5;
			}

			else if((this.player.points > 150) && (this.player.points <= 200))
			{
				plataform_list[i].velocity_y = -6;
			}	

			else if(this.player.points > 200)
			{
				// GAME WIN 
				this.player.position_y_dst = 0;
				this.player.position_x_dst = (SCREENWIDTH-74)/2;
				this.player.points = 0;	
				this.tempoAux = 0;
				this.tempoSeg = 0;
				game2.currentGameScene = game2.GAMESCENE.THEEND;
				this.musica_gamewin.play();
			}	
			
			
			if(Collide(
    			this.player.position_x_dst-5,  // +5
    			this.player.position_y_dst+73, // +100
    			(this.player.size_x_dst)*this.player.scale_x, // -10
    			(this.player.size_y_dst)*this.player.scale_y-73, // -100
    			plataform_list[i].position_x+10,
    			plataform_list[i].position_y,
    			plataform_list[i].size_x-25,  // -20
    			plataform_list[i].size_y-18	  // -18
    		))
			{
				
    			this.player.velocity_y = (plataform_list[i].velocity_y);
    			
			}
			
		}
	};//fecha o update
    	
	
    this.draw=function()
    {    	
    		
		this.background.draw();
		
		//cobra1.draw();
		
		this.player.draw();
		for(var i = 0; i < snake_list.length ; i++)
		{
			if(snake_list[0].visible)
			snake_list[0].draw();	
			
			if(this.player.points < 100)
			{
				snake_list[1].visible = false;
			}
			
			if(this.player.points >= 100)
			{
				snake_list[1].visible = true;
				
				if(snake_list[1].visible)
				{
					snake_list[1].draw();
				}
			}
			
		}	
						
		for(var i = 0; i < cenoura_list.length ; i++)
		{
			if(cenoura_list[i].visible)
			screen.drawImage(cenoura_list[i].img, cenoura_list[i].position_x, cenoura_list[i].position_y);		
		}	
		
		for(var i = 0; i < alface_list.length ; i++)
		{
			if(alface_list[i].visible)
			screen.drawImage(alface_list[i].img, alface_list[i].position_x, alface_list[i].position_y);		
		}	
		
		
		for(var i = 0; i < plataform_list.length ; i++)
		{
			screen.drawImage(plataform_list[i].img, plataform_list[i].position_x, plataform_list[i].position_y);		
		}	
		
			screen.font = "20px Comic Sans MS";
			screen.fillStyle="#FFFFFF";
			screen.fillText("Pontos: " + this.player.points, 40, 60);		
			screen.fillText("Tempo: "+this.tempoAux, 40, 40);	
				
		
		
		
    };//fecha o draw
        
    this.mouse_down=function(mouse)
    {
		//console.log("LEVEL 01 mouse X " + mouse.x + " mouse Y " + mouse.y );
    };

    this.mouse_up=function(mouse)
    {
    	
    	
    };

    this.key_down=function(key)
    {
    	//console.log("LEVEL 01 keyCode " + key.keyCode );
    	
    	this.player.key_down(key);
    	    	
    };
    
    this.key_up=function(key)
    {
    	this.player.key_up(key);
    };    
}