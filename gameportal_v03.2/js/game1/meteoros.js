function Meteor (file, size_x, size_y, points)
{
	this.img = new Image();
	this.img.src = file;
	this.size_x = size_x;
	this.size_y = size_y;
	this.points = points;
	this.position_x = Math.floor((Math.random()*(SCREENWIDTH-this.size_x)));
	this.position_y = 0;
    this.velocity_x = Math.floor((Math.random()*10)-5);
    this.velocity_y = Math.floor((Math.random()*10)+5);
   
 
   this.update=function()
   {
   		this.position_x += this.velocity_x;
   		
   		this.position_y += this.velocity_y;
   		 		
   		// quando ultrapasar o limite da tela chama "function voltar"
		if(this.position_y > SCREENHEIGHT)
		{
			this.voltar();
			game1.level1.points -= 5;
		};
	
		// saida pela direita
    	if(this.position_x > SCREENWIDTH)
		{
			this.voltar();			
		};  

			
		// saida pela esquerda
		if( this.position_x < 0 - this.size_x)
			{
				this.voltar();				
			};		
   };
      
   this.draw=function()
	{		
		screen.drawImage(this.img, this.position_x, this.position_y, this.size_x, this.size_y);
	};
   
   this.mouse_down=function(mouse)
	{
		if(Collide(mouse.x-10, mouse.y-12, 1, 1, this.position_x, this.position_y, this.size_x, this.size_y))
		{
			this.voltar();					
		};		
			//console.log("mouse X" + mouse.x + " mouse Y " + mouse.y );
	};
   
 
   this.mouse_up=function(mouse)
   {
   	
   };
   
    
   this.mouse_move=function(mouse)
   {
   	
   };
   
	
	this.voltar=function()
	{   	 
		this.position_y = -this.size_y;
		this.position_x = Math.floor((Math.random()*(SCREENWIDTH - this.size_x))); 
		this.velocity_y = Math.floor((Math.random()*10)+1);
	}; 
    
    
    function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
				{//abre Collide
					if((x1+w1<x2)//se rect1 esquerda rect2
					||(x1>x2+w2)//se rect1 direita rect2
					||(y1+h1<y2)//se rect1 acima rect2
					||(y1>y2+h2))//se rect1 abaixo rect2
					{//abre if
						return false;//nao colidiu
					}//fecha if
					else
					{//abre else
						return true;//colidiu
					}//fecha else
				}//fecha Collide	
}