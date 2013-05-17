function Game3SceneIntro()
{

	//file, size_x, size_y, pos_x, pos_y
	this.fundo = new img_cenario("imgs/game3/tela_inicial.jpg",800, 600, 0, 0);

	//--Botão--------------------------------file, size_x, size_y, pos_x, pos_y
	this.button_start = new Button_2("imgs/game3/but_play.jpg", 178, 64, 311, 150);
	this.button_voltar = new Button_2("imgs/game3/but_voltar.jpg", 178, 64, 311,290);
	this.button_instrucao = new Button_2("imgs/game3/but_instru.jpg", 178, 64, 311, 220);




	this.update=function()
		{
	
		}
	
	this.draw=function()
		{  		
			// img de fundo
			this.fundo.draw();	
			
			// denha botão	
			this.button_voltar.draw();
			this.button_instrucao.draw();
			this.button_start.draw();
			
		};
		

}