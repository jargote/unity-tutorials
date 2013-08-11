private var moveTo : Vector3;

function Update(){
	if(moveTo != null){
		transform.Translate(moveTo * Time.deltaTime);
	}
}

function SetCamera(pos : Vector3){
	moveTo = pos;
}

function AnchorCamera(){
	moveTo = Vector3.zero;
}