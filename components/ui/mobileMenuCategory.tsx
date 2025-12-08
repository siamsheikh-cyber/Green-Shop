"use client"
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

function MobileMenuCategory() {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div>
                <ul className="">
                    <li className="px-2">
                        <div className="flex gap-1.5 items-center py-1.5">
                            <ChevronRight size={16} />
                            <div className="flex-1 flex items-center justify-between group">
                                <Link href={"/"} className=" flex items-center group-hover:text-primary ">
                                    <span>Women Clothing</span>
                                </Link>
                                <Button onClick={() => setIsActive(!isActive)} className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                    <ChevronDown size={16} />
                                </Button>
                            </div>
                        </div>
                        {/* Sub List One start*/}
                        {
                            isActive ?
                                <ul className="border-l pl-2.5 ml-6 text-gray-600 text-[14px]">

                                    <li className="py-1.5 px-1.5 relative before:absolute before:top-4 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                        <Link href={"/"}>Women's Underwear</Link>
                                        {/* Sub List two start*/}
                                        <ul className="border-l pl-2.5 ml-6 text-gray-600 text-[14px]">

                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Pajama Sets</Link>
                                            </li>
                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Women Socks & Hosiery</Link>
                                            </li>
                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Shapewer</Link>
                                            </li>
                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Bras</Link>
                                            </li>
                                        </ul>
                                        {/* Sub List two End*/}
                                    </li>
                                    <li className="py-1.5 px-1.5 relative before:absolute before:top-4 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                        <Link href={"/"}>Bottoms</Link>
                                        {/* Sub List two start*/}
                                        <ul className="border-l pl-2.5 ml-6 text-gray-600 text-[14px]">

                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Leggings</Link>
                                            </li>
                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Skirt</Link>
                                            </li>
                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Jeans</Link>
                                            </li>
                                            <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                <Link href={"/"}>Pants & Capris</Link>
                                            </li>
                                        </ul>
                                        {/* Sub List two End*/}
                                    </li>
                                    <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                        <Link href={"/"}>Weddings & Events</Link>
                                    </li>
                                    <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                        <Link href={"/"}>Accessories</Link>
                                    </li>
                                    <li className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                        <Link href={"/"}>Women's Fashion</Link>
                                    </li>
                                </ul>
                                :
                                ""
                        }

                        {/* Sub List One end*/}

                    </li>
                    <li className="px-2.5 flex gap-1.5 items-center py-1.5 my-1.5">
                        <ChevronRight size={16} />
                        <div className="flex-1 flex items-center justify-between group">
                            <Link href={"/"} className=" flex  items-center group-hover:text-primary ">
                                <span>Man Clothing</span>
                            </Link>
                            <Button className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                <ChevronDown size={16} />
                            </Button>
                        </div>
                    </li>
                    <li className="px-2.5 flex gap-1.5 items-center py-1.5 my-1.5">
                        <ChevronRight size={16} />
                        <div className="flex-1 flex items-center justify-between group">
                            <Link href={"/"} className=" flex  items-center group-hover:text-primary ">
                                <span>Electronics</span>
                            </Link>
                            <Button className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                <ChevronDown size={16} />
                            </Button>
                        </div>
                    </li>
                    <li className="px-2.5 flex gap-1.5 items-center py-1.5 my-1.5">
                        <ChevronRight size={16} />
                        <div className="flex-1 flex items-center justify-between group">
                            <Link href={"/"} className=" flex  items-center group-hover:text-primary ">
                                <span>Beauty & Personal care</span>
                            </Link>
                            <Button className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                <ChevronDown size={16} />
                            </Button>
                        </div>
                    </li>
                    <li className="px-2.5 flex gap-1.5 items-center py-1.5 my-1.5">
                        <ChevronRight size={16} />
                        <div className="flex-1 flex items-center justify-between group">
                            <Link href={"/"} className=" flex  items-center group-hover:text-primary ">
                                <span>Web Themes & Templates</span>
                            </Link>
                            <Button className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                <ChevronDown size={16} />
                            </Button>
                        </div>
                    </li>
                    <li className="px-2.5 flex gap-1.5 items-center py-1.5 my-1.5">
                        <ChevronRight size={16} />
                        <div className="flex-1 flex items-center justify-between group">
                            <Link href={"/"} className=" flex  items-center group-hover:text-primary ">
                                <span>Sports & Entertenmaint</span>
                            </Link>
                            <Button className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                <ChevronDown size={16} />
                            </Button>
                        </div>
                    </li>
                    <li className="px-2.5 flex gap-1.5 items-center py-1.5 my-1.5">
                        <ChevronRight size={16} />
                        <div className="flex-1 flex items-center justify-between group">
                            <Link href={"/"} className=" flex  items-center group-hover:text-primary ">
                                <span>Home & Garden</span>
                            </Link>
                            <Button className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                <ChevronDown size={16} />
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MobileMenuCategory;