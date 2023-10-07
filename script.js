// Initialize Three.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create a 3D Earth model
var loader = new GLTFLoader();
loader.load('earth', (gltf) => {
    const earth = gltf.scene;
    scene.add(earth);
});

// Set camera position
camera.position.z = 5;

// Add lighting to the scene (optional)
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    // Add any animation or rotation here if needed
    renderer.render(scene, camera);
};

animate();
