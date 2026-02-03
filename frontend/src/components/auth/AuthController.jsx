import { useState } from "react";
import AuthModal from "./AuthModal";

import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import VerifyOtp from "../../pages/auth/VerifyOtp";
import Success from "../../pages/auth/Success";

export default function AuthController({ open, onClose, defaultMode = "login" }) {
  const [mode, setMode] = useState(defaultMode);
  const [email, setEmail] = useState("");

  const switchMode = (next) => setMode(next);

  const screens = {
    login: <Login switchMode={switchMode} />,
    register: <Register switchMode={switchMode} email={email} setEmail={setEmail}/>,
    otp: <VerifyOtp switchMode={switchMode} email={email} />,
    success: <Success />
  };

  return (
    <AuthModal open={open} onClose={onClose}>
      {screens[mode]}
    </AuthModal>
  );
}
