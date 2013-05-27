//asteroid.js
function Game4Asteroid(file, size_x, size_y)
{
	this.img = new Image();
	this.img.src=file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe ASTEROID " + loaded);
	};
	
	destruct = false;
	stats = false;
	
    this.position_x = Math.floor((Math.random()*800)+1);
    this.position_y = Math.floor((Math.random()*600)+1);
    
    this.velocity_x = Math.floor((Math.random()*3)-1);
    this.velocity_y = Math.floor((Math.random()*3)-1);
    
    this.size_x = size_x;
    this.size_y = size_y;

	
	this.draw = function()
	{	
		screen.drawImage(this.img, this.position_x, this.position_y)	
	}
	
    this.update=function()
    {
    	
    	//move the enemy
    	this.position_x -= this.velocity_x;	
    	this.position_y += this.velocity_y;	    			
	}


}
 



