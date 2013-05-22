function Game2Item (file, size_x, size_y, pos_x, pos_y, vel_x, vel_y)
{
	this.img = new Image();
	this.img.src = file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe ITEM " + loaded);//to carregando repetidamente...
	};
	
	this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = pos_x;//player_position_x - this.size_x /2;
    this.position_y = pos_y;//player_position_y - this.size_y +10;
    this.velocity_x =  vel_x;//Math.floor((Math.random()*10)+1);
    this.velocity_y =  vel_y;//-Math.floor((Math.random()*10)+1)
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    	//move the item
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
		
	
	 };
    
	this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };
	
    this.mouse_down=function(mouse)
    {
    	
    };
    
    
    this.key_down=function(key)
    {
    	   	
    	
    };
    
        
    this.mouse_up=function(mouse)
    {
    	
    	
    };
    
    this.key_up=function(key)
    {
    	
    	
    };

 
 }
