'use client'; 

import dynamic from 'next/dynamic'; 

import Badge from "./ui/Badge";
import { mdiVacuumOutline, mdiDoorClosedLock, mdiShovel, mdiTools, mdiOfficeBuildingOutline, mdiBugOutline, mdiWaterPump, mdiBrushVariant   } from '@mdi/js';


const DynamicService = dynamic(() => import('./ui/Service'), {
    
  ssr: false,
  loading: () => <div className="w-[250px] h-[275px] bg-white text-black p-6 rounded-xl shadow-sm flex items-center justify-center">Carregando Serviço...</div>, // Opcional: um placeholder enquanto carrega
});

export default function ServicesSection() {

    const servicesData = [
    { icon: mdiVacuumOutline, title: "Limpeza e conservação predial", desc: "Garantimos a limpeza completa e a manutenção diária de condomínios, utilizando produtos de alta qualidade e profissionais treinados." },
    { icon: mdiDoorClosedLock, title: "Portaria e Guarda Patrimonial", desc: "Nossos profissionais de portaria e segurança patrimonial garantem o controle de acesso e a vigilância 24 horas, proporcionando mais tranquilidade e proteção para seu condomínio ou empresa." },
    { icon: mdiShovel, title: "Jardinagem e Paisagismo", desc: "Cuidamos da beleza e da saúde do seu jardim. Nossos serviços de jardinagem e paisagismo incluem poda, manutenção de canteiros e criação de áreas verdes planejadas para valorizar seu espaço." },
    { icon: mdiTools, title: "Manutenções Preventivas", desc: "Evite problemas e gastos inesperados. Realizamos manutenções preventivas em instalações elétricas, hidráulicas e estruturais, garantindo o bom funcionamento e a longevidade do seu patrimônio." },
    { icon: mdiOfficeBuildingOutline, title: "Trabalhos em altura com NR35", desc: "Nossa equipe especializada realiza trabalhos em altura com total segurança, seguindo as normas da NR35. Perfeito para limpeza de fachadas, reparos e instalação de equipamentos em locais elevados." },
    { icon: mdiBugOutline, title: "Imunização e controle de pragas urbanas", desc: "Oferecemos soluções eficazes e seguras para o controle de pragas como insetos e roedores. Nossos serviços de imunização protegem seu ambiente, mantendo-o livre de pragas." },
    { icon: mdiWaterPump, title: "Limpeza de caixa d’água", desc: "Garantimos a qualidade da água do seu prédio. Realizamos a limpeza e a desinfecção de caixas d'água de acordo com as normas sanitárias, assegurando a saúde e o bem-estar de todos." },
    { icon: mdiBrushVariant, title: "Serviços de pintura", desc: "Renove o visual do seu espaço com nossos serviços de pintura. Usamos tintas de alta qualidade e técnicas profissionais para garantir um acabamento perfeito e durável em paredes internas e externas." },
    ];

    return(
        <>
            <div id='services' className="w-full">
                <div className="container pt-[120px] pb-[120px]">
                    <div className="items-center text-black flex text-center text-black justify-center mb-[30px]">
                        <div>
                            <Badge text="Tudo o que você precisa" />
                            <h2 className="text-5xl font-bold mb-4">Nossos serviços</h2>
                            <p className="text-lg text-slate-600 max-w-[400px]">Oferecemos uma variedade de serviços de facilities</p>
                        </div>
                    </div>
                    <div className="justify-center flex">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-[30px] gap-y-[30px]">
                        {servicesData.map((service, index) => (
                            <DynamicService
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            desc={service.desc}
                            index={index} // Aqui, o 'index' é passado como uma prop
                            />
                        ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}