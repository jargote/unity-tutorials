private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;

var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;
var doorLockSound : AudioClip;
var doorUnlockSound : AudioClip;

function Update () {
	if(doorIsOpen){
		doorTimer += Time.deltaTime;
		DoorCheck();
	}	
}

function DoorCheck(){
	if(!doorIsOpen){
		Door(doorOpenSound, true, 'dooropen');
	} 
	else if(doorIsOpen && doorTimer > doorOpenTime){
		Door(doorShutSound, false, 'doorshut');
		doorTimer = 0.0;
	}
}

function DoorLocked(){
	audio.PlayOneShot(doorLockSound);
}

function DoorUnlocked(){
	audio.PlayOneShot(doorUnlockSound);
}

function Door(aClip : AudioClip, openCheck : boolean, animName : String){
	audio.PlayOneShot(aClip);
	transform.parent.animation.Play(animName);
	doorIsOpen = openCheck;
}

function ResetTimer(){
	doorTimer = 0.0;
}