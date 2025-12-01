import { ReactNode } from "react";
import PublicHeader from "./header";
import PublicFooter from "./footer";

function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-col min-h-screen ">
                <PublicHeader />
                <div className="flex-1">
                    {children}
                </div>
                <PublicFooter />
            </div>
        </>
    );
}

export default PublicLayout;