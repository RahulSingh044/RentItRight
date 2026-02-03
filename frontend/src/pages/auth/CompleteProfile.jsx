import { useState } from "react";

export default function CompleteProfile() {
  const [intent, setIntent] = useState("rent");

  return (
    <div className="flex min-h-screen items-center justify-center bg-app px-4 text-white">
      
      {/* CARD */}
      <div className="w-full max-w-4xl rounded-2xl bg-card shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

          {/* LEFT */}
          <div className="flex flex-col items-center justify-center space-y-10">
            
            {/* Avatar */}
            <div className="relative">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-zinc-800">
                <span className="text-4xl">👤</span>
              </div>
              <button className="absolute bottom-3 right-3 rounded-full bg-emerald-500 p-2">
                📷
              </button>
            </div>

            <p className="text-xs tracking-widest text-zinc-400">
              UPLOAD PROFILE PHOTO
            </p>

            {/* Usage Intent */}
            <div className="w-full space-y-4">
              <IntentCard
                active={intent === "rent"}
                title="I want to Rent"
                subtitle="Browse and rent items locally"
                onClick={() => setIntent("rent")}
              />

              <IntentCard
                active={intent === "list"}
                title="I want to List"
                subtitle="Earn money by listing your assets"
                onClick={() => setIntent("list")}
              />
            </div>

            <p className="pt-6 text-xs text-zinc-500">
              🔒 YOUR DATA IS ENCRYPTED AND SECURELY STORED
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold">
                Complete Your Profile
              </h2>
              <p className="text-zinc-400">
                Set up your identity in the community
              </p>
            </div>

            <Input label="FULL NAME" placeholder="e.g. Alexander Bennett" />
            <Input label="LOCATION" placeholder="City / Area / Pincode" />

            {/* Phone */}
            <div>
              <label className="text-xs text-zinc-400">PHONE NUMBER</label>
              <div className="mt-1 flex gap-3">
                <input
                  className="flex-1 rounded-full bg-zinc-800 px-4 py-3"
                  placeholder="+91 XXXXX XXXXX"
                />
                <button className="font-medium text-emerald-400">
                  Verify
                </button>
              </div>
            </div>

            {/* OTP */}
            <div>
              <label className="text-xs text-zinc-400">OTP VERIFICATION</label>
              <div className="mt-1 flex gap-3">
                <input
                  className="flex-1 rounded-full bg-zinc-800 px-4 py-3"
                  placeholder="••••••"
                />
                <button className="text-sm text-zinc-400">
                  Resend
                </button>
              </div>
            </div>

            {/* ID Upload */}
            <div className="rounded-xl border border-dashed border-zinc-700 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Upload ID Document</p>
                  <p className="text-xs text-zinc-400">
                    REQUIRED FOR HIGH-VALUE RENTALS
                  </p>
                </div>
                <button className="text-emerald-400 text-xl">⬆</button>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-4 w-full rounded-full bg-indigo-600 py-4 font-semibold">
              Complete Setup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ----------------- Reusable Bits ----------------- */

function IntentCard({ active, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-4 text-left transition ${
        active
          ? "border border-emerald-400 bg-emerald-400/10"
          : "bg-zinc-800 hover:bg-zinc-700"
      }`}
    >
      <p className="font-medium">{title}</p>
      <p className="text-sm text-zinc-400">{subtitle}</p>
    </button>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-xs text-zinc-400">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-1 w-full rounded-full bg-zinc-800 px-4 py-3"
      />
    </div>
  );
}


// Fix it later