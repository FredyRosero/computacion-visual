import * as THREE from "https://unpkg.com/three@0.161.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.161.0/examples/jsm/controls/OrbitControls.js";

// Escena, cámara, renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 0.1, 100
);
camera.position.set(5, 5, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controles de cámara
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

// Luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

// Texturas
const loader = new THREE.TextureLoader();
const floorTex = loader.load("../textures/floor.jpg");
const boxTex   = loader.load("../textures/box.jpg");

// Piso
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ map: floorTex })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = 0;
scene.add(floor);

// Formas geométricas
const objects = [];

// Cubo texturizado
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1.5, 1.5),
  new THREE.MeshStandardMaterial({ map: boxTex })
);
box.position.set(-2, 0.75, 0);
scene.add(box);
objects.push(box);

// Esfera
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x66ccff })
);
sphere.position.set(2, 0.8, 0);
scene.add(sphere);
objects.push(sphere);

// Cono
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.6, 32),
  new THREE.MeshStandardMaterial({ color: 0xffaa00 })
);
cone.position.set(0, 0.8, -2);
scene.add(cone);
objects.push(cone);

// Toro
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.7, 0.2, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0xaa66ff })
);
torus.position.set(0, 0.8, 2);
scene.add(torus);
objects.push(torus);

// Funciones para cambiar vista
function setViewFront() {
  camera.position.set(5, 5, 8);
  controls.target.set(0, 1, 0);
  controls.update();
}

function setViewTop() {
  camera.position.set(0, 10, 0.1);
  controls.target.set(0, 0, 0);
  controls.update();
}

// Atajos de teclado 1 y 2
window.addEventListener("keydown", (e) => {
  if (e.key === "1") setViewFront();
  else if (e.key === "2") setViewTop();
});

// Animación
function animate() {
  requestAnimationFrame(animate);

  // animaciones simples
  box.rotation.y += 0.01;
  sphere.position.y = 0.8 + Math.sin(Date.now() * 0.002) * 0.2;
  cone.rotation.x += 0.015;
  torus.rotation.z += 0.02;

  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
