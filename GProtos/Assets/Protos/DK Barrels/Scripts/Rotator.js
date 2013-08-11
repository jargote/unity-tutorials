// Public
var speed : float;
var stopTime : float;

// Private
private var timer : float = 0.0;
private var shouldRotate : boolean = false;
private var waiting : boolean = false;
private var colliderId : int;

function Update(){
	if(shouldRotate){
		if(!waiting){
			transform.Rotate(-Vector3.forward * Time.deltaTime * speed);
			
			var hit : RaycastHit;
			if(Physics.Raycast(transform.position, transform.up, hit, 10)){
				if(hit.collider.tag == 'barrel' && hit.collider.GetInstanceID() != colliderId){
					waiting = true;
					colliderId = hit.collider.GetInstanceID();
				}
			}
			
		} else {
			IncreaseTimer();
		}
	}
}
private function IncreaseTimer(){
	if(timer >= stopTime){
		timer = 0.0;
		waiting = false;
	} else {
		timer += Time.deltaTime;
	}
}

function StopRotation(){
	shouldRotate = false;
}

function StartRotation(){
	shouldRotate = true;
}