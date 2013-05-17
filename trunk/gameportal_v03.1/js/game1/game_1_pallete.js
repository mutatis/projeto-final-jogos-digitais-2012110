//paleta.js
function Paleta(player_tecla)
{
	this.player_tecla = player_tecla;

	this.imagem = new Image();
	this.imagem.src="imgs/game1/paleta.png";
	this.loaded = false;
	
	this.tamanho_x = 40;
    this.tamanho_y = 120;
    this.posicao_x = 10
    this.posicao_y = 400
    this.velocidade_x = 0;
    this.velocidade_y = 10;
	
	//Teclas
	this.sobe = false;
	this.desce = false;
    
	
    this.update=function()
    {
		//Movendo paleta
		this.movendo();
		
		//Colidindo com as bordas
		this.saindodatela();
	}
	
	this.draw=function()
    {  	
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
	
    //movendo player
    this.movendo=function()
    {
    	if(this.sobe)
    	{
    		this.posicao_y -= this.velocidade_y;
    	}
    	if(this.desce)
    	{
    		this.posicao_y += this.velocidade_y;
    	}
    }
    
	//Colisão para não sair da tela
    this.saindodatela=function()
    {
    	//saida pela direita
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
    	}
    	
    	//saida por cima
    	if(this.posicao_y < 0)
    	{
    		this.posicao_y = 0;
    	}
    	
    	//saida pela esquerda
    	if(this.posicao_x > tela_tamanho_x - this.tamanho_x)
    	{
    		this.posicao_x = tela_tamanho_x - this.tamanho_x;
    	}
    	
    	//saida por baixo
    	if(this.posicao_y > tela_tamanho_y - this.tamanho_y)
    	{
    		this.posicao_y = tela_tamanho_y- this.tamanho_y;
    	}
    }
    
    //Tecla desceu
    this.key_down=function(key)
    {
		if(this.player_tecla == "setas")
    	{
    		if(key.keyCode == 38)
    		{
    			this.sobe = true;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.desce = true;
    		}	
    	} 
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	if(this.player_tecla == "setas")
    	{
    		if(key.keyCode == 38)
    		{
    			this.sobe = false;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.desce = false;
    		}   			
    	}  		
    }	
}