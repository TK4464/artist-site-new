import React from 'react'
import { PresentationControls, useGLTF, Float, ContactShadows, Text, } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Contact3d = () => {


    const macBook = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
    const iphone = useGLTF("public/iphone13promax.glb");
    const model = useGLTF("public/3dk.glb");

    return (
        <div className='mx-auto w-full h-[300px] pb-12' style={{ touchAction: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 57, near: 0.5, far: 2000 }}>
                <color args={["#eee"]} attach="background" />

                <ambientLight />
                <directionalLight intensity={10} position={[0, 2, 0.2]} />
                <PresentationControls global snap={{ mass: 6, tension: 800 }}>
                    <Float rotationIntensity={0.5}>
                        <rectAreaLight
                            color={"#fff"}
                            intensity={"10"}
                            rotation={[0.1, Math.PI, 0]}
                            height={1.7}
                            position={[0, 1, 0]}
                        />
                        <primitive
                            object={macBook.scene}
                            position={[0.5, -1.4, 0.2]}
                            rotation-x={0.2}
                            rotation-y={0}
                            rotation-z={0.1}
                        />

                    </Float>

                    <Float rotationIntensity={0.5}>
                        <rectAreaLight
                            color={"#fff"}
                            intensity={"10"}
                            rotation={[0.1, Math.PI, 0]}
                            width={2.2}
                            height={1.7}
                            position={[0, 1, 0]}
                        />
                        <primitive
                            object={iphone.scene}
                            position={[-2, -0.3, -0.2]}
                            rotation-x={-0.1}
                            rotation-y={-9.4}
                            rotation-z={0.2}
                        />
                    </Float>

                    <Float rotationIntensity={0.5}>
                        <rectAreaLight
                            color={"#fff"}
                            intensity={"10"}
                            rotation={[0.1, Math.PI, 0]}
                            width={2.2}
                            height={1.7}
                            position={[0, 1, 0]}
                        />
                        <primitive
                            object={model.scene}
                            position={[0.4, -0.2, 4.1]}
                            rotation-x={0}
                            rotation-y={0}
                            rotation-z={0.5}
                        />
                    </Float>
                    <Text fontSize={0.45} position={[0, 2.3, -1]} color="#444">
                        NAOTO INTI RAYMI OFFICIAL BLOG
                    </Text>
                </PresentationControls>

                <ContactShadows scale={7} blur={1.2} opacity={0.6} position-x={0} position-y={-1.6} />
            </Canvas>
            <div className='mx-auto text-center bg-[#eee]'>
                <a href='https://ameblo.jp/nananaoto/' target='_blank' rel='noopener noreferrer' className=' sm:hover:opacity-60 duration-500'><p className='inline-block text-center pt-2 pb-7 px-3 hover:opacity-60 duration-500 text-sky-500 text-xs sm:text-sm'>▶︎ ナオト・インティライミ オフィシャルブログ</p></a>
            </div>
        </div>
    )
}

export default Contact3d
