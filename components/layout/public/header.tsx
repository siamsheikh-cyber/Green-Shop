import MainManu from "@/components/public/mainManu";
import CompareArrows from "@/components/ui/compareArrows";
import WishList from "@/components/ui/wishList";
import { MapPin } from "lucide-react";

function PublicHeader() {
    return (
        <>
            <div className="bg-primary py-3">
                <div className="my-container">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-1.5 cursor-pointer text-white">
                            <MapPin size={20} />
                            <span>Track Order</span>
                            <div className="md:hidden border-l pl-2">
                                <CompareArrows />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <a href="tel:01339530000" className="border-r pr-2.5">01339539820</a>
                            <span className="border-r md:border-r-0 pr-3 md:pr-0">Login</span>
                            <div className="md:hidden">
                                <WishList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainManu />

        </>
    );
}

export default PublicHeader;