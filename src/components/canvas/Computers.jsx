import { Suspense,useEffect,useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
 
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1.2} 
        groundColor={'black'} 
      /> 
      <spotLight
        position={[-20,80,10]}
        angle={12}
        penumbra={1} 
        intensity={10}
        shadow-mapSize={1024}
      />

      <pointLight intensity={5}/>
      <primitive
      object={computer.scene} scale={isMobile?0.7:0.75}
        position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile ,setIsMobile ] = useState(false);

  useEffect(()=>{
    //add a listner for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');

    //set the initial value of the isMobile state variable 
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle the change in media query
    const handler = e => setIsMobile(e.matches);

    //add the callback function to handle the change in media query 
    mediaQuery.addEventListener('change',handler);

    return () => mediaQuery.removeEventListener('change',handler);

  },[]);


  return (
    <Canvas frameloop='demand' shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>

    </Canvas>
  );
};

export default ComputersCanvas;