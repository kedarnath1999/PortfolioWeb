import React,{useState,useRef,Suspense} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { Points,PointMaterial,Preload } from '@react-three/drei'
import * as random from 'maath/random'


const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000),{radius:1.2})

  useFrame((state,delta) => {
    ref.current.rotation.x-= delta/10;
    ref.current.rotation.y -= delta/10;
  })
  return (
    <group rotation={[0,0,Math.PI/4]}>
      <Points ref={ref} positions={sphere} Stride={3} frustumCulled {...props}>
         <PointMaterial
          color="#f272c8"
          size={0.002}
         />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas