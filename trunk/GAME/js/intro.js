function SCENEIntro()
{//abre intro
	
	this.fundo_intro = new Fundo();
	this.perso_intro = new Personagem();
		
	this.update = function()
	{//abre update
		
		this.perso_intro.update();
		this.fundo_intro.update();
		
		if(this.perso_intro.position_x >= (SCREEN_HEIGHT/2) && !(this.fundo_intro.position_x <= -(this.fundo_intro.size_x - SCREEN_WIDTH)))
		{
			this.fundo_intro.velocity_x = -this.perso_intro.velocity_x;
			this.perso_intro.position_x = SCREEN_HEIGHT/2;
		}
		else
		//if(this.fundo_intro.position_x <= -(this.fundo_intro.size_x - SCREEN_WIDTH))
		{
			this.fundo_intro.velocity_x = 0;
		}
		
	}//fecha update
	
	this.draw = function()
	{//abre draw
	
		this.fundo_intro.draw();
		this.perso_intro.draw();
		
	}//fecha draw
	
	this.key_down=function(key)
	{//abre key down
		
		this.perso_intro.key_down(key);
		this.fundo_intro.key_down(key);
		
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
  		
  		this.perso_intro.key_up(key);
  		this.fundo_intro.key_up(key);  		
  		
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

	this.mouse_down = function(mouse)
	{

	}
}//fecha intro