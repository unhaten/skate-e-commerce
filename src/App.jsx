import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Skates from "./pages/skates/Skates";
import Create from "./pages/skates/create/Create";
import Help from "./pages/help/Help";

import SkateLayout from "./layouts/SkateLayout";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="help" element={<Help />}></Route>

                <Route path="skates" element={<SkateLayout />}>
                    <Route index element={<Skates />}></Route>
                    <Route path="create" element={<Create />}></Route>
                </Route>
            </Route>
        )
    );

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// animate();
