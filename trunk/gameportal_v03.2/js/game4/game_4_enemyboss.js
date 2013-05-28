//enemyBoss.js
function Game4EnemyBoss(file, size_x, size_y)
{
	this.img = new Image();
	this.img.src=file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe ENEMY.BOSS " + loaded);
	};
	
	destruct = false;
	stats = false;
    this.position_x = 800;//(SCREENWIDTH-size_x)-20;
    this.position_y = (SCREENHEIGHT-size_y)/2;
    console.log (this.position_x); //teste da posição
    console.log (this.position_y);
    this.size_x = size_x;
    this.size_y = size_y;
	this.increaseVelocityX = 1;
	this.velocity_x = 2;
	this.velocity_y = 0;
	
	this.draw = function()
	{	
		if(this.visible = true)
		screen.drawImage(this.img, this.position_x, this.position_y)	
	}
	
    this.update=function()
    {
		if(this.visible)
		{
    	this.position_x -= this.velocity_x;	
		this.position_y += this.velocity_y;	
		if(this.position_x == 580)
		{
			this.velocity_x = 0;
		}
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
 



