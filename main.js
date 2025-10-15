import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material para el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 2; // Mover a la derecha
scene.add(cube);


// cubo 2
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshStandardMaterial({ color: 0xff66cc });
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.x = 0; // Mover a la derecha
scene.add(cube2);


// cubo 3
const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshStandardMaterial({ color: 0xffff00  });
const cube3 = new THREE.Mesh(geometry3, material3);
cube2.position.x = -2; // Mover a la derecha
scene.add(cube3);


// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {

    cube.rotation.x += 0.01; // Rotación en eje X
    cube.rotation.y += 0.01; // Rotación en eje Y

    cube2.rotation.x += 0.03; // Rotación en eje X
    cube2.rotation.y += 0.02; // Rotación en eje Y

    cube3.rotation.x += 0.05; // Rotación en eje X
    cube3.rotation.y += 0.08; // Rotación en eje Y

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);