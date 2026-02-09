
import { Emi } from "@/app/types/emi";

// interface Props {
//     emi: Emi;
// }

export default function EmiCard({ emi }: { emi: Emi }) {
  const statusStyles = {
    COMPLETED: "border-green-500 bg-green-500/10 text-green-400",
    PENDING: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
    UPCOMING: "border-border bg-darkmode/40 text-lightblue",
  };

  const remarkStyles = {
    ACTIVE: "bg-green-500/20 text-green-400",
    CLOSED: "bg-gray-500/20 text-gray-300",
    DEACTIVATED_DEVICE: "bg-yellow-500/20 text-yellow-400",
    LOCKED_DEVICE: "bg-red-500/20 text-red-400",
  };

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
        <p className="text-white font-semibold text-lg">EMI #{emi.id}</p>
        <p className="text-lightblue text-sm">Date: {emi.date}</p>
        <p>Installment ID: {emi.installmentId}</p>
      </div>

      {/* CENTER  */}
      <div className="text-center">
        <p className="text-white text-2xl font-bold">₹{emi.amount}</p>
        <p className="text-lightblue text-sm">Monthly Installment</p>
      </div>

      {/* RIGHT  */}
      <div>
        {/* <p className="text-sm font-semibold uppercase">Status {emi.status}</p> */}
        <p className="text-sm font-semibold uppercase">{emi.status}</p>
        
        
        {/* <p
          className={`
                        px-3 py-1 rounded-full text-xs font medium ${remarkStyles[emi.remark]}
                    `}
        >
          Remark: {emi.remark.replace("_", " ")}
          {emi.remark.replace("_", " ")}
        </p> */}

      </div>

    </div>
  );
}
