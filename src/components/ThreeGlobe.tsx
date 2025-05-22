
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let frameId: number;
    let globe: THREE.Mesh;
    let requestId: number;

    const mount = mountRef.current;
    if (!mount) return;

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.offsetWidth / mount.offsetHeight, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.offsetWidth, mount.offsetHeight);

    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xfefefe, 1.5);
    dirLight.position.set(2, 4, 5);
    scene.add(dirLight);

    // Globe
    const geometry = new THREE.SphereGeometry(1, 48, 48);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3887f8,
      shininess: 10,
    });
    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Animate & Render
    const animate = () => {
      globe.rotation.y += 0.003;
      dirLight.position.x = Math.sin(Date.now() / 1500) * 4;
      renderer.render(scene, camera);
      requestId = requestAnimationFrame(animate);
    };
    animate();

    // Responsive
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.offsetWidth / mount.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.offsetWidth, mount.offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(requestId);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-label="3D Rotating Globe"
    />
  );
};

export default ThreeGlobe;
