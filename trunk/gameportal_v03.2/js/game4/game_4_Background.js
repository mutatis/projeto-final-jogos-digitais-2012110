function Game4Background(file, size_x, size_y, posicao_x, posicao_y, velocity_y)
{//abre background
	
	this.img = new Image();
	this.img.src = file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
	loaded = true;
	console.log("carregou fundo" + loaded);
	}
	
	this.size_w = 800;
	this.size_h = 600;
	this.posicao_x = 0;
	this.posicao_y = 0;
	this.velocity_x = 0;
    this.velocity_y = 0; 
	this.draw = function()
	{
	
		screen.drawImage(this.img, this.posicao_x, this.posicao_y)
		
	}
	
 this.keepInScreen=function()
    {
    	//saida por cima
    	if(this.posicao_ < 0)
    	{
    		this.posicao_x = 0;
    	}
    	
    }
	
}//fecha fundo