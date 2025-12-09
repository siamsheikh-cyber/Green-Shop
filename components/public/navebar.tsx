import { ChevronDown, ChevronRight, X } from "lucide-react";
import Categories from "../ui/categories";
import NaveManu from "../ui/naveManu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import MobileMenuPages from "../ui/mobileManuPages";
import MobileMenuNavigation from "../ui/MobileMenuNavigation";

function Navbar() {
    return (
        <>
            {/* Dekstop Navbar Start */}
            <div className="border-t bg-white z-1 hidden lg:block">
                <div className="my-container ">
                    <div className="flex">
                        <Categories />
                        <NaveManu />
                    </div>
                </div>
            </div>
            {/* Dekstop Navbar END */}

            {/* Mobile Navbar Start */}
            <MobileMenuNavigation />
            {/* Mobile Navbar END */}
        </>
    );
}





export default Navbar;