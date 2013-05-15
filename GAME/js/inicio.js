function Inicio()
{
	
	this.fundo_inicio = new Fundo_i("img/capa-do-jogo2.jpg", 0, 0)
	this.botao_vai = new Botao("img/play.png", 119, 51, 386, 452)
	this.botao_cred = new Botao("img/credits.png", 119, 51, 386, 526)
	
	this.update = function()
	{
		
	}
	
	this.draw = function()
	{
		this.fundo_inicio.draw();
		this.botao_vai.draw();
		this.botao_cred.draw();
		
	}
	
	this.mouse_down = function(mouse)
	{
	
		if(this.botao_vai.clicado(mouse))
		{
			currentScene = SCENES.VIDEO;
		}
		
		if(this.botao_cred.clicado(mouse))
		{
			currentScene = SCENES.CREDITOS;	
		}
		
	}
	
}