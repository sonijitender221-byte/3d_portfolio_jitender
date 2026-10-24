import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import foxScene from "../assets/3d/fox.glb";

const Fox = (props) => {
  const group = useRef(null);
  const { scene } = useGLTF(foxScene);
  useFrame(({ clock }) => {
    if (group.current) group.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.04;
  });
  return <group ref={group} {...props}><primitive object={scene} /></group>;
};

useGLTF.preload(foxScene);
export default Fox;
