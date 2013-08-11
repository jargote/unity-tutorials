var hintTimer : int = 3;
private var hintCounter : float = 0.0;

function Update () {
	if(guiText.enabled){ 
		hintCounter += Time.deltaTime;
		
		if(hintCounter >= hintTimer)
			guiText.enabled = false;
	}
}

function ShowHint(msg : String){
	hintCounter = 0.0;
	guiText.enabled = true;
	guiText.text = msg;
}