import { UpdatePassword } from "@/components/adminAuth/updatePassword";

function UpdatePasswordAdmin() {
    return (
        <>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <UpdatePassword />
                </div>
            </div>
        </>
    );
}

export default UpdatePasswordAdmin;