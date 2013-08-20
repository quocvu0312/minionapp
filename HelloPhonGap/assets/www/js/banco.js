// JavaScript Document
function banco(canvas)
{
	this.create_ban_co= function ()
	{
		var bc= new ban_co();	
		stage= new createjs.Stage("canvas1");
		var xoro=false;
		
		
		
		
		
			
		
			
	/*	
			
		var scheo= new createjs.Shape();
			scheo.graphics.setStrokeStyle(4);
			scheo.graphics.beginStroke("#FFEE33");
			scheo.graphics.moveTo(0,0);
			scheo.graphics.lineTo(30,30);
			
			scheo.graphics.moveTo(30,0);
			scheo.graphics.lineTo(0,30)
			
		
	
		  
*/
		
		
		for(var i=0;i<50;i++)
			{
				for(var j=0;j<50;j++)
				{
					var rect= new createjs.Shape();
				rect.graphics.setStrokeStyle(0.5);
				rect.graphics.beginStroke("#000000");
				rect.graphics.beginFill("#ffffff");
				rect.graphics.drawRect(0,0,29.5,29.5); //55,53
				rect.graphics.endFill();
				rect.x=i*30;
				rect.y=j*30;
				stage.addChild(rect);
				
					rect.onPress= function(event)
					{
						
						
						if(bc.check_danh_duoc( parseInt(event.stageY/30), parseInt(event.stageX/30))==true)
						{
							bc.tick_xo( parseInt(event.stageY/30), parseInt(event.stageX/30),xoro);
							console.log(bc.check_win( parseInt(event.stageY/30), parseInt(event.stageX/30),xoro));
							create_xo( parseInt(event.stageY/30), parseInt(event.stageX/30),xoro);
							
								
						}
						
						
					}
				}
			}
		
		function create_xo(_hang,_cot,xORo)
		{
			if(xORo==false)
			{
				var circle= new createjs.Shape();
				circle.graphics.setStrokeStyle(3);
				circle.graphics.beginStroke("#00ff33");
				circle.graphics.beginFill("#ffffff");
				circle.graphics.drawCircle(0,0,12);
				circle.scaleX=0.2;
				circle.scaleY=0.2;
				circle.x=_cot*30+15;
				circle.y=_hang*30+15;
				circle.graphics.endFill();
				
				createjs.Tween.get(circle).to({scaleX:1,scaleY:1},500,createjs.Ease.bounceOut);
				stage.addChild(circle);
				xoro=true;
			}
			else
			{
				var scheo= new createjs.Shape();
				scheo.graphics.setStrokeStyle(4);
				scheo.graphics.beginStroke("#FFEE33");
				scheo.graphics.moveTo(-13,-13);
				scheo.graphics.lineTo(13,13);
				
				scheo.graphics.moveTo(13,-13);
				scheo.graphics.lineTo(-13,13)
				
				scheo.x=_cot*30+15;
				scheo.y=_hang*30+15;
				
				scheo.scaleX=1.5;
				scheo.scaleY=1.5;
				createjs.Tween.get(scheo).to({scaleX:1,scaleY:1},500,createjs.Ease.bounceOut);
				stage.addChild(scheo);
				xoro=false;
			}
		}
		
		createjs.Ticker.addEventListener("tick",stage);
	}	
}
