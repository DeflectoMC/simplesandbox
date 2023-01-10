var Main = {};

function initCode() {

  //Prevents any whitespace between the scene view and the rest of the webpage
  document.body.style = "margin:0; padding:0;";

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.z = 1.4;

  scene = new THREE.Scene();

  var texture = function(url) {
   return new THREE.TextureLoader().load(url);
  }

  //Sets the sky
  scene.background = texture( "textures/sky.png" );
  
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  
  //Fix any issues with the canvas resolution & margins
  renderer.domElement.style = "position:absolute; width:100%; height:100%;"

  //Adds canvas to screen
  document.body.appendChild( renderer.domElement );


  // animation loop

   var animate = function( time ) {
    renderer.render( scene, camera );
    console.log("Rendering");
  }

//Fix any issues with the canvas or aspect ratio upon resizing your browser window
  onresize = (e) => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    renderer.domElement.style = "position:absolute; width:100%; height:100%;"
  };
}
setTimeout(initCode, 100)
//TODO: Change to a proper load after three.min.js is loaded
