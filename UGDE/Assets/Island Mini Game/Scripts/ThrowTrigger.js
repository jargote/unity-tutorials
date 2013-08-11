var crosshair : GUITexture;
var textHint : GUIText;

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == 'Player' && !CoconutWin.haveWon){
		CoconutThrower.canThrow = true;
		crosshair.enabled = true;
		textHint.SendMessage("ShowHint", "\n\n\n\n\n There's a powercell attached to this game,\n maybe I'll win it if I can knock down all the targets");
	}
}

function OnTriggerExit(col : Collider){
	if(col.gameObject.tag == 'Player'){
		CoconutThrower.canThrow = false;
		crosshair.enabled = false;
	}
}