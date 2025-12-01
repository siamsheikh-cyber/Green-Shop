import { Search } from "lucide-react";

function SearceForm() {
    return (
        <>

            <div className="flex-1 px-10 ">
                <div className="relative">
                    <form >
                        <input placeholder="Search by product name" type="text" className="py-1.5 px-3 w-full border-[2.5px]" />
                        <button className="hover:text-primary cursor-pointer">
                            <Search className="absolute top-1/2 -translate-y-1/2 right-3" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SearceForm;