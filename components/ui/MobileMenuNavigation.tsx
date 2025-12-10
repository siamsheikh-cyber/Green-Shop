"use client"
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import MobileMenuPages from "./mobileManuPages";
import { useNavigationStore } from "@/store/navigation.store";

const categoriesData = [
    {
        id: "1",
        title: "Women clothing",
        link: "/women-clothing",
        image: "/images/categories/women.jpg",
        isActive: false,
        children: [
            {
                id: "23",
                title: "2 Outerwear & Jackets",
                link: "/men-clothing/outerwear-jackets",
                image: "/images/categories/outerwear.jpg",
                isActive: false,
                children: [
                    {
                        id: "24",
                        title: "2 Outerwear & Jackets",
                        link: "/men-clothing/outerwear-jackets/outerwear-jackets",
                        image: "/images/categories/outerwear.jpg",
                        isActive: false,
                        children: []
                    },
                    {
                        id: "25",
                        title: "2 Bottoms",
                        link: "/men-clothing/outerwear-jackets/bottoms",
                        image: "/images/categories/bottoms.jpg",
                        isActive: false,
                        children: []
                    },
                    {
                        id: "26",
                        title: "2 Underwear",
                        link: "/men-clothing/outerwear-jackets/underwear",
                        image: "/images/categories/underwear.jpg",
                        isActive: false,
                        children: []
                    },
                    {
                        id: "27",
                        title: "2 Accessories",
                        link: "/men-clothing/outerwear-jackets/accessories",
                        image: "/images/categories/accessories.jpg",
                        isActive: false,
                        children: []
                    }
                ]
            },
            {
                id: "8",
                title: "Bottoms",
                link: "/men-clothing/bottoms",
                image: "/images/categories/bottoms.jpg",
                isActive: false,
                children: []
            },
            {
                id: "9",
                title: "Underwear",
                link: "/men-clothing/underwear",
                image: "/images/categories/underwear.jpg",
                isActive: false,
                children: []
            },
            {
                id: "10",
                title: "Accessories",
                link: "/men-clothing/accessories",
                image: "/images/categories/accessories.jpg",
                isActive: false,
                children: []
            }
        ]
    },
    {
        id: "2",
        title: "Men clothing",
        link: "/men-clothing",
        image: "/images/categories/men.jpg",
        isActive: false,
        children: [
            {
                id: "3",
                title: "Outerwear & Jackets",
                link: "/men-clothing/outerwear-jackets",
                image: "/images/categories/outerwear.jpg",
                isActive: false,
                children: [
                    {
                        id: "4",
                        title: "Outerwear & Jackets",
                        link: "/men-clothing/outerwear-jackets/outerwear-jackets",
                        image: "/images/categories/outerwear.jpg",
                        isActive: false,
                        children: []
                    },
                    {
                        id: "5",
                        title: "Bottoms",
                        link: "/men-clothing/outerwear-jackets/bottoms",
                        image: "/images/categories/bottoms.jpg",
                        isActive: false,
                        children: []
                    },
                    {
                        id: "6",
                        title: "Underwear",
                        link: "/men-clothing/outerwear-jackets/underwear",
                        image: "/images/categories/underwear.jpg",
                        isActive: false,
                        children: []
                    },
                    {
                        id: "7",
                        title: "Accessories",
                        link: "/men-clothing/outerwear-jackets/accessories",
                        image: "/images/categories/accessories.jpg",
                        isActive: false,
                        children: []
                    }
                ]
            },
            {
                id: "8",
                title: "Bottoms",
                link: "/men-clothing/bottoms",
                image: "/images/categories/bottoms.jpg",
                isActive: false,
                children: []
            },
            {
                id: "9",
                title: "Underwear",
                link: "/men-clothing/underwear",
                image: "/images/categories/underwear.jpg",
                isActive: false,
                children: []
            },
            {
                id: "10",
                title: "Accessories",
                link: "/men-clothing/accessories",
                image: "/images/categories/accessories.jpg",
                isActive: false,
                children: []
            }
        ]
    },
    {
        id: "11",
        title: "Children",
        link: "/children",
        image: "/images/categories/children.jpg",
        isActive: false,
        children: []
    },
    {
        id: "12",
        title: "Electronics",
        link: "/electronics",
        image: "/images/categories/electronics.jpg",
        isActive: false,
        children: []
    }
];




