export default function Badge({text}: any) {
    return(
        <div className="flex items-center text-black justify-center">
             <div className="bg-amber-400 py-1 px-4 text-xs rounded-3xl mb-3">
                <p>{text}</p>
            </div>
        </div>
    )
}