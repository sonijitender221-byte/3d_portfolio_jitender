import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating = false, setIsRotating, setCurrentStage, ...props }) => {
  const group = useRef(null);
  const { scene } = useGLTF(islandScene);
  const pointerDownX = useRef(0);

  useFrame((_, delta) => {
    if (group.current && isRotating) {
      group.current.rotation.y -= delta * 0.12;
    }
  });

  const handlePointerDown = (event) => {
    event.stopPropagation();
    pointerDownX.current = event.clientX;
    setIsRotating?.(true);
  };
  const handlePointerUp = (event) => {
    event.stopPropagation();
    setIsRotating?.(false);
    if (Math.abs(event.clientX - pointerDownX.current) < 5) {
      setCurrentStage?.((stage) => (stage % 4) + 1);
    }
  };

  return (
    <group ref={group} {...props} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerLeave={() => setIsRotating?.(false)}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(islandScene);
export default Island;
