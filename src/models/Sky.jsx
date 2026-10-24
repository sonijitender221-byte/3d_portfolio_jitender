import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating = false, ...props }) => {
  const group = useRef(null);
  const { scene } = useGLTF(skyScene);
  useFrame((_, delta) => {
    if (group.current && isRotating) group.current.rotation.y += delta * 0.12;
  });
  return <group ref={group} {...props}><primitive object={scene} /></group>;
};

useGLTF.preload(skyScene);
export default Sky;
