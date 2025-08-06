import Image from "next/image"
import { motion, useInView  } from "framer-motion"
import { useRef } from "react";

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
                          src="/images/logoOriginal.png"
                          alt="Logo da empresa de facilities, em fundo branco"
                          width={200}
                          height={300}
                          className="rounded-xl"
                        />
                        <div className="flex space-x-5">
                            <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                            <a href="https://wa.me/555183251697" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></a>
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