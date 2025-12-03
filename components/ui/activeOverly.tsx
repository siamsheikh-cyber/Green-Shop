import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

function ActiveOverly({ isActive, onClick }: { isActive: boolean, onClick: () => void }) {
    return (
        <>
            <div className="flex flex-col absolute top-full right-0 border w-70 p-2 mt-4 z-9">
                <div className="h-60 overflow-y-scroll">
                    {/* item one */}
                    <div className="flex items-center gap-4 pb-3 mb-3 border-b">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="product"
                            width={60}
                            height={60}
                            className="w-16 h-14"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold text-black">2021 Summer Women Clothing Ro...</p>
                            <small>1 x $144.83</small>
                            <div className="flex gap-3">
                                <small>Color: Red</small>
                                <small>Size: M</small>
                            </div>
                        </div>
                    </div>
                    {/* item two */}
                    <div className="flex items-center gap-2 pb-3 mb-3 border-b">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="product"
                            width={60}
                            height={60}
                            className="w-16 h-14"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold text-black">2021 Summer Women Clothing Ro...</p>
                            <small>1 x $144.83</small>
                            <div className="flex gap-3">
                                <small>Color: Red</small>
                                <small>Size: M</small>
                            </div>
                        </div>
                    </div>
                    {/* item three */}
                    <div className="flex items-center gap-2 pb-3 mb-3 border-b">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="product"
                            width={60}
                            height={60}
                            className="w-16 h-14"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold text-black">2021 Summer Women Clothing Ro...</p>
                            <small>1 x $144.83</small>
                            <div className="flex gap-3">
                                <small>Color: Red</small>
                                <small>Size: M</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom section */}
                <div className="pt-4 pb-2.5 px-2.5 border-t-2">
                    <p>Subtotal: $504.04</p>
                    <div className="flex justify-between items-center mt-3">
                        <Button asChild className="">
                            <Link href="/">Cart</Link>
                        </Button>
                        <Button asChild className="">
                            <Link href="/">Checkout</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {
                isActive &&
                <div onClick={onClick} className="w-full h-screen fixed right-0 z-1" />

            }
        </>
    );
}

export default ActiveOverly;