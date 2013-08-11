/*private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;

var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

private var collisions : int = 0;

function Start () {

}

function Update () {
	if(doorIsOpen){
		doorTimer += Time.deltaTime;

		if(doorTimer > doorOpenTime){
			Door(doorShutSound, doorIsOpen, 'doorshut', currentDoor);
			doorTimer = 0.0;
		}
	}	
}

function OnControllerColliderHit(hit : ControllerColliderHit ){	
	if(hit.gameObject.tag == 'playerDoor' && !doorIsOpen){
		Door(doorOpenSound, doorIsOpen, 'dooropen', hit.gameObject);
		currentDoor = hit.gameObject;
	}


function Door(aClip : AudioClip, openCheck : boolean, animName : String, thisDoor : GameObject){
	thisDoor.audio.PlayOneShot(aClip);
	thisDoor.transform.parent.animation.Play(animName);
	doorIsOpen = !openCheck;
}*/

private var currentDoor : GameObject;

function Update(){
	var hit : RaycastHit;
	
	if(Physics.Raycast(transform.position, transform.forward, hit, 3)){		
		if(hit.collider.gameObject.tag == 'playerDoor'){
			currentDoor = hit.collider.gameObject;
			currentDoor.SendMessage("DoorCheck");
		}
	}
}