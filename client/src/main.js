function initCode() {

  //Prevents any whitespace between the scene view and the rest of the webpage
  document.body.style = "margin:0; padding:0;";

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.z = 1.4;

  scene = new THREE.Scene();

  function texture ( url ) {
   return new THREE.TextureLoader().load(url);
  }

  //Sets the sky
  scene.background = texture( "textures/sky.png" );
  
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  
  //Fix any issues with the canvas resolution & margins
  renderer.domElement.style = "position:absolute; width:100%; height:100%;"

  //Adds canvas to screen
  document.body.appendChild( renderer.domElement );


  // animation loop

  function animate( time ) {
    renderer.render( scene, camera );
    console.log("Rendering");
  }

//Fix any issues with the canvas or aspect ratio upon resizing your browser window
  onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    renderer.domElement.style = "position:absolute; width:100%; height:100%;"
  };
}
//Run initCode() when page is fully loaded
