function Game3SceneInstruction()
{
	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game3/INSTRUCTION.png",800, 600, 0, 0);

	
	this.update=function()
		{
	
		}
	
	this.draw=function()
		{  		
			// img de fundo
			this.fundo.draw();	

		};
}