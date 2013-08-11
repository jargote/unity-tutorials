#pragma strict

var bullet : Rigidbody;
var power : float = 1500;
var moveSpeed : float = 5;
var lookSpeed : float = 10;

function Update () {
	var rl : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
	var fb: float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;
	
	transform.Translate(rl, 0, fb);
	
	// If FIRE key has been pressed
	if(Input.GetButtonUp("Fire1")){
		var instance : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		var fwd : Vector3 = transform.TransformDirection(Vector3.forward);
		
		instance.AddForce(fwd * power);
	}
}