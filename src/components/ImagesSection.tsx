import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ImagesSection() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
    };

    return(
        <>
            <div className="w-full">
                <div className="container mt-[120px] text-center mb-[120px] text-black pt-2 pb-2">

                    <div className="flex flex-col md:flex-row mb-[30px] justify-center items-center">
                        <div className="max-w-[300px] md:mr-6 space-y-[30px] order-2 md:order-1">
                            <h2 className="font-bold text-5xl">Serviços de qualidade</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo velit impedit quas adipisci! Beatae vel laboriosam culpa, deserunt harum exercitationem libero voluptas perspiciatis.</p>
                        </div>
                        
                        <motion.div
                            ref={ref1}
                            initial="hidden"
                            animate={isInView1 ? "visible" : "hidden"}
                            variants={imageVariants}
                            className="order-1 md:order-2 mb-6 md:mb-0"
                        >
                            <Image
                                src="/images/pintorImage.jpg"
                                alt="Uma imagem de um homem pintando uma parede branca"
                                width={200}
                                height={100}
                                className="rounded-xl"
                            />
                        </motion.div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row mb-[60px] justify-center items-center">
                        <motion.div
                            ref={ref2}
                            initial="hidden"
                            animate={isInView2 ? "visible" : "hidden"}
                            variants={imageVariants}
                            className="order-1 mb-6 md:mb-0"
                        >
                            <Image
                                src="/images/faxineiroImage.jpg"
                                alt="Um homem limpando o chão com um aspirador de pó"
                                width={200}
                                height={100}
                                className="rounded-xl"
                            />
                        </motion.div>
                        <div className="max-w-[300px] md:ml-6 space-y-[30px] order-2">
                            <h2 className="font-bold text-5xl">Do seu jeito!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo velit impedit quas adipisci! Beatae vel laboriosam culpa, deserunt harum exercitationem libero voluptas perspiciatis.</p>
                        </div> 
                    </div>    
                </div>
            </div>
        </>
    )
}