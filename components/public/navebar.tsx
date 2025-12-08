import { ChevronDown, ChevronRight, X } from "lucide-react";
import Categories from "../ui/categories";
import NaveManu from "../ui/naveManu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import MobileMenuPages from "../ui/mobileManuPages";

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
            <div className="lg:hidden ">
                <div className="my-container ">
                    <div className="fixed left-0 top-0 h-screen w-[300px] shadow-xl bg-white">
                        {/* top */}
                        <div className="bg-primary h-12 flex justify-between items-center px-3">
                            <h2 className="text-[22px]">Navigation</h2>
                            <X size={20} className="cursor-pointer" />
                        </div>
                        {/* Middle */}
                        <div>
                            <Tabs defaultValue="menu" className="w-full">
                                <TabsList className="w-full px-1.5 border-0 rounded-none">
                                    <TabsTrigger className="w-[50%] cursor-pointer rounded-[3px]" value="menu">Menu</TabsTrigger>
                                    <TabsTrigger className="w-[50%] cursor-pointer rounded-[3px]" value="category">Category</TabsTrigger>
                                </TabsList>
                                {/* Bottom */}
                                <TabsContent value="menu">
                                    {/* Menu Start */}
                                    <div className="px-1.5">
                                        <ul className="flex flex-col gap-2.5">
                                            <li className=" flex items-center hover:text-primary">
                                                <ChevronRight size={12} /> <Link href={"/"}>Home</Link >
                                            </li>
                                            <li className=" flex items-center hover:text-primary">
                                                <ChevronRight size={16} /> <Link href={"/"}>Shop</Link >
                                            </li>
                                            <li className=" flex items-center hover:text-primary">
                                                <ChevronRight size={16} /> <Link href={"/"}>Campaign</Link >
                                            </li>
                                            <li className=" flex items-center hover:text-primary">
                                                <ChevronRight size={16} /> <Link href={"/"}>Blog</Link >
                                            </li>
                                            {/* '''''''''''''pages......... */}
                                            <MobileMenuPages />
                                            {/* '''''''''''''pages......... */}
                                            <li className=" flex items-center hover:text-primary">
                                                <ChevronRight size={16} /> <Link href={"/"}>Contact</Link >
                                            </li>
                                        </ul>
                                    </div>
                                </TabsContent>
                                <TabsContent value="category">Change your password here.</TabsContent>
                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>
            {/* Mobile Navbar END */}
        </>
    );
}



{/* <ul>
    <li>Women Clothing</li>
    <li>Man Clothing </li>
    <li>Electronics </li>
    <li>Beauty & Personal care </li>
    <li>Web Themes & Templates </li>
    <li>Sports & Entertenmaint </li>
    <li>Home & Garden </li>
     </ul> */}

export default Navbar;