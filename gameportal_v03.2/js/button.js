function Button(file, size_x, size_y)
{
	this.image = new Image();
	this.image.src = file;
	this.loaded = false;
	
	this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = 0;
    this.position_y = 0;
    this.position_x_src = 0;
    this.position_y_src = 0;
    
    this.visible = true;

	this.image.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	if(this.visible)
    	screen.drawImage(this.image
    	, this.position_x_src
    	, this.position_y_src
    	, this.size_x, this.size_y
    	, this.position_x
    	, this.position_y
    	, this.size_x
    	, this.size_y)
    	
    };
    
    this.clicked = function(mouse)
    {
    	if(Collide(
    		mouse.x,
    		mouse.y,
    		1,
    		1,
    		this.position_x,
    		this.position_y,
    		this.size_x,
    		this.size_y
    	))
    	{
    		return true;
    	}
    	
    	return false;
    };
}