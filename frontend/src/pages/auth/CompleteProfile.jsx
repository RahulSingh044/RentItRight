import AuthLayout from "../../components/auth/AuthLayout";
import {
  User,
  Camera,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Package,
  BadgeCheck,
  Upload,
  Lock,
} from "lucide-react";

const CompleteProfile = () => {
  return (

    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-background-dark">
      <div className="relative w-full max-w-[650px]">



        <div className="relative bg-surface  rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-14">

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold leading-tight mb-1 text-text-primary">
                Complete Your Profile
              </h1>
              <p className="text-text-secondary/40 text-lg">
                This helps us build trust in the community
              </p>
            </div>

            <form className="space-y-10">

              {/* Profile Photo */}
              <div className="flex flex-col items-center">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-app border-1 border-text-secondary/40 
                              flex items-center justify-center overflow-hidden 
                              group-hover:border-bright transition-colors">
                    <User className="w-14 h-14 text-text-secondary group-hover:text-bright transition-colors" />
                  </div>

                  <div className="absolute bottom-1 right-1 bg-bright text-background-dark 
                              rounded-full p-2 border-4 border-surface shadow-xl">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
                <span className="mt-4 text-sm font-medium text-text-secondary">
                  Upload Profile Photo
                </span>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-8">

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold ml-1 text-text-secondary uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-16 px-5 rounded-3xl bg-app
                           border-1 border-text-secondary/40 text-text-primary text-lg 
                           placeholder:text-text-secondary/30 
                           focus:bright focus:ring-1 focus:ring-bright transition-all"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold ml-1 text-text-secondary uppercase tracking-wider">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="City / Area / Pincode"
                    className="w-full h-16 px-5 rounded-3xl bg-app
                           border-1 border-text-secondary/40 text-text-primary text-lg 
                           placeholder:text-text-secondary/30 
                           focus:border-bright focus:ring-1 focus:ring-bright transition-all"
                  />
                </div>

                {/* Phone + OTP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold ml-1 text-text-secondary uppercase tracking-wider">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full h-16 px-5 pr-20 rounded-3xl bg-app
                               border-1 border-text-secondary/40 text-text-primary text-lg 
                               placeholder:text-text-secondary/30 
                               focus:border-bright focus:ring-1 focus:ring-bright transition-all"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 
                               text-bright text-sm font-bold hover:underline"
                      >
                        Verify
                      </button>
                    </div>
                  </div>

                  {/* OTP */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold ml-1 text-text-secondary uppercase tracking-wider">
                      OTP Verification
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="••••••"
                        className="w-full h-16 px-5 rounded-3xl bg-app
                               border-1 border-text-secondary/40 text-text-primary text-lg 
                               tracking-[0.5em] placeholder:tracking-normal 
                               placeholder:text-text-secondary/30 
                               focus:border-bright focus:ring-1 focus:ring-bright transition-all"
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 
                               text-xs font-bold text-text-secondary 
                               hover:text-bright transition-colors"
                      >
                        Resend Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Intent */}
              <div>
                <label className="text-sm font-semibold ml-1 block mb-4 
                              text-text-secondary uppercase tracking-wider">
                  Usage Intent
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Rent */}
                  <label className="relative cursor-pointer">
                    <input defaultChecked type="radio" name="usage" className="peer sr-only" />
                    <div className="border-1 border-text-secondary/40  bg-app rounded-3xl p-6 
                                transition-all peer-checked:border-bright 
                                peer-checked:bg-bright/5 hover:border-bright/40">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-3xl bg-primary/30 
                                    flex items-center justify-center">
                          <ShoppingCart className="w-6 h-6 text-bright" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">I want to Rent</p>
                          <p className="text-text-secondary text-xs mt-1">
                            Browse and rent items
                          </p>
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* List */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="usage" className="peer sr-only" />
                    <div className="border-1 border-text-secondary/40  bg-app rounded-3xl p-6 
                                transition-all peer-checked:border-bright 
                                peer-checked:bg-bright/5 hover:border-bright/40">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-3xl bg-primary/30 
                                    flex items-center justify-center">
                          <Package className="w-6 h-6 text-bright" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">I want to List</p>
                          <p className="text-text-secondary text-xs mt-1">
                            Earn by listing assets
                          </p>
                        </div>
                      </div>
                    </div>
                  </label>

                </div>
              </div>

              {/* Government ID */}
              <div>
                <label className="text-sm font-semibold ml-1 block mb-4 
                              text-text-secondary uppercase tracking-wider">
                  Government ID Verification
                </label>

                <div className="border-2 border-dashed border-text-secondary/40 
                            rounded-3xl p-8 flex items-center gap-6 
                            cursor-pointer hover:border-bright 
                            hover:bg-bright/5 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-bright/10 
                              flex items-center justify-center">
                    <BadgeCheck className="w-8 h-8 text-bright" />
                  </div>

                  <div className="flex-1">
                    <p className="text-lg font-semibold">Upload ID Document</p>
                    <p className="text-text-secondary text-sm mt-1">
                      Optional – Required for high-value rentals
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-bright">
                    <Upload className="w-7 h-7" />
                    <span className="text-[10px] uppercase font-bold mt-1">
                      Browse
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 max-w-sm mx-auto">
                <button
                  type="submit"
                  className="w-full h-16 bg-accent hover:bg-accent/90 
                         text-white font-bold text-lg rounded-3xl 
                         transition-all shadow-xl shadow-primary/30"
                >
                  Complete Setup
                </button>
              </div>
            </form>

            {/* Footer Note */}
            <div className="mt-10 text-center flex items-center justify-center gap-3">
              <Lock className="w-4 h-4 text-text-secondary" />
              <p className="text-text-secondary/40 text-sm">
                Your data is encrypted and securely stored for community safety.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CompleteProfile;
