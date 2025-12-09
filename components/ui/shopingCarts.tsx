"use client"

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import ActiveOverly from "./activeOverly";
import { useState } from "react";

function ShopingCarts() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="relative">
            <Link onClick={() => setIsActive(!isActive)} href="/" className="relative">
                <div className="flex flex-col items-center">
                    <ShoppingCart />
                    <span className="text-[14px] hidden lg:block">Cart</span>

                </div>
                <span className="absolute -top-1.5 -right-2.5 w-4 h-4 text-xs bg-primary rounded-full flex justify-center items-center text-white">8</span>
            </Link>
            {isActive && <ActiveOverly onClick={() => setIsActive(false)} isActive={isActive} />}

        </div>
    );
}

export default ShopingCarts;