function MobileNavigationMenu() {

    const { categories, updateCategories, isActive, updateActive } = useNavigationStore()



    useEffect(() => {
        updateCategories(categoriesData)

    }, [updateCategories])


    const handleClick = (id: string) => {
        const updatecategroi = categories.map(item => {
            if (item.id == id) {

                return {
                    ...item,
                    isActive: !item.isActive
                }
            } else {
                return item
            }
        }
        )
        updateCategories(updatecategroi)
    }

    return (
        <>

            {isActive &&
                <div className="lg:hidden ">
                    <div className="my-container ">
                        <div className="fixed left-0 top-0 w-[300px] shadow-xl bg-white">
                            {/* top */}
                            <div className="bg-primary h-12 flex justify-between items-center px-3">
                                <h2 className="text-[22px]">Navigation</h2>
                                <X onClick={() => updateActive(!isActive)} size={20} className="cursor-pointer" />
                            </div>
                            {/* Middle */}
                            <div className="">
                                <Tabs defaultValue="menu" className="w-full">
                                    <TabsList className="w-full px-1.5 border-0 rounded-none">
                                        <TabsTrigger className="w-[50%] cursor-pointer rounded-[3px]" value="menu">Menu</TabsTrigger>
                                        <TabsTrigger className="w-[50%] cursor-pointer rounded-[3px]" value="category">Category</TabsTrigger>
                                    </TabsList>
                                    {/* Bottom */}
                                    <TabsContent value="menu">
                                        {/* Menu Start */}
                                        <div className="px-1.5 h-[calc(100vh-100px)]">
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
                                        {/* Menu End */}
                                    </TabsContent>
                                    {/* Category Start */}
                                    <TabsContent value="category">
                                        {/* MobileMenuNavigation start */}
                                        <div className="overflow-y-scroll h-[calc(100vh-100px)]">
                                            <ul >
                                                {
                                                    categories.map((sub1) =>

                                                        <li key={sub1.id} className="px-2">
                                                            <div className="flex gap-1.5 items-center py-1.5">
                                                                <ChevronRight size={16} />
                                                                <div className="flex-1 flex items-center justify-between group">
                                                                    <Link href={"/"} className=" flex items-center group-hover:text-primary ">
                                                                        <span>{sub1.title}</span>
                                                                    </Link>
                                                                    {sub1.children.length > 0 && <Button
                                                                        onClick={() => handleClick(sub1.id)}
                                                                        className="flex items-center justify-center w-2 h-6 rounded-none bg-gray-400 group-hover:bg-primary hover:bg-black cursor-pointer">
                                                                        <ChevronDown size={16} />
                                                                    </Button>}
                                                                </div>
                                                            </div>
                                                            {sub1.isActive && <ul className="border-l pl-2.5 ml-6 text-gray-600 text-[14px]">
                                                                {/* Sub List One start*/}
                                                                {sub1.children.map((sub2) =>
                                                                    <>  <li key={sub2.id}
                                                                        className="py-1.5 px-1.5 relative before:absolute before:top-4 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                                        <Link href={"/"}>{sub2.title}</Link>
                                                                    </li>
                                                                        <ul className="border-l pl-2.5 ml-6 text-gray-600 text-[14px]">
                                                                            {/* Sub List two start*/}
                                                                            {
                                                                                sub2.children.map((item) =>
                                                                                    <li key={item.id}
                                                                                        className="py-1.5 px-1.5 relative before:absolute before:top-1/2 before:-left-2.5 before:border-t before:w-2.5 before:h-1 before:opacity-40">
                                                                                        <Link href={"/"}>{item.title}</Link>
                                                                                    </li>
                                                                                )
                                                                            }
                                                                        </ul>
                                                                    </>
                                                                )}
                                                            </ul>}
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        {/* MobileMenuNavigation end */}
                                    </TabsContent>
                                    {/* Category End */}
                                </Tabs>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default MobileNavigationMenu;