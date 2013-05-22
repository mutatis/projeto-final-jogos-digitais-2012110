function QuimicalElement(file, size_x, size_y, points, life)
{

	//----------- efeito sonoro 1----------
	this.song_fx = new Audio();
	this.song_fx.src = "sounds/game3/item comum133280__fins__game-pick-up-object.wav";
	this.song_fx.load();
	this.song_fx.loop = false;
	this.song_fx.volume = 0.6;

	
	this.img = new Image();
	this.img.src = file;
	
	this.visible = true;
	
	this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = Math.floor((Math.random()*SCREENWIDTH));
    this.position_y = -this.size_y;
    this.velocity_x =  0;//Math.floor((Math.random()*10)+1);
    this.velocity_y =  Math.floor((Math.random()*10)+1);
    this.velocity_MAX = 15;
        
    // pontos do char
	this.points = points;
	// vidas do char 
	this.life  = life;
    
  
    this.update=function()
    {    	
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
    			
    	if(this.position_y < 0)
		{
			//this.visible = false;	
		}
		
		
		// quando ultrapasar o limite da tela chama "function voltar"
		if(this.position_y > SCREENHEIGHT)
    	{
    		this.voltar();
    	}
		
		
		
    };
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };




	this.voltar=function()
    {   	
		this.position_y = -this.size_y;
		this.position_x = Math.floor((Math.random()*(SCREENWIDTH - this.size_x))); 
		this.velocity_y = Math.floor((Math.random()*10)+1);
    }


 }
