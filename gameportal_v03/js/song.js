function song_m (file, vol, loop_true_false, songPlay_true_false )
{
	this.song = new Audio();
	this.song.src = file;
	this.song.volume = vol;
	this.song.loop = loop_true_false;

	// PLAY
	this.song_play = songPlay_true_false;
	if ( this.song_play == true )
	{
	this.song.play();
	}
	else
	{
	}
	

	
	
	//this.visible = true;
	//this.size_x = size_x;
    //this.size_y = size_y;
    //this.position_x = pos_x;
    //this.position_y = pos_y;
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
    	//if(this.visible)
    	//screen.drawImage(this.song, this.position_x, this.position_y);
    };


 
 }
