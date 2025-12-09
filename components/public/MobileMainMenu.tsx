"use client"

import { Menu, Search, X } from "lucide-react";
import ShopingCarts from "../ui/shopingCarts";
import { useState } from "react";
import SearceForm from "../ui/searceForm";
import { useNavigationStore } from "@/store/navigation.store";

function MobileMainMenu() {
    const [Active, setIsActive] = useState(false)
    const { isActive, updateActive } = useNavigationStore()

    return (
        <>
            <div className="flex gap-3 items-center justify-end">
                <Search onClick={() => setIsActive(true)} className="cursor-pointer" />
                <Menu onClick={() => updateActive(!isActive)} className="cursor-pointer" />
                <ShopingCarts />
            </div>
            {
                Active &&
                <div className="absolute w-full flex items-center  bg-white h-full top-0 left-0">
                    <div className="flex-1">
                        <SearceForm />
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                        <X onClick={() => setIsActive(false)} className="mr-5" />
                    </div>
                </div>
            }
        </>
    );
}

export default MobileMainMenu;