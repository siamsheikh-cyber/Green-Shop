import { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div>this is dashboard layout</div>
            {children}
        </>
    );
}

export default DashboardLayout;