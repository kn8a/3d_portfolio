import { useGLTF } from '@react-three/drei'
import planeModel from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {
  const {scene, animation} = useGLTF(planeModel)
    return (
    <mesh {...props}>
        <primitive object={scene} ></primitive>
    </mesh>
  )
}

export default Plane