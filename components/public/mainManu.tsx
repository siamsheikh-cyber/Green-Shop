import Image from "next/image";
import Link from "next/link";
import SearceForm from "../ui/searceForm";
import { GitCompareArrows, Heart } from "lucide-react";
import AllCarts from "../ui/allCarts";

function MainManu() {
    return (
        <>
            <div>
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
                        <div className="flex items-center gap-15 text-gray-500">
                            <Link href="/" className="flex flex-col items-center">
                                <GitCompareArrows />
                                <span className="text-[14px]">Compare</span>
                            </Link>
                            <Link href="/" className="flex flex-col items-center">
                                <Heart />
                                <span className="text-[14px]">Wishlist</span>
                            </Link>
                            <Link href="/" className="flex flex-col items-center">
                                <AllCarts />
                                <span className="text-[14px]">Cart</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainManu;