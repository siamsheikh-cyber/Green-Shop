import { GitCompareArrows } from "lucide-react";
import Link from "next/link";

function CompareArrows() {
    return (
        <>
            <Link href="/" className="relative">
                <div className="flex flex-col items-center">
                    <GitCompareArrows className="
                    hidden md:block"/>
                    <span className="text-[14px]">Compare</span>
                </div>
                <span className="absolute -top-1 right-1 w-4 h-4 text-xs bg-primary rounded-full hidden md:flex justify-center items-center text-white ">5</span>
            </Link>
        </>
    );
}

export default CompareArrows;