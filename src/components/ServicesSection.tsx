'use client'; 

import dynamic from 'next/dynamic'; 

import Badge from "./ui/Badge";
import { mdiVacuumOutline, mdiDoorClosedLock, mdiShovel, mdiTools, mdiOfficeBuildingOutline, mdiBugOutline, mdiWaterPump, mdiBrushVariant   } from '@mdi/js';


const DynamicService = dynamic(() => import('./ui/Service'), {
  ssr: false,
  loading: () => <div className="w-[250px] h-[275px] bg-white text-black p-6 rounded-xl shadow-sm flex items-center justify-center">Carregando Serviço...</div>, // Opcional: um placeholder enquanto carrega
});

export default function ServicesSection() {
    return(
        <>
            <div className="w-full">
                <div className="container mt-[120px] mb-[120px]">
                    <div className="items-center text-black flex text-center text-black justify-center mb-[30px]">
                        <div>
                            <Badge text="Nossos serviços" />
                            <p className="text-2xl font-bold mb-4">Tudo o que você precisa</p>
                            <p className="text-lg text-slate-600 max-w-[400px]">Trabalhamos para oferecer o melhor custo-benefício aos moradores</p>   
                        </div>
                    </div>
                    <div className="justify-center flex">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-[30px] gap-y-[30px]">
                            {/* Use o componente DynamicService aqui */}
                            <DynamicService 
                            icon={mdiVacuumOutline} 
                            title="Limpeza e conservação predial" 
                            desc="Limpeza e conservação predial Limpeza e conservação predial"
                            />
                            <DynamicService 
                            icon={mdiDoorClosedLock } 
                            title="Portaria e Guarda Patrimonial" 
                            desc="Portaria e Guarda Patrimonial Portaria e Guarda Patrimonial"
                            />
                            <DynamicService 
                            icon={mdiShovel} 
                            title="Jardinagem e Paisagismo" 
                            desc="Jardinagem e Paisagismo Jardinagem e Paisagismo"
                            />
                            <DynamicService 
                            icon={mdiTools } 
                            title="Manutenções Preventivas" 
                            desc="Manutenções Preventivas Manutenções Preventivas"
                            />

                            <DynamicService 
                            icon={mdiOfficeBuildingOutline  } 
                            title="Trabalhos em altura com NR35" 
                            desc="Trabalhos em altura com NR35"
                            />
                            <DynamicService 
                            icon={mdiBugOutline } 
                            title="Imunização e controle de pragas urbanas" 
                            desc="Imunização e controle de pragas urbanas"
                            />
                            <DynamicService 
                            icon={mdiWaterPump  } 
                            title="Limpeza de caixa d’água" 
                            desc="Limpeza de caixa d’água"
                            />
                            <DynamicService 
                            icon={mdiBrushVariant  } 
                            title="Serviços de pintura" 
                            desc="Serviços de pintura"
                            /> 
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}