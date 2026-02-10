"use client";

import { useState, useRef } from "react";
import Logo from "../../layout/header/logo";

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [agree, setAgree] = useState(false);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const validatePhone = () => {
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    if (!phone) {
      setError("Phone number is required");
      return false;
    }

    if (!indianPhoneRegex.test(phone)) {
      setError("ENter a valid 10-digit Indian mobile number");
      return false;
    }

    setError("");
    return true;
  };

  const handleGetOtp = () => {
    if (validatePhone()) {
      // UI-Only for now
      // console.log("Valid number, proceed to OTP UI")
      setShowOtp(true);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");
  const canSignIn = isOtpComplete && agree;

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Phone input  */}
        <div className="mb-[22px]">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => {
              // Allow digits only
              const value = e.target.value.replace(/\D/g, "");
              setPhone(value);
            }}
            maxLength={10}
            className="w-full rounded-md border border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white"
          />

          {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
        </div>

        {/* OTP Boxes  */}
        {showOtp && (
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  otpRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg rounded-md border border-white/20 bg-transparent text-white focus:border-primary outline-none"
              />
            ))}
          </div>
        )}

        {/* Buttons  */}
        <div className="flex flex-col items-center mt-4">
          {!showOtp && (
            <button
              type="button"
              onClick={handleGetOtp}
              className="w-[30%] mb-5 bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-3 rounded-lg font-medium transition"
            >
              Get OTP
            </button>
          )}

          <button
            type="submit"
            // disabled={!isOtpComplete}
            disabled={!canSignIn}
            // className="w-full bg-primary py-3 rounded-lg text-lg text-white font-medium border border-primary hover:text-primary hover:bg-transparent cursor-pointer"
            className={`w-full py-3 rounded-lg text-lg font-medium border transition
              ${
                canSignIn
                  ? "bg-primary text-white border-primary hover:bg-transparent hover:text-primary"
                  : "bg-gray-500/40 text-gray-300 border-gray-500 cursor-not-allowed"
              }
            `}
          >
            Sign In
          </button>
        </div>
      </form>

      {showOtp && (
        <div className="mt-4 flex items-start gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1 accent-primary cursor-pointer"
          />
          <span>
            I agree to the{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Terms & Conditions
            </span>
          </span>
        </div>
      )}

      <p className="mt-6 text-center text-white/60 text-sm">
        Sign in to <span className="text-primary font-medium">VLocker</span> to
        manage devices and EMIs securely.
      </p>
    </>
  );
};

export default Signin;
