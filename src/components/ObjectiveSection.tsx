 "use client"

import Badge from "./ui/Badge";
import { ParallaxBanner } from "react-scroll-parallax";
import { useState, useEffect } from "react";

export default function ObjectiveSection() {
    const [backgroundImage, setBackgroundImage] = useState("/images/objectiveImage.webp"); // Imagem para desktop por padrão

  return (

    <ParallaxBanner
      layers={[
        { image: backgroundImage, speed: -75 },
        {
          children: (
            <div className="w-full">
              <div className="container">
                <div className="text-slate-300 text-center flex text-black md:space-x-[100px] justify-center mt-[120px] mb-[120px]">
                  <div>
                    <Badge text="Nosso objetivo" />
                    <p className="text-2xl font-bold mb-8">Qualidade acima de tudo</p>
                    <p className="text-base max-w-[1000px]">
                      Nosso objetivo é facilitar a rotina dos administradores,
                      reduzindo preocupações e proporcionando mais
                      tranquilidade na gestão condominial.
                      <br />
                      Trabalhamos para oferecer o melhor custo-benefício aos
                      moradores, aliando qualidade, responsabilidade e
                      eficiência em cada etapa dos nossos serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ]}
      className="h-[500px]" 
    />

  );

}