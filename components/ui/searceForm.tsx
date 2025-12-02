"use client"

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RatingStars from "./stars";
import { useEffect, useState } from "react";

function SearceForm() {
    const [text, setText] = useState("")
    const [searchData, setSearchData] = useState([])

    useEffect(() => {

        const getData = async () => {
            const res = await fetch(`https://dummyjson.com/products/search?q=${text}`)
            const data = await res.json()
            setSearchData(data.products);

        }

        const timer = setTimeout(() => {
            getData()
        }, 3000)


        return () => { clearTimeout(timer) }


    }, [text])

    console.log(searchData);

    return (
        <>

            <div className="flex-1 px-10 ">
                <div className="relative">
                    <div >
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Search by product name"
                            type="text"
                            className="py-1.5 px-3 w-full border-[2.5px]"
                        />

                        <button className="hover:text-primary cursor-pointer">
                            <Search className="opacity-40 absolute top-1/2 -translate-y-1/2 right-3" />
                        </button>
                    </div>
                    {/* All search product */}
                    {text &&
                        <div className="absolute top-full right-0 border w-full ">
                            <div className="h-70 overflow-y-scroll ">
                                <div className="px-4 py-1">
                                    {searchData.length == 0 && <p className="text-center text-2xl mt-10">Data not found</p>}
                                    {searchData.map((item: any) =>
                                        <div key={item.id} className="flex gap-3 items-center p-3 border-b">
                                            <div className="w-20">
                                                <Image
                                                    src={item.images[0]}
                                                    alt="Product"
                                                    width={100}
                                                    height={100}
                                                    className="w-auto h-full"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <Link href={"/"}>
                                                    <p>{item.title}</p>
                                                </Link>
                                                <RatingStars count={item.rating} />
                                                <span className="text-[14px]">${item.
                                                    price}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-2 border-t cursor-pointer hover:bg-primary hover:text-white transition-all">
                                <Link href={"/"} >View all result</Link>
                            </div>
                        </div>


                    }
                </div>
            </div>
        </>
    );
}

export default SearceForm;