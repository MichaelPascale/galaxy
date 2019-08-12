/* util.js
 * utility functions for starfield animation.
 *
 * Copyright 2019, Michael Pascale
 */


/* radialposition(object)
 *
 * Modify an objects position using radial coordinates.
 *
 * 		r		distance from the origin.
 * 		theta	polar angle.
 * 		phi		azimuthal angle.
 */
function radialposition(object, r, theta, phi) {

	var x = r * Math.sin(theta) * Math.sin(phi);
	var y = r * Math.cos(theta);
	var z = r * Math.sin(theta) * Math.cos(phi);

	object.position.x = x;
	object.position.y = y;
	object.position.z = z;
}

// Convert to radians.
function rad(degrees) {
	return degrees * Math.PI/180;
}

// Random +1 or -1.
function plusorminus() {
	return (Math.random() > 0.5) ? 1 : -1;
}
