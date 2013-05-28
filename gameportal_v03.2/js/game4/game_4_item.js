function Game4Item (file, size_x, size_y, pos_x, pos_y, vel_x, vel_y)
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
    this.position_x = Math.floor((Math.random()*800)+500);
    this.position_y = Math.floor((Math.random()*590));
    this.velocity_x =  vel_x;//Math.floor((Math.random()*10)+1);
    this.velocity_y =  vel_y;//-this.visible = true;
    this.velocity_MAX = 15;
	this.random = Math.floor((Math.random()*800)+800);
    
    this.update=function()
    {
    	//move the item
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
		
		
		
		if(this.visible == false)
		{
		this.visible = true;
		this.position_x = Math.floor((Math.random()*800)+this.random);
		this.position_y = Math.floor((Math.random()*600))
		}
		
		if(this.position_x <= -10)
		{
		this.visible = true;
		this.position_x = Math.floor((Math.random()*800)+this.random);
		this.position_y = Math.floor((Math.random()*600));
		}
	
	 };
    
	this.draw=function()
    {
    	if(this.visible)
		{
    	screen.drawImage(this.img, this.position_x, this.position_y);
		}
		
		
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
