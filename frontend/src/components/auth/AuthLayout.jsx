export default function AuthLayout({ children }) {

 

  return (
    <div className="grid place-items-center bg-auth">
      <div className="w-full max-w-[440px] rounded-2xl bg-card shadow-auth">
        {children}
      </div>
    </div>
  );
}
