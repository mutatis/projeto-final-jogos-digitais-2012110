

// --------------------------------variavel global--------------------------- 
//-----------musica inicial ----------
var musica = new Audio();
	musica.src = "sounds/Kg-song.mp3";
	musica.load();
	musica.loop = true;
	musica.volume = 0.6;
	//--PLAY MUSICA--
	musica.play();

function SceneMenu()
{

	//file, size_x, size_y, pos_x, pos_y
	this.fundo_level1 = new img_cenario("imgs/capa-do-jogo2.jpg",800, 600, 0, 0);

	this.background = new Image();
	this.background.src="imgs/background.png";
	this.loaded = false;		
    
    this.button_credit = new Button("imgs/button_credit.png", 295, 82);
    this.button_credit.position_x = 500;
    this.button_credit.position_y = 500;
    
    this.button_game_1 = new Button("imgs/button_game_1.png", 295, 82);
    this.button_game_1.position_x = 500;
    this.button_game_1.position_y = 400;
    
    this.button_game_2 = new Button("imgs/button_game_2.png", 295, 82);
    this.button_game_2.position_x = 500;
    this.button_game_2.position_y = 300;
        
    this.button_game_3 = new Button("imgs/button_game_3.png", 295, 82);
    this.button_game_3.position_x = 500;
    this.button_game_3.position_y = 200;
    
    this.button_game_4 = new Button("imgs/button_game_4.png", 295, 82);
    this.button_game_4.position_x = 500;
    this.button_game_4.position_y = 100;
    
    this.button_game_5 = new Button("imgs/button_game_5.png", 295, 82);
    this.button_game_5.position_x = 500;
    this.button_game_5.position_y = 000;
    
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
	{
		//screen.drawImage(this.background, 0, 0);
		
		// img de fundo
		this.fundo_level1.draw();
		
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("MENU", 20, 20);
		
		this.button_credit.draw();
		this.button_game_1.draw();
		this.button_game_2.draw();
		this.button_game_3.draw();
		this.button_game_4.draw();
		this.button_game_5.draw();
	};
   
   	this.mouse_down=function(mouse)
   	{   		
    	
    	if(this.button_credit.clicked(mouse))
    	{
    		currentScene = SCENE.CREDIT;		
    	}
    	
    	if(this.button_game_1.clicked(mouse))
    	{
    		currentScene = SCENE.GAME1;		
    	}

		if(this.button_game_2.clicked(mouse))
    	{
    		currentScene = SCENE.GAME2;		
    	}
    	
    	if(this.button_game_3.clicked(mouse))
    	{
			//--stop na musica do menu inicial do portal--
			musica.pause();
			
    		currentScene = SCENE.GAME3;		
    	}
    	
    	if(this.button_game_4.clicked(mouse))
    	{
    		currentScene = SCENE.GAME4;		
    	}
    	
    	if(this.button_game_5.clicked(mouse))
    	{
    		currentScene = SCENE.GAME5;		
    	}
    	
    };
   
   	this.key_down=function(key)
   	{
   		
   	};
   	
   	this.mouse_up=function(mouse)
  	{
  		console.log("INTRO mouse X " + mouse.x + " mouse Y " + mouse.y );
  	};
  
  	this.key_up=function(key)
  	{
  		console.log("INTRO keyCode " + key.keyCode );
  	};
   
}