static var targets : int = 0;
static var haveWon : boolean = false;

var winSound : AudioClip;
var cellPrefab : GameObject;

function Start () {

}

function Update () {
	if(targets == 3 && haveWon == false){
		audio.PlayOneShot(winSound);
		var winCell : GameObject = transform.Find("powerCell").gameObject;
		winCell.transform.Translate(-1.6, 0, 0);
		Instantiate(cellPrefab, winCell.transform.position, winCell.transform.rotation);
		Destroy(winCell);
		haveWon = true;
	}
}

@script RequireComponent(AudioSource);