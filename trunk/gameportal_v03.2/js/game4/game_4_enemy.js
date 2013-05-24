//enemy.js
function Game4Enemy(file, size_x, size_y, velocity_x, velocity_y)
{
	this.img = new Image();
	this.img.src=file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe ENEMY " + loaded);
	};
	
	destruct = false;
	stats = false;
    this.position_x = 800;
    this.position_y = Math.floor((Math.random()*(600-size_y))+1);
    //console.log (this.position_y); //teste da posição
    this.velocity_x = Math.floor((Math.random()*3)+2);
    this.velocity_y = Math.floor((Math.random()*3)-1);
    this.size_x = size_x;
    this.size_y = size_y;
	this.increaseVelocityX = 1;
	
	this.draw = function()
	{	
		screen.drawImage(this.img, this.position_x, this.position_y)	
	}
	
    this.update=function()
    {
    	
    	//move the enemy
    	this.position_x -= this.velocity_x;	

    	this.position_y += this.velocity_y;	
		
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
				

    	




    	//keep enemy in field
    	if(this.position_y < 0)
		{
			this.velocity_y *=-1;	
		}
		
 		if(this.position_y > (600-this.size_y))
		{
			this.velocity_y *=-1;	
		}
		
	}


}
 



