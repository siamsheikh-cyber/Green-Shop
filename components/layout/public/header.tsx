import MainManu from "@/components/public/mainManu";
import { MapPin } from "lucide-react";

function PublicHeader() {
    return (
        <>
            <div className="bg-primary p-3">
                <div className="my-container">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1.5 cursor-pointer text-white">
                            <MapPin size={20} />
                            <span>Track Order</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <a href="tel:01339530000" className="border-r pr-2.5">01339539820</a>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
            <MainManu />

        </>
    );
}

export default PublicHeader;