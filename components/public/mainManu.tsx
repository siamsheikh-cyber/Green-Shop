import Image from "next/image";
import Link from "next/link";
import SearceForm from "../ui/searceForm";
import { GitCompareArrows, Heart } from "lucide-react";
import ShopingCarts from "../ui/shopingCarts";
import WishList from "../ui/wishList";

function MainManu() {
    return (
        <>
            <div className="">
                <div className="my-container mt-5">
                    <div className="flex items-center">
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
                        <SearceForm />
                        <div className="flex items-center gap-12 text-gray-500">
                            <Link href="/" className="relative">
                                <div className="flex flex-col items-center">
                                    <GitCompareArrows />
                                    <span className="text-[14px]">Compare</span>
                                </div>
                                <span className="absolute -top-1 right-1 w-4 h-4 text-xs bg-primary rounded-full flex justify-center items-center text-white">5</span>
                            </Link>
                            <div className="hidden md:block">
                                <WishList />
                            </div>
                            <ShopingCarts />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainManu;