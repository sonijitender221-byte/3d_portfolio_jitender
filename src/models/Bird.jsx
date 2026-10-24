import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import birdScene from "../assets/3d/bird.glb";

const Bird = (props) => {
  const group = useRef(null);
  const { scene } = useGLTF(birdScene);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.position.y = 2.2 + Math.sin(clock.elapsedTime * 1.4) * 0.25;
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, Math.sin(clock.elapsedTime * 0.3) * 0.25, 0.04);
  });

  return <group ref={group} {...props}><primitive object={scene} /></group>;
};

useGLTF.preload(birdScene);
export default Bird;
