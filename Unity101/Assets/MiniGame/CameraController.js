var player : GameObject;
var offset : Vector3;

function Update () {
	transform.position = player.transform.position + offset;
}