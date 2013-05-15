function img_cenario(file, size_x, size_y, pos_x, pos_y)
{
	this.img = new Image();
	this.img.src = file;
	
	this.visible = true;
	
	this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = pos_x;
    this.position_y = pos_y;
    //this.velocity_x =  vel_x;//Math.floor((Math.random()*10)+1);
   	//this.velocity_y =  vel_y;//-Math.floor((Math.random()*10)+1)
    //this.velocity_MAX = 15;
    
    this.update=function()
    {    	
    	//this.position_x += this.velocity_x;	

    	//this.position_y += this.velocity_y;	
    			
    	//if(this.position_y < 0)
		//{
		//	this.visible = false;	
		//}
		
		
    };
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };


 
 }
