import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";


const Target = (props) => {
    const tagetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(()=>{
        gsap.to(tagetRef.current.position,{
            y: tagetRef.current.position.y + 0.2,
            duration : 1.5,
            repeat:-1,
            yoyo : true
        })
    });


  return (
    <mesh {...props} ref={tagetRef}>
        <primitive object={scene}/> 
    </mesh>
  )
}

export default Target