import { InstagramIcon } from "hugeicons-react"
import { WhatsappIcon } from "hugeicons-react"

export default function Footer() {
    return(
        <>
            <footer id="footer" className="w-full bg-black">
                <div className="container pt-[60px] pb-[60px]">
                    <div className="grid md:grid-cols-2 text-white place-content-between">

                        <div className="space-y-12">
                            <div>
                                <p className="text-2xl font-bold">Empresa Solução -</p>
                                <p className="text-2xl font-bold">Prestadora de Serviço</p>
                                <p className="text-sm text-gray-400">FACILITIES</p>
                                <p className="text-sm text-gray-400">10.997.687/0001-35</p>
                                <p className="text-sm text-gray-400">CRISTINA DOS SANTOS LOPES ROSA LTDA</p>
                            </div>
                            <div className="space-y-8">
                                <h2 className="font-bold text-2xl">Contatos</h2>
                                <div className="space-y-2">
                                    <a href="mailto:aempresasolucao@gmail.com" className="text-sm block">aempresasolucao@gmail.com</a>
                                    <a href="tel:+5551984182894" className="text-sm block">+55 51 984182894</a>
                                </div>
                                <div className="flex gap-6">
                                    <a href="https://www.instagram.com/empresasolucao/"><InstagramIcon /></a>
                                    <a href="https://wa.me/555183251697"><WhatsappIcon /></a>
                                </div>  
                            </div>
                                                    
                            
                        </div>
                        
                        <div className="grid lg:grid-cols-2 mt-[200px] md:mt-0">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Locais e contatos de referência</h3>
                                <ul className="flex-col space-y-6 max-w-[250px]">
                                    <li className="text-xs">
                                        <h4 className=" font-bold">Templo de Porto Alegre</h4>
                                        <p><a href="tel:+5551993165344">(51) 99316-5344 Lidson</a> (Engenharia)</p>
                                        <a href="mailto:bassanils@churchofjesuschrist.org">bassanils@churchofjesuschrist.org</a>
                                    </li>
                                    <li className="text-xs">
                                        <h4 className=" font-bold">Associação Brasileira A Igreja de Jesus Cristodos S.U.D – Regiãode Porto Alegre</h4>
                                        <p><a href="tel:+5551981185175">(51) 98118-5175</a> Alisson (Supervisor)</p>
                                        <a href="mailto:Alisson.Medeiros@churchofjesuschrist.org">Alisson.Medeiros@churchofjesuschrist.org</a>
                                    </li>
                                    <li className="text-xs">
                                        <h4 className=" font-bold">Condominio spazio Porto Cruzeiro</h4>
                                        <p><a href="+5551997525010">(51) 99752-5010</a> Paula (Síndico)</p>
                                        <a href="mailto:paula@portoeoliveira.com.br">paula@portoeoliveira.com.br</a>
                                    </li>
                                    <li className="text-xs">
                                        <h4 className=" font-bold">Escolas Wizard</h4>
                                        <p><a href="tel:+5551996627618">(51) 99662-7618</a> Walter (Diretor)</p>
                                        <a href="mailto:wizard@wizardsantacruz.com">wizard@wizardsantacruz.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </footer>
        </>
    )
}