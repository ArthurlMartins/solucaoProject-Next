import Image from "next/image"
import { motion, useInView  } from "framer-motion"
import { useRef } from "react";
import { InstagramIcon } from "hugeicons-react";
import { WhatsappIcon } from "hugeicons-react";

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return(
        <div className="w-full" id="hero">
            <div className="container mt-[120px] mb-[120px]">
                <div className="items-center md:flex text-black md:space-x-[100px] justify-center">
                    <div className="max-w-2xs space-y-4">     
                        <h1 className="text-6xl font-bold">Você <span className="text-amber-400">pode</span><br />confiar.</h1>
                        <p className="text-base">Com a nossa empresa de <span className="font-bold">facilities</span>, você <span className="text-amber-400 font-bold">resolve mais</span> e se incomoda menos.</p>
                            <Image
                                src="/images/logoOriginal.webp"
                                alt="Logo da empresa de facilities, em fundo branco"
                                width={200}
                                height={300}
                                className="rounded-xl"
                            />                        
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/empresasolucao/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                            <a href="https://wa.me/555183251697" target="_blank" rel="noopener noreferrer"><WhatsappIcon /></a>
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                            src="/images/empregadaImage4.webp"
                            alt="Uma funcionária de facilities limpando uma janela com um produto"
                            width={320}
                            height={400}
                            priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}