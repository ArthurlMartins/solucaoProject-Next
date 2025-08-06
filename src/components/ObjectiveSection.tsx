 "use client"

import Badge from "./ui/Badge";
import { ParallaxBanner } from "react-scroll-parallax";
import { useState, useEffect } from "react";

export default function ObjectiveSection() {
    const [backgroundImage, setBackgroundImage] = useState("/images/objectiveImage.webp"); // Imagem para desktop por padrão

  return (

    <ParallaxBanner
      id="objective"
      layers={[
        { image: backgroundImage, speed: -75 },
        {
          children: (
            <div className="w-full">
              <div className="container">
                <div className="text-slate-300 text-center flex text-black md:space-x-[100px] justify-center mt-[120px] mb-[120px]">
                  <div>
                    <Badge text="Qualidade acima de tudo" />
                    <h2 className="text-5xl font-bold mb-8">Nosso objetivo</h2>
                    <p className="text-base max-w-[1000px] mb-4">
                        Nosso objetivo é facilitar a rotina dos administradores,
                        reduzindo preocupações e proporcionando mais
                        tranquilidade na gestão condominial.
                    </p>
                    <p className="text-base max-w-[1000px]">
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