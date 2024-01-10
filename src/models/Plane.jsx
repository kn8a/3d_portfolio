import { useAnimations, useGLTF } from '@react-three/drei'
import planeModel from '../assets/3d/plane.glb'
import { useEffect, useRef } from 'react'

const Plane = ({isRotating, ...props}) => {
    const ref = useRef()
  const {scene, animations} = useGLTF(planeModel)
  const {actions} = useAnimations(animations,ref)

  useEffect(()=> {
    // if (isRotating) {
        actions['Take 001'].play()
    // } else {
    //     actions['Take 001'].stop()
    // }
  },[])
    return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} ></primitive>
    </mesh>
  )
}

export default Plane