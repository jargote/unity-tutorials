function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == 'bullet'){
		// Destroy bullet if has entered the barrel
		Destroy(col.gameObject);
		
		// Rotate barrel holding the bullet.
		transform.SendMessage('StartRotation');
		
		// activeBarrel is current barrel.
	 	transform.FindChild('bulletShooter').SendMessage('CanFire', true);
	 	
 	 	GameObject.Find('Main Camera').SendMessage('AnchorCamera');
	}
}