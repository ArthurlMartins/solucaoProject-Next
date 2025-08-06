 "use client"

import Badge from "./ui/Badge";
import { ParallaxBanner } from "react-scroll-parallax";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function ObjectiveSection() {
    const [backgroundImage, setBackgroundImage] = useState("/images/objectiveImage.webp"); // Imagem para desktop por padrão

  return (

    <ParallaxBanner
      id="about"
      layers={[
        { image: backgroundImage, speed: -75 },
        {
          children: (
            <div className="w-full">
              <div className="container">
                <div className="text-slate-300 md:flex text-center text-black md:space-x-[100px] space-y-[100px] justify-center mt-[120px] mb-[120px]">
                <div>
                    <Image
                        src="/images/logoOriginal.jpeg"
                        alt="Foto do meu produto"
                        className="rounded-xl"
                        width={400}
                        height={300}
                    />
                  </div>
                  <div>
                    {/* <Badge text="Nosso objetivo" /> */}
                    <p className="text-5xl font-bold mb-8">Quem somos?</p>
                    <p className="text-base max-w-[1000px]">
                      A Solução é uma empresa especializada em facilities, oferecendo suporte essencial para a manutenção e conservação de ambientes corporativos, residenciais e institucionais. Com mais de 15 anos de experiência, garantimos excelência operacional por meio de uma equipe qualificada e de um rigoroso acompanhamento dos serviços prestados.
                      <br /><br />
                      Nosso compromisso é proporcionar ambientes mais
                      organizados, seguros e funcionais, agregando valor e
                      eficiência ao dia a dia dos nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ]}
      className="h-[900px] lg:h-[500px]" 
    />

  );

}