import { WhatsappIcon } from "hugeicons-react"
import { Mail01Icon } from "hugeicons-react"
import { WHATSAPP_FORMATTED, WHATSAPP_RAW, CONTACT_EMAIL } from '@/constants';

export default function UpperHeader() {
    return(
        <>
            <div className="w-full md:bg-black bg-black">
                <div className="container gap-x-4 justify-start md:justify-center text-white pt-2 flex pb-2 text-center">
                    <div className="flex gap-2">
                        <p className="text-xs"><WhatsappIcon size={14}/></p>
                        <a href={`https://wa.me/${WHATSAPP_RAW}`} className="text-xs">{WHATSAPP_FORMATTED}</a>
                    </div>
                    <div className="flex gap-2 gap-2">
                        <p className="text-xs"><Mail01Icon size={14}/></p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs">{CONTACT_EMAIL}</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}