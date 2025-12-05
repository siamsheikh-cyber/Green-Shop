import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SubTitleTwo from "./subTitleTwo";


const sub = [1, 2, 3, 4]
function SubTitleOne() {

    return (
        <>
            <div className="absolute top-0 left-full w-full h-full bg-white shadow rounded-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                {
                    sub.map((item, index) =>
                        <div key={item} className="group/edit">
                            <Link href={"/"} className={`flex justify-between ${index == sub.length - 1 ? "" : "border-b"} px-4 py-2 group`} >
                                <span className="hover:text-primary">Women's Fashion {item}</span>
                                <ChevronRight className="w-4 hover:text-primary" />
                            </Link>
                            <SubTitleTwo />
                        </div>

                    )
                }
            </div>
        </>
    );
}

export default SubTitleOne;