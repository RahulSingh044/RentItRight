const AuthLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-background-dark">
      <div className="relative w-full max-w-[480px]">

        {/* subtle glow
        <div className="absolute -inset-1 bg-accent/20 blur-2xl rounded-2xl" /> */}

        <div className="relative bg-surface  rounded-2xl shadow-2xl overflow-hidden">
          {children}
        </div>

      </div>
    </main>
  );
};

export default AuthLayout;
