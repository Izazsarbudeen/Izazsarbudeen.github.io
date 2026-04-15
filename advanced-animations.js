// advanced-animations.js

// Importing Three.js for 3D animations
import * as THREE from 'three';

// Setting up the scene, camera, and renderer for 3D elements
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adding a simple 3D cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Parallax scrolling effect
const parallaxElements = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Animated counters for achievements
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// SVG animations for system diagrams
const svgElements = document.querySelectorAll('svg');
svgElements.forEach(svg => {
    svg.style.animation = 'draw 2s forwards';
});

// Keyframes for SVG animation
const styleElement = document.createElement('style');
styleElement.innerHTML = `
@keyframes draw {
    0% { stroke-dasharray: 0, 1000; }
    100% { stroke-dasharray: 1000, 0; }
}`;
document.head.appendChild(styleElement);
