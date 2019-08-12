/* starfield.js
 *
 * Copyright 2019, Michael Pascale
 */

var GALAXY_SIZE = 100;
var STARS = 9000;
var rotate = true;

// Create the scene and camera.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );

// Set the initial camera position.
camera.position.y = GALAXY_SIZE;

// Origin provides a target for the camera.
origin = new THREE.Vector3(0,0,0);

// Setup orbital controls for mouse interaction.
var controls = new THREE.OrbitControls( camera );

// Setup render window.
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function toggler() {
	(rotate == true) ? rotate = false : rotate = true;
	return 0;
}



// Draw x, y, z axes.
//var axesHelper = new THREE.AxesHelper( GALAXY_SIZE/2 );
//scene.add( axesHelper );

var light = new THREE.AmbientLight( 0xffffff, 0.4);
scene.add( light );

var pointlight = new THREE.PointLight( 0xffffff, 1, 0 );
scene.add( pointlight );

//scene.fog = new THREE.Fog( 0x000000, GALAXY_SIZE/1.2, GALAXY_SIZE*2);

// Stars will be an array of objects.
var stars = [];

// Merge all static stars into one object.
var starfield = new THREE.Object3D();

for (var i = 0; i < STARS; i++) {
	// Generate a star and add it to the array.
	stars.push(stargen());
	// Add the star to the starfield object.
	starfield.add(stars[i]);
}

// Add the starfield to the scene.
scene.add(starfield);




// Add any objects defined in objects.js
for (var i = 0; i < objects.length; i++)
	starfield.add(objects[i]);





var animate = function () {
	requestAnimationFrame( animate );

	// For time based movements.
	//var time = Date.now();

	// Rotate the stars about the y-axis.
	if (rotate == true) starfield.rotateY(-0.005);

	// Redirect the camera towards the origin.
	//camera.lookAt(origin);

	controls.update();
	renderer.render( scene, camera );
};

animate();

