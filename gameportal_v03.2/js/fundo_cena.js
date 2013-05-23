function img_cenario(file, size_x, size_y, pos_x, pos_y)
{
	this.img = new Image();
	this.img.src = file;
	
	this.visible = true;
	
	this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = pos_x;
    this.position_y = pos_y;
        
    this.update=function()
    {    	
    			
		
    };
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };


 
 }
