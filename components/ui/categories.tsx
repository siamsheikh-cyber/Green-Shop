"use client"
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SubTitleOne from "./subTitleOne";

const category = [11, 12, 13, 14]

function Categories() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="relative">
            <h2 onClick={() => setIsActive(!isActive)} className="flex items-center gap-1.5 bg-primary w-[260px] h-13 my-auto pl-3 cursor-pointer"><Menu />Categories</h2>
            {/* categories list start */}
            {isActive &&
                <div className="h-85 absolute top-full left-0 w-full bg-white ">

                    {
                        category.map((item, index) =>
                            <div key={index} className="group">
                                <Link href={"/"} className={`${index == (category.length - 1) ? "" : "border-b"} flex justify-between items-center p-3 pb-3 my-1`}>
                                    <div className="flex gap-3 items-center">
                                        <img src="./images/mikeMan.jpg"
                                            alt="img"
                                            width={40}
                                            height={40}
                                            className="group-hover:rotate-y-180"
                                        />
                                        <span className=" group-hover:text-primary">Women Clothing {item}</span>
                                    </div>
                                    <ChevronRight className="w-4 group-hover:text-primary" />
                                </Link>
                                <SubTitleOne />
                            </div>
                        )
                    }
                </div>}
            {/* categories list end */}
        </div >
    );
}

export default Categories;