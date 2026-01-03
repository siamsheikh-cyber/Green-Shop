import { OTPForm } from "@/components/adminAuth/otp-form";

function OtpForAdmin() {
    return (
        <>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-xs">
                    <OTPForm />
                </div>
            </div>
        </>
    );
}

export default OtpForAdmin;