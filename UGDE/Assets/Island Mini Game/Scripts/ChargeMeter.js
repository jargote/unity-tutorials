var meterCharge : Texture2D[];
var doorLight : Light;
var door : GameObject;
var textHints : GUIText;

function Update(){

}

function RefreshMeter(){
	renderer.material.mainTexture = meterCharge[Inventory.charge];
	
	if(Inventory.charge == 4){
		doorLight.color = Color.green;
		door.SendMessage('DoorUnlocked');
		textHints.SendMessage("ShowHint", "The power has been restored to the generator...the door is unlocked!");
	}
}