function Game3SceneLevel1()
{

	//file, size_x, size_y, pos_x, pos_y
	this.fundo_level1 = new img_cenario("imgs/game3/fundo.jpg",800, 600, 0, 0);

	// --personagem-- 	
	this.player1 = new Pallete();
	//this.player1.points = 0;
	//this.player1.life = 3;
	
	this.Lista_coisas_caindo = new Array();	
		
		
	this.criarObjetos=function()
	{			
		// Elmentos caindo------------------(file, size_x, size_y,pontos,vida)
		this.element1 = new QuimicalElement("imgs/game3/He.png", 47, 48,+5, +1);
		this.element2 = new QuimicalElement("imgs/game3/Fe.png", 47, 48,-10,-1);
	
		this.Lista_coisas_caindo.push(this.element1);
		this.Lista_coisas_caindo.push(this.element2);	
	}
	
	this.criarObjetos();



	this.update=function()
		{
			// --personagem-- 	
			this.player1.update();
				

			for(var i = 0; i < this.Lista_coisas_caindo.length; i++)
				{
					this.Lista_coisas_caindo[i].update();
					
					if(Collide(this.Lista_coisas_caindo[i].position_x, this.Lista_coisas_caindo[i].position_y, this.Lista_coisas_caindo[i].size_x, 							this.Lista_coisas_caindo[i].size_y,
					this.player1.position_x, this.player1.position_y, this.player1.size_x, this.player1.size_y))
					{
						this.Lista_coisas_caindo[i].voltar();
						this.player1.life += this.Lista_coisas_caindo[i].life;
						this.player1.points += this.Lista_coisas_caindo[i].points;
					}
					
					if(this.Lista_coisas_caindo[i].position_y > SCREENHEIGHT)		
					{
						//this.player1.life -= 1;
						this.Lista_coisas_caindo[i].voltar();
					}							
				}			
			
			// game over
			if (this.player1.life == 3)
			{
				//this.currentGameScene = this.GAMESCENE.INTRO; 
			}
			
		}
	
	this.draw=function()
		{  		
			// img de fundo
			this.fundo_level1.draw();	
			
			
			//background.
			this.fundo_level1.draw();
				
				
			// desenha o personagem na tela.
			screen.drawImage(this.player1.img, this.player1.position_x, this.player1.position_y);	
			
			
			for(var i = 0; i < this.Lista_coisas_caindo.length; i++)
			{
				screen.drawImage(this.Lista_coisas_caindo[i].img, this.Lista_coisas_caindo[i].position_x, this.Lista_coisas_caindo[i].position_y);
			}
					
					
			// desenha os posntos, vida e etc...
			screen.font="27px Comic Sans";
			screen.fillStyle="#E6F4E9";
			screen.fillText("Vidas: " + this.player1.life,20,28);
			screen.fillText("Pegue os: gases nobres",291,28);
			screen.fillText("Pontos: "+ this.player1.points,639,28);
			
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
		
		
		
		
		
		
		
		
	
}