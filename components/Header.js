import React from 'react'
import Image from "next/image"
import Identicon from 'identicon.js';
import {
    BellIcon,
    ChatIcon,
    ChevronDonwIcon,
    HomeIcon,
    UserGroupIcon,
    PlusCircleIcon,
    CameraIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';
function Header({account}) {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-1 lg:px-5 shadow-md'>

            <div className="flex items-center cursor-pointer">
                <Image src="data:image/png;base64,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"
                    width={40}
                    height={40}
                    layout="fixed"
                />

            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className='h-6 text-gray-600'/>
                <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Insta Dapp"/>
            </div>
            </div>

            <div className="flex justify-center flex-grow">

                <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={PlusCircleIcon}/>
                <HeaderIcon Icon={CameraIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
                </div>

            </div>


            <div className="flex item-center sm:space-x-2 justify-end">
                <p className="hidden md:inline-flex whitespace-nowrap text-xs text-purple-700">
                    {account}
                </p>
                { account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                style={{borderRadius:'50%'}}
                src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
              />
              :<BellIcon className="icon"/>
            }
                
            </div>
        </div>
    )
}

export default Header
