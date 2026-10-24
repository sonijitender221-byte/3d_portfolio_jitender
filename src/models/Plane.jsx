import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating = false, ...props }) => {
  const group = useRef(null);
  const { scene } = useGLTF(planeScene);
  const baseY = useRef(0);

  useFrame(({ clock }) => {
    if (!group.current) return;
    if (baseY.current === 0) baseY.current = group.current.position.y;
    if (!isRotating) {
      group.current.position.y = baseY.current + Math.sin(clock.elapsedTime * 1.4) * 0.08;
    }
  });

  return <group ref={group} {...props}><primitive object={scene} /></group>;
};

useGLTF.preload(planeScene);
export default Plane;
