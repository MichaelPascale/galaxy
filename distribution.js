/* distribution.js
 * utility functions for starfield animation.
 *
 * Copyright 2019, Michael Pascale
 */

/* radialprobdens()
 *
 *  Generate a number between 1 and 10, biased towards lower numbers.
 */
function radialprobdens() {

	var rand = Math.random() * 100;

	if (rand <= 10) return Math.random() * 2;
	else if (rand <= 40) return Math.random() * 4;
	else if (rand <= 60) return Math.random() * 6;
	else if (rand <= 80) return Math.random() * 8;
	else if (rand <= 100) return Math.random() * 10;
}

/* radialdistribute(star)
 *
 * Randomly position a star based on a probability density.
 */
function radialdistribute(star) {

	var r = radialprobdens()/10 * GALAXY_SIZE/2;

	var theta = rad(90);
	var phi = Math.random() * Math.PI * 2;

	//radialposition(star, r, theta, phi);

	// Star is in the nucleus.
	if (r <= .2 * GALAXY_SIZE/2) {
		radialposition(star, r, theta, phi);
		star.position.y = plusorminus()   *  Math.random() * (1 - 2.5*r/(GALAXY_SIZE/2))  * 6;

	// Buffer zone randomized to make smoother transition.
	} else if (r <= .5 * GALAXY_SIZE/2 && plusorminus() == 1) {
		radialposition(star, r, theta, phi);
		star.position.y = plusorminus()   *  Math.random() * (1 - 2.5*r/(GALAXY_SIZE/2))  * 6;
	// Stars in the arms.
	} else {
		if (phi >= rad(0) && phi <= rad(60))
			radialposition(star, r, theta, rad(plusorminus() * radialprobdens()*3 + (0 + r * 5) ));

		else if (phi > rad(60) && phi <= rad(120))
			radialposition(star, r, theta, rad(plusorminus() * radialprobdens()*3 + (60 + r * 5) ));

		else if (phi > rad(120) && phi <= rad(180))
			radialposition(star, r, theta, rad(plusorminus() * radialprobdens()*3 + (120 + r * 5) ));

		else if (phi > rad(180) && phi <= rad(240))
			radialposition(star, r, theta, rad(plusorminus() * radialprobdens()*3 + (180 + r * 5) ));

		else if (phi > rad(240) && phi <= rad(300))
			radialposition(star, r, theta, rad(plusorminus() * radialprobdens()*3 + (240 + r * 5) ));

		else if (phi > rad(300) && phi <= rad(360))
			radialposition(star, r, theta, rad(plusorminus() * radialprobdens()*3 + (300 + r * 5) ));

		star.position.y = plusorminus()   *  Math.random() * (1 - r/(GALAXY_SIZE/2))   *   3;
	}

	if (Math.random() * 100 >= 90) star.position.y += plusorminus() * Math.random() * 3;
}
