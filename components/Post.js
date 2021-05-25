import React, { Component } from 'react'
import Identicon from 'identicon.js';
import Image from 'next/image'
import {CurrencyDollarIcon} from "@heroicons/react/solid";
import {HeartIcon} from "@heroicons/react/outline";

export class Post extends Component {
    render() {
        return (
            <div className="flex flex-col">
                <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
                    <div className="flex items-center space-x-2">
                        <img 
                            className="rounded-full"
                            src={`data:image/png;base64,${new Identicon(this.props.author, 30).toString()}`}
                            width={40}
                            height={40}
                            alt=""
                        />
                        <div>
                            <p className="hidden md:inline-flex text-sm">{this.props.author}</p>

                        </div>
                    </div>

                    <p className="pt-4">{this.props.description}</p>
                </div>
                <div className="relative h-56 md:h-96 bg-white">
                    <Image 
                        src={`https://ipfs.infura.io/ipfs/${this.props.hash}`}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>

                <div className="flex justify-between items-center rounded-b-2xl bg-white
                shadow-md text-gray-600 border-t
                ">
                    <div className="flex inputIcon rounded-none rounded-bl-2xl">
                    <CurrencyDollarIcon className='h-6'/>
                <p className="text-xs sm:text-base mx-2"> 
                  {window.web3.utils.fromWei(this.props.tipAmount.toString(), 'Ether')} ETH
               </p>
               </div>
                    <div className="inputIcon rounded-none rounded-br-2xl">
                    <HeartIcon className='h-6'/>
                        <button
                          className=" m-2 rounded p-1 hover:bg-gray-300"
                          name={this.props.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
