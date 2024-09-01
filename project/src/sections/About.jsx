import React,{useRef} from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
const AnimatedModel = ({ url }) => {
  const { scene, animations } = useGLTF("src/assets/book.glb");
  
  const { actions } = useAnimations(animations, scene);
  React.useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);
  scene.position.set(-1, 1, 1);
  scene.rotation.set(0.5, 1, 0);
  return <primitive object={scene} />;
};
const RotatingModel = ({ url }) => {
  const modelRef = useRef();
  const { scene } = useGLTF("src/assets/mobile.glb");
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};



const About = () => {
  return (
    <div className="bg-gradient-to-b from-customBlue4 to-white overflow-hidden">
      <div className="flex flex-1">
      <Canvas
    style={{ height: "800px",
      width: "800px"
    }} 
    camera={{ position: [0, 0, 5] }} 
  >
    <directionalLight position={[0, 0, 5]} intensity={1} />
    <AnimatedModel url="src/assets/book.glb" />
  </Canvas>
      <div className="flex-1 flex items-center justify-center mr-20 my-4">
        <h1 className="border-8 border-white rounded-lg p-4 bg-gradient-to-r from-customBlue4 to-customBlue2 text-xl  font-extralight">A short attention span refers to the difficulty in maintaining focus on a task or activity for an extended period. This can lead to distractions, reduced productivity, and difficulty completing tasks. It often results from overstimulation, stress, or habitual multitasking and can be exacerbated by digital media and constant notifications.</h1>
      </div>
      </div>
      <h1 className="border-8 border-white rounded-lg p-4 bg-gradient-to-r from-customBlue4 to-customBlue2 text-xl  font-extralight mr-20 ml-20">A short attention span refers to the difficulty in maintaining focus on a task or activity for an extended period. This can lead to distractions, reduced productivity, and difficulty completing tasks. It often results from overstimulation, stress, or habitual multitasking and can be exacerbated by digital media and constant notifications.</h1>
      <div className="flex flex-1">
      <div className="flex-1 flex items-center justify-center ml-20 my-4">
        <h1 className="border-8 border-white rounded-lg p-4 bg-gradient-to-r from-customBlue4 to-customBlue2 text-xl  font-extralight">A short attention span refers to the difficulty in maintaining focus on a task or activity for an extended period. This can lead to distractions, reduced productivity, and difficulty completing tasks. It often results from overstimulation, stress, or habitual multitasking and can be exacerbated by digital media and constant notifications.</h1>
        
      </div>

      <Canvas
    style={{ height: "900px",
      width: "800px"
    }} 
    camera={{ position: [0, 0, 5] }} 
  >
    <directionalLight position={[0, 0, 5]} intensity={1} />
    <RotatingModel url="src/assets/mobile.glb" />
  </Canvas>
  
      </div>
      <div className="flex justify-center mx-0">
      </div>
    </div>
  );
};
export default About;