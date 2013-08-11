// Inspector variables
var bullet : Rigidbody;
var minSpeed : float = 10.0;
var maxSpeed: float = 25.0;

// Private variables
private var canFire : boolean = false;
private var speed: float;

function Start(){
	speed = minSpeed;
}

function Update () { 	
	if(canFire){
		if(Input.GetKey('space')){
			Debug.Log(speed);
			if(maxSpeed > speed){
				speed += 10 * Time.deltaTime;
			}
		}
		// If activeBarrel in the Inventory is this barrel, it has the bullet.
		if(Input.GetKeyUp('space')){
			Fire();
		}
	}
}

function CanFire(val : boolean){
	canFire = val;
}

function Fire(){
	// Create a new bullet
	var newBullet : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
	
 	Physics.IgnoreCollision(transform.parent.collider, newBullet.collider);
 	
	// Shoot bullet
	newBullet.velocity = transform.forward * speed;
 	GameObject.Find('Main Camera').SendMessage('SetCamera', transform.parent.transform.up * speed);
	
	// Stop rotation of the parent
	transform.parent.SendMessage('StopRotation');
	
	// Disable this bulletShooter
	CanFire(false);	
	
	// Reset initial speed to 0.0
	speed = minSpeed;
}