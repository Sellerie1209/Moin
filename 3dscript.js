
const container = document.getElementById("3dobjekt");
const shape = container.dataset.shape;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("Canvas")} );
renderer.setSize(container.clientHeight, container.clientHeight);
renderer.setClearColor(0xe5e5e5);
container.appendChild(renderer.domElement);

const cam = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 1000)
cam.position.set(0, 30, 50);
cam.lookAt(0, 10, 0);

material = new THREE.MeshLambertMaterial({ color: 0x03c4ff,});

const light = new THREE.AmbientLight( 0x404040, 4 );
light.position.set(100);
scene.add( light );

const directionalLight = new THREE.DirectionalLight(0x404040, 2);
directionalLight.position.set(5, 20, 5); 
directionalLight.castShadow = true; 
scene.add(directionalLight);


switch (shape) {
    case "quader":
        geometry = new THREE.BoxGeometry(1, 1, 1);
        mesh = new THREE.Mesh(geometry, material);
        break;
    case "sphere":
        geometry = new THREE.SphereGeometry(5, 64, 64);
        mesh = new THREE.Mesh(geometry, material);
        break;
    case "zylinder":
        geometry = new THREE.CylinderGeometry(1, 1, 4, 256);
        mesh = new THREE.Mesh(geometry, material);
        break;
    case "prisma":
        geometry = new THREE.CylinderGeometry(1, 1, 4, 4, 1);
        mesh = new THREE.Mesh(geometry, material);
        break;
    case "pyramide":
        geometry = new THREE.CylinderGeometry(0, 1, 4, 4, 1);
        mesh = new THREE.Mesh(geometry, material);
        break;  
}


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

mesh.receiveShadow = true;

mesh.position.set(0, 10, 0);
scene.add(mesh);


function updatequader() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let depth = document.getElementById("depth").value;
    mesh.geometry.dispose();
    geometry = new THREE.BoxGeometry(width, height, depth);
    mesh.geometry = geometry;
}

function updatespherer() {
    let radius = document.getElementById("radius").value;
    mesh.geometry.dispose();
    geometry = new THREE.SphereGeometry(radius, 64, 64);
    mesh.geometry = geometry;
}

function updatezylinder() {
    let radius = document.getElementById("radius").value;
    let height = document.getElementById("height").value;
    mesh.geometry.dispose();
    geometry = new THREE.CylinderGeometry(radius, radius, height, 256);
    mesh.geometry = geometry;
}

function updateprisma() {
    let site = document.getElementById("site").value;
    let sites = document.getElementById("sites").value;
    let height = document.getElementById("height").value;
    let radius = site / (2 * Math.tan(Math.PI / sites));
    mesh.geometry.dispose();
    geometry = new THREE.CylinderGeometry(radius, radius, height, sites, 1);
    mesh.geometry = geometry;
}

function updatepyramide() {
    let site = document.getElementById("site").value;
    let sites = document.getElementById("sites").value;
    let height = document.getElementById("height").value;
    let radius = site / (2 * Math.tan(Math.PI / sites));
    mesh.geometry.dispose();
    geometry = new THREE.CylinderGeometry(0, radius, height, sites, 1);
    mesh.geometry = geometry;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, cam);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    mesh.rotation.z += 0.005;
}

animate();