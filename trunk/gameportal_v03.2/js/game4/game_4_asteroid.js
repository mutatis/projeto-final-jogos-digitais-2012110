//asteroid.js
function Game4Asteroid(file, size_x, size_y)
{
	this.img = new Image();
	this.img.src=file;
	this.loaded = false;
	this.visible = true;
	this.dentrodatela = false;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe ASTEROID " + loaded);
	};
	
	destruct = false;
	stats = false;
	
    this.position_x = 0;
    this.position_y = 0;
    
    this.velocity_x = 10;
    this.velocity_y = 10;
    
    this.size_x = size_x;
    this.size_y = size_y;
	
	
	
	this.draw = function()
	{	
		

		if(this.visible)
		{
		screen.drawImage(this.img, this.position_x, this.position_y)	
		}
	}
	
	this.sorteio = Math.floor(Math.random()*10);
	this.move = true;
	
    this.update=function()
    {
		if(this.position_x < -200
		|| this.position_x > 1000 
		|| this.position_y > 800 
		|| this.position_y < -200)
		{
			this.move = true;
			this.sorteio = Math.floor(Math.random()*10);
		}
		
		else
		{
			this.move = false;
		}
		
    	//move the enemy
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
		
		
		if(this.move)
		{
			if(this.sorteio > 5)
			{
			this.position_x = 0;
			this.velocity_x = 10;
			this.position_y = 5;
			this.velocity_y = 10;
			this.move = false;
			}
			
			if(this.sorteio < 5)
			{
			this.position_x = 600;
			this.velocity_x = -10;
			this.position_y = 600;
			this.velocity_y = -10;
			this.move = false;
			}
			
			if(this.sorteio == 5)
			{
			this.position_x = 800;
			this.velocity_x = -10;
			this.position_y = 300;
			this.velocity_y = 0;
			this.move = false;
			}
		}
		
		/*
			//enemy destruct or escape
		   	if(this.position_x < -40) //|| destruct)
			{
				stats = true;
			}
						
			
			if(stats)
			{
				this.position_x = 850;
				this.position_y = Math.floor((Math.random()*(600-size_y))+1);
				stats = false;
			}	
				
		*/
    	
		

	}


}
 



