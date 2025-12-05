import { ChevronRight } from "lucide-react";
import Link from "next/link";


const sub = [100, 200, 300, 400]

function SubTitleTwo() {
    return (
        <>
            <div className="absolute top-0 left-full w-full h-full bg-white shadow rounded-[5px] opacity-0 invisible group-hover/edit:opacity-100 group-hover/edit:visible">
                {
                    sub.map((item, index) =>
                        <Link key={item} href={"/"} className={`flex justify-between ${index == sub.length - 1 ? "" : "border-b"} px-4 py-2 group`} >
                            <span className="hover:text-primary">Pajama sets {item}</span>
                            <ChevronRight className="w-4 hover:text-primary" />
                        </Link>
                    )
                }
            </div>
        </>
    );
}

export default SubTitleTwo;