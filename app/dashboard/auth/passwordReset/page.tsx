import { ResetPassword } from "@/components/adminAuth/resetPassword";

function PasswordResetRequest() {
    return (
        <>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <ResetPassword />
                </div>
            </div>
        </>
    );
}

export default PasswordResetRequest;