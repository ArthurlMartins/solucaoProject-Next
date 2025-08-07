

import Icon from '@mdi/react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceProps {
  title: string;
  desc: string;
  icon: string;
  index: number;
}

export default function Service({title, desc, icon, index }: ServiceProps) {
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
  <div className="w-full h-full flex flex-col justify-between bg-white text-black p-4 md:p-6 rounded-xl">
    <div>
      <div className="flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-xl">
        <Icon path={icon}
          title="User Profile"
          size={1.5}
          color="black"
        />
      </div>
      <div className="font-bold pt-2 pb-1 text-lg ">
        <h3>{title}</h3>
      </div>
      <div className="text-sm">
        <p className="flex items-center pb-6">
          {desc}
        </p>
      </div>
    </div>
    <div className='mt-auto pt-4'>
      <a href={`https://wa.me/555183251697?text=Tudo bem? Vim pelo site e gostaria de saber mais sobre o serviço: ${title} que vocês oferecem.`}
        className="w-full py-2 px-4 md:py-3 md:px-6 font-bold text-white bg-black rounded-lg shadow-sm hover:bg-amber-400 hover:text-black active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-100 ease-in-out"
        role="button"
      >
        Saiba mais
      </a>
    </div>
  </div>
</motion.div>
    )
}