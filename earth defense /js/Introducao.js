function Introducao()
{
	this.background = new fundo("img/fundo.png", 800, 600); 
	this.botao_start = new Button("img/Start.png", 339, 41, 240, 390);
    this.botao_creditos = new Button("img/Creditos.png", 339, 41, 240, 440);
    this.botao_instrucao = new Button("img/Instrucao.png", 339, 41, 240, 490)
   
	this.update=function()
	{
   		
   	    this.botao_start.update(); 		
   		this.botao_creditos.update(); 
  	    this.botao_instrucao.update();
	};
   
	this.draw=function()
	{
   		
		
		this.background.draw();
		this.botao_start.draw(); 		
   		this.botao_creditos.draw(); 
        this.botao_instrucao.draw();
	};
   
	this.mouse_down=function(mouse)
	{
		if(this.botao_start.clicked(mouse))
		{
			currentScene = SCENE.LEVEL1;	
		}
		
		 if(this.botao_creditos.clicked(mouse))
		{
			currentScene = SCENE.CREDITOS;	
		}
		
		if(this.botao_instrucao.clicked(mouse))
		{
			currentScene = SCENE.INSTRUCAO;	
		}
	};
   
   this.key_down=function(key)
   {
		console.log("INTROi keyCode " + key.keyCode );
   };
   
   this.mouse_up=function(mouse)
   {
		console.log("INTRO mouse UP X " + mouse.x + " mouse Y " + mouse.y );
   };
   
   this.key_up=function(key)
   {
		console.log("INTRO key UP keyCode " + key.keyCode );
   };
}
