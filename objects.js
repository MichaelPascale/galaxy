/* objects.js
 *
 * Copyright 2019, Michael Pascale
 */

var objects = [];

var texture = new THREE.TextureLoader().load( "textures/earth_map.jpg" );
var geometry = new THREE.SphereGeometry( 1, 32, 32 );
var material = new THREE.MeshLambertMaterial( { map: texture});
var sphere = new THREE.Mesh( geometry, material );

radialposition(sphere, 40, rad(90), rad(120));

objects.push(sphere);





var spriteMap = new THREE.TextureLoader().load( "textures/l_nucleus.png" );
var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap } );
var sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(2, 2, 1);

radialposition(sprite, 7, rad(0), rad(0));


objects.push(sprite);




var marstexture = new THREE.TextureLoader().load( "textures/mars_map.jpg" );
var marsgeometry = new THREE.SphereGeometry( 0.75, 32, 32 );
var marsmaterial = new THREE.MeshLambertMaterial( { map: marstexture});
var mars = new THREE.Mesh( marsgeometry, marsmaterial );

radialposition(mars, 15, rad(92), rad(340));

objects.push(mars);



var tattexture = new THREE.TextureLoader().load( "textures/tatooine_map.jpg" );
var tatgeometry = new THREE.SphereGeometry( 1.2, 32, 32 );
var tatmaterial = new THREE.MeshLambertMaterial( {map: tattexture});
var tatooine = new THREE.Mesh( tatgeometry, tatmaterial );

radialposition(tatooine, 22, rad(85), rad(270));

objects.push(tatooine);



var texture = new THREE.TextureLoader().load( "textures/terrain.png" );
var geometry = new THREE.SphereGeometry( 1.5, 32, 32 );
var material = new THREE.MeshLambertMaterial( {map: texture});
var sphere = new THREE.Mesh( geometry, material );

radialposition(sphere, 32, rad(88), rad(68));

objects.push(sphere);



var texture = new THREE.TextureLoader().load( "textures/ship.png" );
var geometry = new THREE.TetrahedronGeometry(0.4);
var material = new THREE.MeshLambertMaterial( { map: texture});
var tetrahedron = new THREE.Mesh( geometry, material );

radialposition(tetrahedron, 50, rad(80), rad(33));

objects.push(tetrahedron);

