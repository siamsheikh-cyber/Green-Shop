import { Heart } from "lucide-react";
import Link from "next/link";

function WishList() {
    return (
        <>
            <Link href="/" className="relative">
                <div className="flex flex-row gap-1.5 md:flex-col md:gap-0 items-center">
                    <Heart className="text-xs" />
                    <span className="text-[14px]">Wishlist</span>
                </div>
                <span className="absolute -top-1 right-1 w-4 h-4 text-xs bg-primary rounded-full md:flex justify-center items-center text-white hidden ">7</span>
            </Link>
        </>
    );
}

export default WishList;