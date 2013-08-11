var coconut : Rigidbody;
var throwSpeed : float = 30.0; 
var throwSound : AudioClip;
static var canThrow : boolean = false;

function Update(){
	if(Input.GetButtonDown('Fire1') && canThrow){
		audio.PlayOneShot(throwSound);
		var newCoconut : Rigidbody = Instantiate(coconut, transform.position, transform.rotation);
		newCoconut.name = 'coconut';
		newCoconut.velocity = transform.forward * throwSpeed;
		Physics.IgnoreCollision(transform.root.collider, newCoconut.collider, true);
	}
}

@script RequireComponent(AudioSource);