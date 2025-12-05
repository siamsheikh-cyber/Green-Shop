import { ChevronDown, ChevronRight } from "lucide-react";
import Categories from "./categories";
import Link from "next/link";

function NaveManu() {
    return (
        <div className="">
            <ul className="flex items-center gap-5 px-6 my-auto">
                <li className="h-13 flex items-center hover:text-primary">
                    <Link href={"/"}>Home</Link >
                </li>
                <li className="h-13 flex items-center hover:text-primary">
                    <Link href={"/"}>Shop</Link >
                </li>
                <li className="h-13 flex items-center hover:text-primary">
                    <Link href={"/"}>Campaign</Link >
                </li>
                <li className="h-13 flex items-center hover:text-primary">
                    <Link href={"/"}>Blog</Link >
                </li>
                <li className="relative">
                    <Link href={"/"} className="flex gap-0.5 items-center justify-center my-auto h-13 hover:text-primary group">
                        <span>Pages</span>
                        <ChevronDown className="w-4 mt-1.5" />
                    </Link>

                    {/* pages list start */}
                    <div className="absolute top-full left-0 bg-white shadow-2xs w-[230px] visible opacity-0 group-hover:opacity-100 group-hover:invisible">
                        <ul className="border-t-primary border-t-3 px-4 py-1.5 flex flex-col gap-1">
                            <li>
                                <Link href={"/"} className="flex gap-1"><ChevronRight className="w-4" />About Us</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1"><ChevronRight className="w-4" />Hoe it works</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1"><ChevronRight className="w-4" />Privacy-policy</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1"><ChevronRight className="w-4" />Terms-and-service</Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1"><ChevronRight className="w-4" />Return-policy</Link>
                            </li>
                        </ul>
                    </div>
                    {/* pages list end */}
                </li>
                <li className="h-13 flex items-center hover:text-primary">
                    <Link href={"/"}>Contact</Link >
                </li>
            </ul>
        </div>
    );
}

export default NaveManu;