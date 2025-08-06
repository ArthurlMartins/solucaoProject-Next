

import Icon from '@mdi/react';
import { mdiCheckCircle  } from '@mdi/js';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Service({title, desc, icon, index }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // `once: true` anima apenas na primeira vez

    // Variações de animação
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1, // Adiciona um atraso para cada item
        },
        },
    };


    return(
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="bg-white p-6 shadow-md rounded-lg transform hover:scale-105 transition-transform"
    >
        <div className="w-full md:h-[350px] grid content-between bg-white text-black p-6 rounded-xl">
            <div>
                <div className="flex justify-center items-center w-[60px] h-[60px] bg-gray-300 flex rounded-xl">
                    <Icon path={icon}
                        title="User Profile"
                        size={1.5}
                        color="black"
                    />
                </div>
                <div className="font-bold pt-1 pb-1">
                    <h3>{title}</h3>
                    
                </div>
                <div className="text-sm">
                     <p className="flex items-center pb-6">     
                        {desc}
                        {/* <span className="text-amber-400 mr-1">
                        <Icon path={mdiCheckCircle} title={`Ícone de verificação para ${title}`} size={0.5}/>
                        </span> */}
                     </p>
                </div>
            </div>

            <div className=''>
                <a href={`https://wa.me/555183251697?text=Tudo bem? Vim pelo site e gostaria de saber mais sobre o serviço: ${title} que vocês oferecem.`}
                className="w-full py-3 px-6 mt-3 font-bold text-white bg-black rounded-lg shadow-sm hover:bg-amber-400 hover:text-black active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-100 ease-in-out"
                role="button"
                >
                Saiba mais 
                </a>
            </div>   
        </div>
        </motion.div>
    )
}