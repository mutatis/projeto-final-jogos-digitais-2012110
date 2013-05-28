function SceneCredit()
{

	//--img de fundo----------------file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/credits.png",800, 600, 0, 0);		
	
    this.button_back = new Button ("imgs/anim_button_back.png", 209, 75);
    this.button_back.position_x = 27;
    this.button_back.position_y = 506;
    
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
   	{
		// desenha img
   		this.fundo.draw();
		   		
   		this.button_back.draw();
   	};
   
   
   	this.mouse_down=function(mouse)
   	{
   		if(this.button_back.clicked(mouse))
    	{
    		click_btn.play();
    		this.button_back.position_x_src = 0
    		currentScene = SCENE.MENU;
    	}
   	};
   
   	this.key_down=function(key)
   
   	{
   		
   	};
   	
   	
   	this.mouse_move=function(mouse) //Animacao dos botoes;
  	{
  		//console.log("CREDITS mouse X " + mouse.x + " mouse Y " + mouse.y ); 
  		
  		if(this.button_back.clicked(mouse))
    	{
  			this.button_back.position_x_src = this.button_back.size_x; //Quando o Mouse Passa por cima do Botao, o Botao passa para o segundo Frame;
  		
  		}
  		else
  		{
  			this.button_back.position_x_src = 0; //Quando nao esta em cima do botao, volta ao primeiro frame;
  		}
  		
  	}	  		  	
}