console.log('index.ts');
import * as THREE from 'three';

let camera, scene, renderer;
let geometry, material, mesh;
  
init();
animate();

{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const light_2 = new THREE.DirectionalLight(color, intensity);
  light_2.position.set(-2, 3, 8);
  light_2.intensity=3;
  //scene.add(light_2);
}

  
function init() {
  
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
  
    scene = new THREE.Scene();
  
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    //material = new THREE.MeshNormalMaterial();
    material = new THREE.MeshPhongMaterial( { color: 0x5f5f5f } );
  
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
  
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  
}
  
function animate() {
  
    requestAnimationFrame( animate );
  
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.01;
  
    renderer.render( scene, camera );
  
}