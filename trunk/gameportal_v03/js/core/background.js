function Background(source)
{
	this.imagem = new Image();
	this.imagem.src = source;
	this.loaded = false;
	this.visible = true;
		
	this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.tamanho_x = 1200;
    this.tamanho_y = 800;
    this.posicao_x = 0;
    this.posicao_y = 0;
    this.velocidade_x = 0;
    this.velocidade_y = 0;
    
    this.update=function()
    {
     	
    };
    
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y);
    };

 }