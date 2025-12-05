import Categories from "../ui/categories";
import NaveManu from "../ui/naveManu";

function Navbar() {
    return (
        <>
            <div className="border-t bg-white z-1">
                <div className="my-container">
                    <div className="flex">
                        <Categories />
                        <NaveManu />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;