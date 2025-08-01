import Image from "next/image"

export default function HeroSection() {
    return(
        <div className="w-full">
            <div className="container mt-[120px] mb-[120px]">
                <div className=" items-center md:flex text-black md:space-x-[100px] justify-center">
                    <div className="max-w-2xs space-y-4">
                        <p className="text-3xl font-bold">Você <span className="text-amber-400">pode</span><br />confiar.</p>
                        <p className="text-xl">Com a nossa empresa, você resolve mais e se incomoda menos.</p>
                        <div className="flex space-x-5">
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></a>
                        </div>
                        
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/images/solucaoLogo.png"
                            alt="Uma visão aproximada do produto incrível"
                            width={320} // Obrigatório para imagens locais (a menos que use 'fill')
                            height={320} // Obrigatório para imagens locais (a menos que use 'fill')
                            priority // Se esta for uma imagem principal no topo da página
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}