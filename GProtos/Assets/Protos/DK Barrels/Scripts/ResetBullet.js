var bullet : Rigidbody;
var cameraStart : Vector3;

function Update () {

}

function OnTriggerExit(col : Collider){
	// Bullet out of boundaries
	if(col.gameObject.tag == 'bullet'){
		Instantiate(bullet, Vector3(-7, 8.5, -10), col.transform.rotation);

		GameObject.Find('Main Camera').transform.position = cameraStart;

		Destroy(col.gameObject);
	}
}