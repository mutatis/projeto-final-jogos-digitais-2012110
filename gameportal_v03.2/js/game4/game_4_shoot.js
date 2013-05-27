//shoot.js
function Shoot(player_position_x, player_position_y, player_rotation)
{
	this.img = new Image();
	this.img.src="imgs/game4/tiro.png";//mudar para a imagem de um tiro
	this.loaded = false;
	this.visible = true;
	
	
    this.degreesToRadians=function(degrees)
	{
		return degrees * Math.PI / 180;	
	};

	
	this.img.onload = function()
	{
		loaded = true; 
		//console.log("carregamento pela classe SHOOT " + loaded);//to carregando repetidamente...
	};

	
	this.size_x = 10;
    this.size_y = 10;
    this.position_x = player_position_x+15;
    this.position_y = player_position_y+20;
    this.velocity_x = Math.cos(this.degreesToRadians(player_rotation)) * 5;
    this.velocity_y = Math.sin(this.degreesToRadians(player_rotation)) * 5;
    
    console.log(this.velocity_x);
    
    this.update=function()
    {
    	//move the shoot
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
    	
    	
		//TO DO fazer os outros cantos
    	if(this.position_y < 0)
		{
			this.visible = false;	
		}
		if(this.position_y > SCREENHEIGHT)
		{
			this.visible = false;	
		}
		if(this.position_x < 0)
		{
			this.visible = false;	
		}
		if(this.position_x > SCREENWIDTH)
		{
			this.visible = false;	
		}
		//TO DO REMOVER O TIRO QD ELE NAO ESTIVER MAIS VISIVEL (ou saiu da tela ou bateu no inimigo)
	
    };
   
    this.draw=function()
	{
    	if(this.visible)

    	screen.drawImage(this.img, this.position_x, this.position_y);

    };
    
 }
