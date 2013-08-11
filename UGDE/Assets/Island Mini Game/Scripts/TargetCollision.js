private var targetRoot : Animation;
private var beenHit : boolean = false;

var hitSound : AudioClip;
var resetSound : AudioClip;
var resetTime : float = 3.0;

function Start(){
	targetRoot =  transform.parent.transform.parent.animation;
}

function Update () {

}

function OnCollisionEnter(theObject : Collision){
	if(!CoconutWin.haveWon){
		if(beenHit == false && theObject.gameObject.name == "coconut"){
			StartCoroutine("targetHit");
		}
	}
}

function targetHit(){	
	audio.PlayOneShot(hitSound);
	targetRoot.Play("down");
	beenHit = true;
	CoconutWin.targets++;

	yield new WaitForSeconds(resetTime);

	audio.PlayOneShot(resetSound);
	targetRoot.Play("up");
	beenHit = false;
	CoconutWin.targets--;
}

@script RequireComponent(AudioSource);