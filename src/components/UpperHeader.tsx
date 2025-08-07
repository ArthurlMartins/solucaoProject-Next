import { WhatsappIcon } from "hugeicons-react"
import { Mail01Icon } from "hugeicons-react"

export default function UpperHeader() {
    return(
        <>
            <div className="w-full md:bg-black bg-black">
                <div className="container gap-x-4 justify-start md:justify-center text-white pt-2 flex pb-2 text-center">
                    <div className="flex gap-2">
                        <p className="text-xs"><WhatsappIcon size={14}/></p>
                        <a href="https://wa.me/555183251697" className="text-xs">(51) 98310-8819</a>
                    </div>
                    <div className="flex gap-2 gap-2">
                        <p className="text-xs"><Mail01Icon size={14}/></p>
                        <a href="mailto:aempresasolucao@gmail.com" className="text-xs">aempresasolucao@gmail.com</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}