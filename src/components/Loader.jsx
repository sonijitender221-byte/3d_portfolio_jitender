
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-2 border-blue-500/20 border-t-blue-500" />
      </div>
    </Html>
  );
};

export default Loader;
