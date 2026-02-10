
"use client"


import { Emi } from "@/app/types/emi";

export default function EmiCard({ emi }: { emi: Emi }) {

  const handlePayNow = () => {
    const paymentPayload = {
      emiId: emi.id,
      installmentId: emi.installmentId,
      amount: emi.amount,
      status: emi.status,
      lateFee: 200, // UI-only for now
    };

    // TEMP: UI-only placeholder
    console.log("Initiate payment with:", paymentPayload);

    /**
     * Later (Razorpay):
     * 1. Call backend → create order
     * 2. Get order_id
     * 3. Open Razorpay modal
     */
  };

  const statusStyles = {
    COMPLETED: "border-green-500 bg-green-500/10 text-green-400",
    PENDING: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
    UPCOMING: "border-border bg-darkmode/40 text-lightblue",
  };

  // const remarkStyles = {
  //   ACTIVE: "bg-green-500/20 text-green-400",
  //   CLOSED: "bg-gray-500/20 text-gray-300",
  //   DEACTIVATED_DEVICE: "bg-yellow-500/20 text-yellow-400",
  //   LOCKED_DEVICE: "bg-red-500/20 text-red-400",
  // };

  return (
    <div
      className={`
                    w-full rounded-xl border p-6
                    flex items-center justify-between
                    transition 
                    ${statusStyles[emi.status]}
                `}
    >
      {/* LEFT  */}
      <div>
        <p className="text-white font-semibold text-lg md:text-lg text-base ">
          EMI {emi.id}
        </p>
        <p className="text-lightblue text-sm md:text-sx">Date: {emi.date}</p>
        <p className="text-lightblue text-sm md:text-sm text-xs">
          Installment ID: {emi.installmentId}
        </p>
      </div>

      {/* CENTER  */}
      <div className="text-center">
        <p className="text-white text-2xl md:text-2xl text-xl font-bold">
          ₹{emi.amount}
        </p>

        {/* Late fee */}
        {/* border-green-400  text-green-400/80  text-sm md:text-xs mt-1 */}

        {/* Late fee */}
        <p className="mt-1 text-sm md:text-sm">
          <span className="text-green-400/70 font-medium">+ ₹200</span>{" "}
          <span className="text-lightblue">late fee</span>
        </p>

        <p className="text-lightblue text-sm md:text-sm text-xs">
          Monthly Installment
        </p>
      </div>

      {/* RIGHT  */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm md:text-sm text-xs font-semibold uppercase">
          {emi.status}
        </p>

        {(emi.status === "PENDING" || emi.status === "UPCOMING") && (
          <button
            onClick={handlePayNow}
            className="
                text-xs md:text-xs
                px-3 py-1
                rounded-md
                bg-secondary text-white
                hover:bg-primary
                transition
            "
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
}
