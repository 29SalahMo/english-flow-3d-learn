
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Use OrbitControls from three directly for simplicity (no R3F).
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const STAR_COUNT = 100;
const GLOBE_COLOR = "#8b5cf6"; // Modern violet
const ATMOS_COLOR = "#c084fc"; // Soft purple glow hue

const ThreeGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let frameId: number;
    let globe: THREE.Mesh;
    let atm: THREE.Mesh;
    let stars: THREE.Points;
    let controls: OrbitControls;
    let scene: THREE.Scene;
    let requestId: number;

    const mount = mountRef.current;
    if (!mount) return;

    // -------- Scene Setup
    scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      62,
      mount.offsetWidth / mount.offsetHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3.5);

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000010, 0.09); // Nightish bg
    renderer.setSize(mount.offsetWidth, mount.offsetHeight);
    mount.appendChild(renderer.domElement);

    // LIGHTING
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xfff1fa, 2.2);
    dirLight.position.set(3, 4, 6);
    scene.add(dirLight);

    // -------- Globe (PhonG - smooth, with shininess and gradient)
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.MeshPhysicalMaterial({
      color: GLOBE_COLOR,
      roughness: 0.15,
      metalness: 0.43,
      transparent: true,
      transmission: 0.24,
      clearcoat: 0.58,
      clearcoatRoughness: 0.2,
      sheen: 0.4,
      sheenColor: new THREE.Color("#e0aaff"),
      iridescence: 0.17,
      iridescenceIOR: 1.34,
      reflectivity: 0.56,
    });
    globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // -------- Add Glow/Atmosphere
    const atmGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const atmMaterial = new THREE.MeshBasicMaterial({
      color: ATMOS_COLOR,
      transparent: true,
      opacity: 0.21,
      side: THREE.BackSide,
    });
    atm = new THREE.Mesh(atmGeometry, atmMaterial);
    scene.add(atm);

    // -------- Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = [];
    const starColors = [];
    const color = new THREE.Color();

    for (let i = 0; i < STAR_COUNT; i++) {
      // Position stars around a sphere shell for depth.
      const r = THREE.MathUtils.randFloat(7, 17);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      starPositions.push(x, y, z);

      // Soft white, some variants
      color.setHSL(0.7 + (Math.random() * 0.2), 0.7, 0.95 - Math.random() * 0.09);
      starColors.push(color.r, color.g, color.b);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(starColors, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.07,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // -------- OrbitControls for drag/rotate interaction
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = 2;
    controls.maxDistance = 4.6;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.9; // slow, smooth

    // -------- Animate
    const animate = () => {
      controls.update();

      // Animate stars for subtle orbital feel
      const time = Date.now() * 0.00003;
      if (stars) {
        stars.rotation.y += 0.0009;
        stars.rotation.x = Math.sin(time) * 0.03;
      }
      // Subtle atmosphere glow pulsing
      if (atmMaterial) {
        atmMaterial.opacity = 0.19 + Math.abs(Math.sin(time * 5)) * 0.06;
      }
      // Globe slow self-rotate if not being interacted with
      if (!controls.isDragging && !controls.mouseButtons.LEFT) {
        globe.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
      requestId = requestAnimationFrame(animate);
    };
    animate();

    // -------- Responsive
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
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      controls.dispose?.();
      // Cleanup geometry/materials
      globe.geometry.dispose();
      globe.material.dispose();
      atm.geometry.dispose();
      atm.material.dispose();
      stars.geometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-label="Interactive Modern 3D Globe"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeGlobe;
