function Game2Player(file, size_x, size_y, position_x, position_y, velocity_x, velocity_y, frames, fps)
{
	this.image = new Image();
	this.image.src=file;
	
	this.visible = true;
		
	this.position_x_dst = position_x; 
    this.position_y_dst = position_y;
    
    this.scale_x = 1;
    this.scale_y = 1;
    
	this.size_x_src = size_x;
	this.size_y_src = size_y;
	
	this.size_x_teste = this.size_x_dst;
	this.size_y_teste = this.size_y_dst-30;
	
	this.size_x_dst = this.size_x_src;
	this.size_y_dst = this.size_y_src;
	
	this.position_x_src = 0; 
    this.position_y_src = 0;
    
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;    
    
    this.current_frame = 0;
	
	this.frames = frames;	
	
	this.falling = true;
	
	this.points = 0;
	
	this.fps = fps;	
	this.time_per_frame = 1000/this.fps;	
	this.setFPS=function(newFPS)
	{
		this.fps = newFPS;	
		this.time_per_frame = 1000/this.fps;	
	}
	
	this.delta_time = 0;
    this.acumulated_delta_time = 0;	
	this.last_draw_time = 0;	
	
	this.right = false;
    
    this.left = false;
    
    this.up = false;
    
    this.down = false;
    
    this.update=function()
    {
    	this.move();
    	
    	this.fall();
    	
    	this.keepInScreen();
	
    };
    
    this.fall=function()
    {
    	if(this.falling)
    	this.position_y_dst += this.velocity_y; 
    	
    	if(this.points <= 30)
		{
			this.velocity_x = 5;
			this.velocity_y = 3;
		}
		else if((this.points > 30) && (this.points <= 60))
		{
			this.velocity_x = 5;
			this.velocity_y = 3;
		}
		else if((this.points > 60) && (this.points <= 150))
		{
			this.velocity_x = 6;
			this.velocity_y = 3;
		}
		else if((this.points > 150) && (this.points <= 200))
		{
			this.velocity_x = 7;
			this.velocity_y = 3;
		}
		   	
    }
	
 
	
    this.move=function()
    {
    	if(this.right)
    	{
    		this.position_x_dst += this.velocity_x;
			this.image.src = ("imgs/game2/bunny.png")
    	}
				
	
		if(this.left)
    	{
    		this.position_x_dst -= this.velocity_x;
			this.image.src = ("imgs/game2/bunny2.png")
		
    	}
	
    	
    	//if(this.up)
    	//{
    	//	this.position_y_dst -= this.velocity_y;
    	//}
    	//if(this.down)
    	//{
    	//	this.position_y_dst += this.velocity_y;
    	//}
    }
    
    this.keepInScreen=function()
    {
    	//saida pela esquerda
    	if(this.position_x_dst < 0)
    	{
    		this.position_x_dst = 0;
    	}
    	
    	//saida por cima
    	//if(this.position_y_dst < 0)
    	//{
    	//	this.position_y_dst = 0;
    	//}
    	
    	//saida pela esquerda
    	if(this.position_x_dst > SCREENWIDTH - this.size_x_dst*this.scale_x)
    	{
    		this.position_x_dst = SCREENWIDTH - this.size_x_dst*this.scale_x;
    	}
    	
    	//saida por baixo
    	//if(this.position_y_dst > SCREENHEIGHT - this.size_y_dst*this.scale_y)
    	//{
    	//	this.position_y_dst = SCREENHEIGHT - this.size_y_dst*this.scale_y;
    	//}
    }

    
    this.draw=function()
    {			
        if(this.visible)
        screen.drawImage(this.image,
        				 this.size_x_src*this.current_frame,
        			 	 this.position_y_src,
        			 	 this.size_x_src, 
        			 	 this.size_y_src, 
        			 	 this.position_x_dst, 
        			 	 this.position_y_dst, 
        			 	 this.size_x_dst*this.scale_x,
        			 	 this.size_y_dst*this.scale_y);
		
		this.delta_time = Date.now() - this.last_draw_time;
		
		if(this.acumulated_delta_time > this.time_per_frame)
		{
			this.acumulated_delta_time = 0;
			this.current_frame++;
			if(this.current_frame>=this.frames)
			{
				this.current_frame = 0;
			}
		}
		else
		{
			this.acumulated_delta_time += this.delta_time;
		}
		
		this.last_draw_time = Date.now();
		
		
    };
    
    this.key_down=function(key)
    {
    		if(key.keyCode == 39)
    		{
    			this.right = true;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.left = true;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.up = true;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.down = true;
    		}
    	
    };
    
    this.key_up=function(key)
    {
    		if(key.keyCode == 39)
    		{
    			this.right = false;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.left = false;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.up = false;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.down = false;
    		}
    	  	
    };  	

}    

