"use client"

import { Menu, Search, X } from "lucide-react";
import ShopingCarts from "./shopingCarts";
import { useState } from "react";
import SearceForm from "./searceForm";

function MobileMainMenu() {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className="flex gap-3 items-center justify-end">
                <Search onClick={() => setIsActive(true)} className="cursor-pointer" />
                <Menu className="cursor-pointer" />
                <ShopingCarts />
            </div>
            {
                isActive &&
                <div className="absolute w-full flex items-center  bg-white h-full top-0 left-0">
                    <div className="flex-1 ml-0.5">
                        <SearceForm />
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                        <X onClick={() => setIsActive(false)} className="mr-6" />
                    </div>
                </div>
            }
        </>
    );
}

export default MobileMainMenu;