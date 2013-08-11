var myLight : Light;

function Start () {
	var myVar = AddTwo (9,2);
	Debug.Log (myVar);
}

function Update () {
	if (Input.GetKeyDown("space"))
		MyFunction ();
}

function MyFunction () {
	myLight.enabled = !myLight.enabled;
	var myVar = AddTwo (9,2);
	Debug.Log (myVar);
}

function AddTwo (var1, var2) {
	var returnValue = var1 + var2;
	return returnValue;
}