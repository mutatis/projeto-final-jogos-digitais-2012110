function Asteroid(file, tamanho_w, tamanho_h, pontos)

{
		this.img = new Image();
        this.img.src = file;
        
        this.visible = true;
		
		
        this.pontos = pontos;
        
        this.posicao_x_dst = Math.floor((Math.random()*(SCREENWIDTH-this.tamanho_w_dst)));
        this.posicao_y_dst = (SCREENHEIGHT+this.tamanho_h_dst);

        
        this.scale_x = 1;
        this.scale_y = 1;
        
        this.tamanho_w_src = tamanho_w;
        this.tamanho_h_src = tamanho_h;
        
        this.tamanho_w_dst = 50;
        this.tamanho_h_dst = 50;
        
        //this.posicao_x_src = 10;
       // this.posicao_y_src = 20;
        
        this.current_frame = 0;
        this.frames = 12;
        
        this.fps = 24;//frames por segundo
        this.time_per_frame = 1000/this.fps;
        this.setFPS = function(newFPS)
        {//abre setFPS
			
			this.fps = newFPS;
            this.time_per_frame = 1000/this.fps;
			
        }//fecha setFPS
        
        this.delta_time = 0;
        this.acumulated_delta_time = 0
        this.last_draw_time = 0;
        
        this.update = function()
        {//abre update
         this.posicao_x_dst +=  this.scale_x;
   		
   		this.posicao_y_dst += this.scale_y;
   		
   		if(this.posicao_y_dst < -this.tamanho_h_dst)
   		{
   			this.visible = true;
   			this.posicao_x_dst=(SCREENHEIGHT+this.tamanho_w_dst);
   			this.posicao_x_dst=Math.floor((Math.random()*(SCREENWIDTH-this.this.tamanho_w_dst)));
   		}
           
           
                
        }//fecha update
        
        this.draw = function()//funcao desenhar (draw)
        {//abre draw
                
                
                //console.log("oioio");
                
                if(this.visible)
                screen.drawImage(this.img,
                                        this.tamanho_w_src*this.current_frame,
                                        this.posicao_y_src,
                                        this.tamanho_w_src,
                                        this.tamanho_h_src,
                                        this.posicao_x_dst,
                                        this.posicao_y_dst,
                                        this.tamanho_w_dst*this.scale_x,
                                        this.tamanho_h_dst*this.scale_y);
                                        
                this.delta_time = Date.now() - this.last_draw_time;
                
                if(this.acumulated_delta_time > this.time_per_frame)
                {//abre if
                        
                        this.acumulated_delta_time = 0;
                        this.current_frame++;
                        if(this.current_frame >= this.frames)
                        {//abre if
                        
                                this.current_frame = 0;
								//this.visible = false;
								//this.anipt2.draw();	
                                
                        }//fecha if
                  
                        
                }//fecha if
                else
                {//abre else
                
                        this.acumulated_delta_time += this.delta_time;
                        
                }//fecha if
                
                this.last_draw_time = Date.now();
                
        }//fecha draw
   this.key_down=function(key)
   {
   	
   };
       
   this.mouse_up=function(mouse)
   {
   	
   };
   
   
   
   this.mouse_move=function(mouse)
   {
   	
   };
   
  this.clicked = function(mouse)
	{//abre botao clicado

	if(Collide(mouse.x, mouse.y, 1, 1, this.posicao_x_dst, this.posicao_y_dst, this.tamanho_w_dst, this.tamanho_h_dst))
				{
					if(this.visible == true)	
					{	
						return true;
					}
				}
				
				return false;
	}	
}
       
       