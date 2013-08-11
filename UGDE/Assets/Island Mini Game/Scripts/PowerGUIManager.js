// HUD
var hudCharge : Texture2D[];

function RefreshHud(){
	guiTexture.texture = hudCharge[Inventory.charge];
	
	if(Inventory.charge == 4){
		guiTexture.enabled = false;
	}
}