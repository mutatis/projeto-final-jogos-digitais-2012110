// --------------------------------variavel global--------------------------- 
//-----------musica inicial ----------
var musica = new Audio();
	musica.src = "sounds/Kg-song.mp3";
	musica.load();
	musica.loop = true;
	musica.volume = 0.6;
	
//-----------Click nos botões ----------
var click_btn = new Audio();
	click_btn.src = "sounds/Botão.wav";
	click_btn.load();
	click_btn.loop = false;
	click_btn.volume = 0.6;

function SceneMenu()
{
	//file, size_x, size_y, pos_x, pos_y
	this.anifundo = new Anifundo("imgs/Anifundo.jpg",800, 600, 0, 0);
	
	
	//file, size_x, size_y, pos_x, pos_y
	this.logo = new img_cenario("imgs/logo.png",800, 600, 0, 0);	
			
    
	//-------------------------------file, size_x, size_y
    this.button_credit = new Button("imgs/anim_button_credit.png", 209, 75);
    this.button_credit.position_x = 27;
    this.button_credit.position_y = 506;
    
    this.button_game_1 = new Button("imgs/anim_button_game_1.png", 209, 75);
    this.button_game_1.position_x = 27;
    this.button_game_1.position_y = 411;
    
    this.button_game_2 = new Button("imgs/anim_button_game_2.png", 209, 75);
    this.button_game_2.position_x = 27;
    this.button_game_2.position_y = 316;
        
    this.button_game_3 = new Button("imgs/anim_button_game_3.png", 209, 75);
    this.button_game_3.position_x = 27;
    this.button_game_3.position_y = 222;
    
    this.button_game_4 = new Button("imgs/anim_button_game_4.png", 209, 75);
    this.button_game_4.position_x = 27;
    this.button_game_4.position_y = 123;
    
    this.button_game_5 = new Button("imgs/anim_button_game_5.png", 209, 75);
    this.button_game_5.position_x = 27;
    this.button_game_5.position_y = 25;
    
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
	{
						
		//--PLAY MUSICA--
		musica.play();
		

		// img de fundo
		this.anifundo.draw();
				
		this.button_credit.draw();
		this.button_game_1.draw();
		this.button_game_2.draw();
		this.button_game_3.draw();
		this.button_game_4.draw();
		this.button_game_5.draw();
		
		this.logo.draw();
		
		
	};
   
   	this.mouse_down=function(mouse)
   	{   		
    	
    	if(this.button_credit.clicked(mouse))
    	{
			//som de click
			click_btn.play();
			//--stop na musica do menu inicial do portal--
			musica.pause();
			this.button_credit.position_x_src = 0; //Volta ao Frame Inicial da Animacao do botao;
    		currentScene = SCENE.CREDIT;		
    	}
    	
    	if(this.button_game_1.clicked(mouse))
    	{
			//som de click
			click_btn.play();
			//--stop na musica do menu inicial do portal--
			musica.pause();
			this.button_game_1.position_x_src = 0; //Volta ao Frame Inicial da Animacao do botao;
    		currentScene = SCENE.GAME1;		
    	}

		if(this.button_game_2.clicked(mouse))
    	{
			//som de click
			click_btn.play();
			//--stop na musica do menu inicial do portal--
			musica.pause();
			this.button_game_2.position_x_src = 0; //Volta ao Frame Inicial da Animacao do botao;
    		currentScene = SCENE.GAME2;		
    	}
    	
    	if(this.button_game_3.clicked(mouse))
    	{
			//som de click
			click_btn.play();
			//--stop na musica do menu inicial do portal--
			musica.pause();
			this.button_game_3.position_x_src = 0; //Volta ao Frame Inicial da Animacao do botao;
    		currentScene = SCENE.GAME3;		
    	}
    	
    	if(this.button_game_4.clicked(mouse))
    	{
			//som de click
			click_btn.play();
			//--stop na musica do menu inicial do portal--
			musica.pause();
			this.button_game_4.position_x_src = 0; //Volta ao Frame Inicial da Animacao do botao;
    		currentScene = SCENE.GAME4;		
    	}
    	
    	if(this.button_game_5.clicked(mouse))
    	{
			//som de click
			click_btn.play();
			//--stop na musica do menu inicial do portal--
			musica.pause();
			this.button_game_5.position_x_src = 0; //Volta ao Frame Inicial da Animacao do botao;
    		//currentScene = SCENE.GAME5;		
    	}
    	
    };
   
   	this.key_down=function(key)
   	{
   		
   	};
   	
   	this.mouse_up=function(mouse)
  	{
  		
  	};
  
  	this.mouse_move=function(mouse) //Animacao dos botoes;
  	{
  		//console.log("MENU mouse X " + mouse.x + " mouse Y " + mouse.y ); 
  		
  		if(this.button_game_5.clicked(mouse)) 
    	{
  			this.button_game_5.position_x_src = this.button_game_5.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;
  		
  		}
  		else
  		{
  			this.button_game_5.position_x_src = 0;	//Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
  		
  		
  		if(this.button_game_4.clicked(mouse)) 
    	{
  			this.button_game_4.position_x_src = this.button_game_4.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;
  		
  		}
  		else
  		{
  			this.button_game_4.position_x_src = 0;	//Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
  		
  		
  		if(this.button_game_3.clicked(mouse)) 
    	{
  			this.button_game_3.position_x_src = this.button_game_3.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;  		
  		}
  		else
  		{
  			this.button_game_3.position_x_src = 0;	//Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
  		
  		
  		if(this.button_game_2.clicked(mouse)) 
    	{
  			this.button_game_2.position_x_src = this.button_game_2.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;
  		
  		}
  		else
  		{
  			this.button_game_2.position_x_src = 0;	//Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
  		
  		
  		if(this.button_game_1.clicked(mouse)) 
    	{
  			this.button_game_1.position_x_src = this.button_game_1.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;
  		
  		}
  		else
  		{
  			this.button_game_1.position_x_src = 0;	//Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
  		
  		
  		if(this.button_credit.clicked(mouse)) 
    	{
  			this.button_credit.position_x_src = this.button_credit.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;  		
  		}
  		else
  		{
  			this.button_credit.position_x_src = 0;	//Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
		
  	};
  
  
  	this.key_up=function(key)
  	{
  		console.log("INTRO keyCode " + key.keyCode );
  	};
   
}