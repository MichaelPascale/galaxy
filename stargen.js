/* stargen.js
 * generate star properties.
 *
 * Copyright 2019, Michael Pascale
 */

/* stargen()
 *
 * Generate and return a random star object.
 */
function stargen() {

	// Star is a mesh of a sphere geometry and lambert material.
	//var star = new THREE.Mesh( new THREE.SphereBufferGeometry( Math.random()*.09 +.01, 16, 16 ), new THREE.MeshBasicMaterial() );
	
	var geometry = new THREE.Geometry();
	
	geometry.vertices.push(new THREE.Vector3());
	
	var material = new THREE.PointsMaterial();

	var star = new THREE.Points( geometry, material );

	// Determine the star class and color it accordingly.
	var num = Math.random() * 10000;
	if (num <= 1) {			//O
		star.material.color.setHex( 0x799cfc );	// Blue
		material.size = Math.random()* 0.5 + .8;
	} else if (num <= 14) {		//B
		star.material.color.setHex( 0x66ffff );	// Light Blue
		material.size = Math.random()* 0.4 + .65;
	} else if (num <= 74) {		//A
		star.material.color.setHex( 0xffffff );	// White
		material.size = Math.random()* 0.3 + .50;
	} else if (num <= 374) {	//F
		star.material.color.setHex( 0xf9f48b );	// Light Yellow
		material.size = Math.random()* 0.2 + .40;
	} else if (num <= 1134) {	//G
		star.material.color.setHex( 0xfcfc2d);	// Yellow
		material.size = Math.random()* 0.1 + .35;
	} else if (num <= 2344) {	//K
		star.material.color.setHex( 0xfcd599 );	// Orange
		material.size = Math.random()*.07 + .20;
	} else {				//M
		star.material.color.setHex( 0xf9bcb8 ); // Red
		material.size = Math.random()*.05 + .18;
	}
	radialdistribute(star);

	return star;
}
