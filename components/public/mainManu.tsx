import Image from "next/image";
import Link from "next/link";
import SearceForm from "../ui/searceForm";
import { GitCompareArrows, Heart } from "lucide-react";
import ShopingCarts from "../ui/shopingCarts";
import WishList from "../ui/wishList";
import MobileMainMenu from "./MobileMainMenu";
import CompareArrows from "../ui/compareArrows";

function MainManu() {
    return (
        <>
            <div className="bg-white">
                <div className="my-container mt-4 mb-4 ">
                    <div className="flex items-center relative">
                        <Link href="/" >
                            <Image
                                loading="eager"
                                src={"/logoipsum.png"}
                                alt="logo"
                                width={160}
                                height={60}
                                className="w-auto h-auto"
                            />
                        </Link>
                        {/* Dekstop menu start*/}
                        <div className="flex-1 hidden lg:flex">
                            <SearceForm />
                            <div className="hidden md:flex items-center gap-12 text-gray-500">
                                <CompareArrows />

                                <WishList />

                                <ShopingCarts />
                            </div>
                        </div>
                        {/* Dekstop menu end*/}

                        {/* mobile menu start */}
                        <div className="flex-1 lg:hidden">
                            <MobileMainMenu />
                        </div>
                        {/* mobile menu end */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainManu;