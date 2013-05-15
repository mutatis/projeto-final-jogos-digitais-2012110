function Fundo_i(file, pos_x, pos_y)
{

this.img = new Image();
this.img.src = file;
this.loaded = false;
this.visible = true;

this.img.onload = function()
{

loaded = true;
console.log("carregou" + loaded);

}

this.tamanho_w = 600;
this.tamanho_h = 960;
this.posicao_x = pos_x;
this.posicao_y = pos_y;

this.draw = function()
{

screen.drawImage(this.img, this.posicao_x, this.posicao_y)

}

}