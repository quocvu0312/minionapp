function SelectScreen()
{	
	var stage= new createjs.Stage("canvas1");
	
	this.create_select_screen= function()
	{
		
		
		textbox= new createjs.Container();
		stage.addChild(textbox);
		
		var tb=createjs.DOMElement("textName");
		textbox.addChild(tb);
		createjs.Ticker.addEventListener("tick", stage);
	}
}