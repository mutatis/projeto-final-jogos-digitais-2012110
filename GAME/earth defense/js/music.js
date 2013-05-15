function Music(source)
{
	this.music = new Audio();
	this.music.src= source;
	this.music.load();
	this.music.loop = true
	this.music.play();
	

	this.music.onload = function()
	{
		loaded = true; 
		console.log("music" + loaded);
	};

     this.draw=function()
   {
		if(this.visible)
		this.music.play = true;
   }

}
