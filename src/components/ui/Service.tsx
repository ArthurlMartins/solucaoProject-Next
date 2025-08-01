

import Icon from '@mdi/react';
import { mdiCheckCircle  } from '@mdi/js';

export default function Service({title, desc, icon}: any) {
    return(
        <div className="w-full md:w-[250px] md:h-[275px] grid content-between gap-y-8 bg-white text-black p-6 rounded-xl shadow-sm">
            <div>
                <div className="p-3 mb-1 w-[50px] bg-gray-300 flex rounded-xl">
                    <Icon path={icon}
                        title="User Profile"
                        size={1}
                        color="black"
                    />
                </div>
                <div className="font-bold">
                    <p>{title}</p>
                </div>
                <div className="text-sm">
                     <p className="flex items-center">
                        <span className="text-amber-400 mr-1">
                        <Icon path={mdiCheckCircle } title="User Profile" size={0.5}/>
                        </span>
                        {desc}
                    </p>
                </div>
            </div>

            <div>
                <button
                className="w-full py-1 font-bold text-white bg-gray-800 rounded-lg shadow-sm hover:bg-amber-400 active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-100 ease-in-out"
                > Saiba mais </button>
            </div>   
        </div>
    )
}