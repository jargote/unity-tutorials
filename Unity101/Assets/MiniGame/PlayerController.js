// cmd + ' ctrl + '		Input Rigidbody Collider GUI

var speed = 1.0;
private var collectionCount = 0;

function FixedUpdate () {
	if (Input.GetKey ("w")) rigidbody.AddForce (Vector3.forward * speed * Time.deltaTime);
	if (Input.GetKey ("s")) rigidbody.AddForce (-Vector3.forward * speed * Time.deltaTime);
	if (Input.GetKey ("a")) rigidbody.AddForce (-Vector3.right * speed * Time.deltaTime);
	if (Input.GetKey ("d")) rigidbody.AddForce (Vector3.right * speed * Time.deltaTime);
}

function OnTriggerEnter (other : Collider) {
    if (other.gameObject.tag == "PickUp") {
    	other.gameObject.active = false;
    	collectionCount += 1;
	}
}

function OnGUI () {
    GUI.Label (Rect (10, 10, 120, 20), "Collection Count: " + collectionCount);
    if (collectionCount >= 8)
    	GUI.Label (Rect (Screen.width / 2 - 50, Screen.height / 3, 100, 20), "YOU WIN!");
}