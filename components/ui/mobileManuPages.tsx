"use client"
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function MobileMenuPages() {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            {/* '''''''''''''pages......... */}
            <li className="flex flex-col">
                <div onClick={() => setIsActive(!isActive)} className="flex items-center hover:text-primary cursor-pointer">
                    <ChevronRight size={16} />
                    <Link href={"/"} className="flex gap-0.5 items-center">
                        <span>Pages</span>
                        <ChevronDown className="w-4 mt-1.5" />
                    </Link>
                </div>
                {/* pages list start */}
                {
                    isActive == true ?
                        <div className="bg-white shadow-2xs w-[230px]">
                            <ul className="border-t-primary border-t-3 px-4 py-1.5 flex flex-col gap-1">
                                <li className="hover:text-primary">
                                    <Link href={"/"} className="flex gap-1">
                                        <ChevronRight className="w-4" />About Us</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link href={"/"} className="flex gap-1">
                                        <ChevronRight className="w-4" />Hoe it works</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link href={"/"} className="flex gap-1">
                                        <ChevronRight className="w-4" />Privacy-policy</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link href={"/"} className="flex gap-1">
                                        <ChevronRight className="w-4" />Terms-and-service</Link>
                                </li>
                                <li className="hover:text-primary">
                                    <Link href={"/"} className="flex gap-1">
                                        <ChevronRight className="w-4" />Return-policy</Link>
                                </li>
                            </ul>
                        </div>
                        :
                        ""
                }

                {/* pages list end */}
            </li>
            {/* '''''''''''''pages......... */}
        </>
    );
}

export default MobileMenuPages;