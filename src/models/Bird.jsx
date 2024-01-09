import { useAnimations, useGLTF } from "@react-three/drei"
import birdModel from "../assets/3d/bird.glb"
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

const Bird = () => {
  const birdRef = useRef()
  const { scene, animations } = useGLTF(birdModel)
  const { actions } = useAnimations(animations, birdRef)
  useEffect(()=> {
    actions['Take 001'].play()
  },[])
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene}></primitive>
    </mesh>
  )
}

export default Bird
