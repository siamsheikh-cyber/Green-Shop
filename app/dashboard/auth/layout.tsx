import { ReactNode } from "react";

function AdminAuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    );
}

export default AdminAuthLayout;