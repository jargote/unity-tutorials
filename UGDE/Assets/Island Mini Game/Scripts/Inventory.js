static var charge : int = 0;
var disableHud = false;

var chargeHudGUI : GUITexture;
var chargeMeter : Renderer;

function Start(){
	charge = 0;
}

function Update(){

}

function HudOn(){
	if(!chargeHudGUI.enabled)
		chargeHudGUI.enabled = true;
}

function CellPickup(){
	HudOn();
	charge++;
	chargeHudGUI.SendMessage('RefreshHud');
	chargeMeter.SendMessage('RefreshMeter');
}