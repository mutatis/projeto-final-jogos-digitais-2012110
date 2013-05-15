function Botao(file, tam_w, tam_h, pos_x, pos_y)
{//abre botao

this.img = new Image();
this.img.src = file;

this.visible = true;

this.tamanho_w = tam_w;
this.tamanho_h = tam_h;

this.posicao_x = pos_x;
this.posicao_y = pos_y;

this.Update = function()
{//abre update



}//fecha update

this.draw = function()
{//abre draw

if(this.visible)
screen.drawImage(this.img, this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h)

}//fecha draw

this.mouse_down=function(mouse)
  {
  
  };
  
  
  this.key_down=function(key)
  {
    
  
  };
  
      
  this.mouse_up=function(mouse)
  {
  
  
  };
  
  this.key_up=function(key)
  {
  
  
  };
  
  this.mouse_move=function(mouse)
  {
  
  
  };
  

this.clicado = function(mouse)
{//abre botao clicado

if(Collide(mouse.x-10, mouse.y-12, 1, 1,
this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h))
{

return true;

}

return false;

}//fecha botao clicado

}//fecha botao