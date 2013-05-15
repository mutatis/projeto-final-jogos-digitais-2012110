function Fundo()
{//abre personagem

		this.img = new Image();
		this.img.src = "img/fundo.jpg";
		this.loaded = false;
		this.visible = true;

		this.img.onload = function()
		{//abre img

			loaded = true;
			console.log("carregamento pela classe personagem" + loaded);

		}//fecha img

		this.size_x = 1600;
  		this.size_y = 600;
  		this.position_x = 0;
  		this.position_y = 0;
  		this.velocity_x = 0;
  		this.velocity_y = 0;
  
  		this.right = false;
  
  		this.left = false;
  
  		this.update=function()
  		{//abre update
  			
  			
  			if(this.right == true)
  			{//abre if
  				
  				this.position_x += this.velocity_x;
  			
  			}//fecha if
  			
  			if(this.left == true)
  			{//abre if
  				
  				this.position_x -= this.velocity_x;
  			
  			}
    
  		}//fecha update
  		
  		this.draw = function()
  		{//abre draw
  			
  			screen.drawImage(this.img, this.position_x, this.position_y, this.size_x, this.size_y)
  			
  		}//fecha draw
  
  		this.key_down=function(key)
		{//abre key down
		
		console.log("jdhnkuds jfdsh vjkdfhgkd");
		
		if(key.keyCode == 39)
		{//abre if

			this.right = true;

		}//fecha if
		else if(key.keyCode == 37)
		{//abre else if

			this.left = true;
  
		}//fecha else if
  
  		if(key.keyCode == 38)
  		{//abre if
			
			this.up = true;
  		
  		}//fecha if
  		else if(key.keyCode == 40)
  		{//abre else if		
			
			this.down = true;
  
  		}//fecha else if
  
  	}//fecha key down
  
  	this.key_up=function(key)
  	{//abre key up
  	
  		if(key.keyCode == 39)
  		{//abre if

			this.right = false;
  		
  		}//fecha if
  		else if(key.keyCode == 37)
  		{//abre else if

			this.left = false;
  
  		}//fecha else if
  
  		if(key.keyCode == 38)
  		{//abre if

			this.up = false;
  
  		}//fecha if
  		else if(key.keyCode == 40)
  		{//abre else if

			this.down = false;
  
  		}//fecha else if
   	
  	}//fecha key up  	

}//fecha personagem