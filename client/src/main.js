function initCode() {

  //Prevents any whitespace between the scene view and the rest of the webpage
  document.body.style = "margin:0; padding:0;";

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.z = 1.4;

  scene = new THREE.Scene();

  function texture(url) {
   return new THREE.TextureLoader().load(url);
  }

  //Sets the sky
  scene.background = texture( "textures/sky.png" );

  //A torus shape. Resembles a donut in its geometry
  torus = new THREE.TorusGeometry( 1, 0.4, 12, 48 );
  //The "material" which gets applied over the torus
  donut_surface = new THREE.MeshBasicMaterial( { map: texture("textures/donut.png") } );
  donut = new THREE.Mesh( torus, donut_surface );
  scene.add( donut );

  tree_surface = new THREE.SpriteMaterial( { map: texture("textures/tree.jpg") } );
  tree = new THREE.Sprite( tree_surface );
  scene.add( tree );

  //I decided to add 100 doges here
  dogeskin = new THREE.SpriteMaterial( { map: texture("textures/dogehead.png") } );
  doge = new Array(100);
  for (let i = 0; i < 100; i++) {
    doge[i] = new THREE.Sprite(dogeskin);
    scene.add(doge[i]);
    doge[i].scale.set(0.1, 0.05, 0.1);
    doge[i].position.x = Math.random() - 0.5;
    doge[i].position.y = Math.random() - 0.5;
    doge[i].position.z = Math.random() - 0.5;
  }
  textimg = new THREE.SpriteMaterial( { map: texture("textures/dogelikesdonuts.png") } );
  dogetext = new THREE.Sprite(textimg);
  dogetext.scale.set(1.5, 0.5, 1.5);
  dogetext.material.opacity = 10;
  scene.add(dogetext);
  dogimg = new THREE.SpriteMaterial( { map: texture("textures/dog.png") } );
  dog = new THREE.Sprite(dogimg);
  scene.add(dog);
  
  //Render setup. The boring stuff. Focus on the donut sprinkles and doges @_@

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animation );
  //Fix any issues with the canvas screen
  renderer.domElement.style = "position:absolute; width:100%; height:100%;"

//Adds the Canvas Element to the HTML screen
document.body.appendChild( renderer.domElement );


// animation loop

function animate( time ) {

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
