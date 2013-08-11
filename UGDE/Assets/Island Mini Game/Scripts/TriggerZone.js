var textHints : GUIText;

function Update () {

}

function OnTriggerStay(col : Collider){
	if(col.gameObject.tag == 'Player'){
		transform.FindChild('door').SendMessage('ResetTimer');
	}
}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == 'Player'){		
		if(Inventory.charge == 4){
			transform.FindChild('door').SendMessage('DoorCheck');
		} else {
			transform.FindChild('door').SendMessage('DoorLocked');
			col.gameObject.SendMessage('HudOn');
			
			if(Inventory.charge == 0)
				textHints.SendMessage("ShowHint", "This door seems locked...maybe that generator needs power...");
			else
				textHints.SendMessage("ShowHint", "This door wont't budge... guess it needs fully\n charging maybe more power cellls will help");	
		}
	} 
}
