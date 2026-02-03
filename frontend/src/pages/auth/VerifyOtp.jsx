import AuthLayout from "../../components/auth/AuthLayout";
import {
  ShieldCheck,
  Lock,
  Shield,
  Clock,
  HelpCircle,
  Flag,
} from "lucide-react";

const VerifyOtp = ({email}) => {

  console.log("Verifying OTP for email:", email);

  return (
    <AuthLayout>
      <div className="p-10">

        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-10 text-center">
          
          <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
            Verify Your Account
          </h1>
          <p className="text-text-secondary/40 text-sm mt-2 leading-relaxed">
            We've sent a 6-digit code to your email.
            <br />
            Please enter it below to secure your account.
          </p>
        </div>

        {/* OTP Inputs */}{/* Fix the OTP Field*/}
        <div className="mb-10">
          <fieldset className="flex justify-between gap-3 sm:gap-4">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-full aspect-square text-center text-xl font-bold 
                           rounded-lg border-1 border-text-secondary/40
                           bg-app  text-text-primary 
                           focus:border-accent focus:ring-1 focus:ring-accent 
                           transition-all duration-200"
              />
            ))}
          </fieldset>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <button
            type="button"
            className="w-full h-14 bg-accent hover:bg-accent/90 
                       text-white font-semibold rounded-2xl 
                       shadow-lg shadow-primary/20 
                       flex items-center justify-center gap-2 
                       transition-transform active:scale-[0.98]"
          >
            Verify Identity
            <ShieldCheck className="w-5 h-5" />
          </button>

          {/* Resend */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-text-secondary">
                Didn’t receive the code?
              </span>
              <button className="text-bright font-medium hover:underline">
                Resend code
              </button>
            </div>

            {/* <div className="flex items-center gap-1.5 text-xs 
                            text-accent bg-accent/10 
                            px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              <span>00:59</span>
            </div> */}
          </div>
        </div>

        {/* Help */}
        <p className="mt-8 text-center border-t border-divider pt-6 text-sm text-text-secondary">
          Having trouble?{" "}
          <button className="text-text-primary hover:underline font-medium">
            Contact support
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyOtp;
