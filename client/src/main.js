var Main = {};

Main.initCode = function() {

  //Prevents any whitespace between the scene view and the rest of the webpage
  document.body.style = "margin:0; padding:0;";

  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.z = 1.4;

  Main.scene = new THREE.Scene();

  Main.texture = function ( url ) {
   return new THREE.TextureLoader().load(url);
  }

  //Sets the sky
  Main.scene.background = Main.texture( "textures/sky.png" );
  
  Main.renderer = new THREE.WebGLRenderer( { antialias: true } );
  Main.renderer.setSize( window.innerWidth, window.innerHeight );
  
  //Fix any issues with the canvas resolution & margins
  Main.renderer.domElement.style = "position:absolute; width:100%; height:100%;"

  //Adds canvas to screen
  document.body.appendChild( Main.renderer.domElement );


  // animation loop

  Main.animate = function ( time ) {
    Main.renderer.render( Main.scene, Main.camera );
    console.log("Rendering");
  }
  
  //Begins rendering
  Main.renderer.setAnimationLoop( Main.animate );
  

//Fix any issues with the canvas or aspect ratio upon resizing your browser window
  window.onresize = (e) => {
    Main.renderer.setSize(window.innerWidth, window.innerHeight);
    Main.camera.aspect = window.innerWidth/window.innerHeight;
    Main.camera.updateProjectionMatrix();
    Main.renderer.domElement.style = "position:absolute; width:100%; height:100%;"
  };
}
window.setTimeout(Main.initCode, 3000)
//TODO: Change to a proper load after three.min.js is loaded
