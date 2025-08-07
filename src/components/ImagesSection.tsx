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
                <div className="container pt-[120px] pb-[0px] text-black pt-2 pb-2">

                    <div className="flex flex-col md:flex-row mb-[30px] justify-center items-center">
                        <div className="max-w-[300px] md:mr-6 space-y-[30px] order-2 md:order-1">
                            <h2 className="font-bold text-5xl">Serviços de qualidade</h2>
                            <p>A Empresa Solução se dedica a oferecer serviços de facilities com o mais alto padrão de qualidade. Nossa equipe de profissionais é <span className="font-bold">treinada e certificada</span> para garantir que cada tarefa, desde a manutenção predial até a limpeza detalhada, seja executada com excelência. Confie em quem entende do assunto para manter seu ambiente sempre impecável.</p>
                        </div>
                        
                        <motion.div
                            ref={ref1}
                            initial="hidden"
                            animate={isInView1 ? "visible" : "hidden"}
                            variants={imageVariants}
                            className="order-1 md:order-2 mb-6 md:mb-0"
                        >
                            <Image
                                src="/images/pintorImage.webp"
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
                                src="/images/limpezaImage2.webp"
                                alt="Um homem limpando o chão com um aspirador de pó"
                                width={200}
                                height={100}
                                className="rounded-xl"
                            />
                        </motion.div>
                        <div className="max-w-[300px] md:ml-6 space-y-[30px] order-2">
                            <h2 className="font-bold text-5xl">Do seu jeito!</h2>
                            <p>Entendemos que cada cliente tem uma necessidade única. Por isso, nossos serviços de facilities são totalmente personalizáveis, se adaptando ao tamanho, à rotina e ao orçamento do seu negócio. Seja em Porto Alegre ou em qualquer cidade da lugar do <span className="font-bold">Rio Grande do Sul</span>, estamos prontos para oferecer soluções sob medida que simplificam a sua gestão e entregam exatamente o que você precisa.</p>
                        </div> 
                    </div>    
                </div>
            </div>
        </>
    )
}