import "./S1.css"
import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';


const S1 = ({handleClick}) => {
    const mountRef = useRef(null);
    const FLOOR_COLOR = 0xFFA500
    // const [mouseX, setMouseX] = useState(0);
    // const [mouseY, setMouseY] = useState(0);
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    // 마우스 움직임에 대한 이벤트 핸들러
    const onMouseMove = e => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        // calculateCoordinates(e.clientX, e.clientY);
        mouseX.current = (e.clientX - windowHalfX) * 5;
        mouseY.current = (e.clientY - windowHalfY) * 5;
    };

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, currentRef.clientWidth / currentRef.clientHeight, 0.1, 10000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearAlpha(0);
        const group = new THREE.Group()
        const textMesh = new THREE.Mesh()

        scene.background = new THREE.Color(FLOOR_COLOR);

        const material = new THREE.MeshNormalMaterial();

        const fontLoader = new FontLoader();
        //     // 폰트 파일의 경로를 지정합니다. 이 폰트 파일은 JSON 형식이어야 합니다.
        fontLoader.load('../src/fonts/helvetiker_regular.typeface.json', (font) => {
            textMesh.geometry = new TextGeometry('I`m Jaeman\nFrontEnd Developer\nWelcome\nMy Portfolio', {
                font: font,
                size: 100,
                height: 40,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 30,
                bevelSize: 8,
                bevelOffset: 1,
                bevelSegments: 12
            });
    
            textMesh.material = material

            scene.add(textMesh);
        });

        const generateRandomMesh = (geometry, material, count) => {
            for (let i = 0; i < count; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            const dist = 120 * i;
            const distDouble = dist * 2 + 50;

            mesh.position.x = Math.random() * distDouble - dist;
            mesh.position.y = Math.random() * distDouble - dist;
            mesh.position.z = Math.random() * distDouble - dist;
            mesh.rotation.x = Math.random() * 2 * Math.PI;
            mesh.rotation.y = Math.random() * 2 * Math.PI;
            mesh.rotation.z = Math.random() * 2 * Math.PI;

            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();
            group.add(mesh);
            }
        }

        const octahedronGeometry = new THREE.OctahedronGeometry(50);
        generateRandomMesh(octahedronGeometry, material, 100);

        const torusGeometry = new THREE.TorusGeometry(20, 15, 8, 20);
        generateRandomMesh(torusGeometry, material, 200);

        const coneGeometry = new THREE.ConeGeometry(20, 40, 40);
        generateRandomMesh(coneGeometry, material, 100);
        scene.add(group);

        renderer.setSize(window.innerWidth, window.innerHeight);
        currentRef.appendChild(renderer.domElement);
    
        camera.position.set(-2, 30, 780);


        function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', onWindowResize);

        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.minDistance = 2;
        // controls.maxDistance = 8;
        // controls.maxPolarAngle = Math.PI / 2;

        // // OrbitControls의 타겟을 씬의 중심점으로 설정합니다.
        // controls.target.set(30, 0, 680);

        // useEffect 내부에 아래 함수 추가
        // const animate = () => {
        //     requestAnimationFrame(animate);
            
        //     // 필요한 경우 여기에서 텍스트 메쉬나 그룹의 변형을 업데이트 할 수 있습니다.
        //     // 예: textMesh.rotation.x += 0.01;
        //     // controls.update();
        
        //     renderer.render(scene, camera);
        // };

        function animate() {
            requestAnimationFrame(animate);
            camera.position.x += (mouseX.current - camera.position.x) * 0.05;
            camera.position.y += (mouseY.current * -1 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            const t = Date.now() * 0.001;
            const rx = Math.sin(t * 0.7) * 0.5;
            const ry = Math.sin(t * 0.3) * 0.5;
            const rz = Math.sin(t * 0.2) * 0.5;
            group.rotation.x = rx;
            group.rotation.y = ry;
            group.rotation.z = rz;
            textMesh.rotation.x = rx;
            textMesh.rotation.y = ry;
            textMesh.rotation.z = rx;
            renderer.render(scene, camera);
          }
        
        animate(); 

        document.addEventListener('mousemove', onMouseMove, false);

        return () => {
            currentRef.removeChild(renderer.domElement);
            document.removeEventListener('mousemove', onMouseMove, false);
        };

    }, []);

    return (
        <div ref={mountRef} className="S1_container" onClick={handleClick}>
            
        </div>
    );
};

export default S1;