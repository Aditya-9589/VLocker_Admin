"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 10;

const transactions = [
  {
    id: 1,
    name: "Monu Sahu",
    phone: "9898989898",
    amount: "₹30,000",
    emi: "₹10,000",
    tenure: "6 Months",
    status: "Completed",
    date: "05 Feb 2026",
  },
  {
    id: 2,
    name: "Kapil Mishra",
    phone: "9898989898",
    amount: "₹20,000",
    emi: "₹12,000",
    tenure: "6 Months",
    status: "On Going",
    date: "10 Jan 2026",
  },
  {
    id: 3,
    name: "Monu Sahu",
    phone: "9898989898",
    amount: "₹30,000",
    emi: "₹10,000",
    tenure: "6 Months",
    status: "Completed",
    date: "10 Jan 2026",
  },
  {
    id: 4,
    name: "Harsh Parouha",
    phone: "9898989898",
    amount: "₹40,000",
    emi: "₹18,000",
    tenure: "8 Months",
    status: "On Going",
    date: "10 Jan 2026",
  },
  {
    id: 5,
    name: "Harsh Parouha",
    phone: "9898989898",
    amount: "₹40,000",
    emi: "₹18,000",
    tenure: "8 Months",
    status: "On Going",
    date: "10 Jan 2026",
  },
  {
    id: 6,
    name: "Harsh Parouha",
    phone: "9898989898",
    amount: "₹40,000",
    emi: "₹18,000",
    tenure: "8 Months",
    status: "On Going",
    date: "10 Jan 2026",
  },
];

export default function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = transactions.slice(startIndex, endIndex);

  return (
    <div className="bg-tablebg border border-border rounded-2xl shadow-mentor-shadow overflow-hidden">
      {/* TABLE  */}
      <table className="w-full text-left">
        <thead className="bg-darkmode text-lightblue text-sm">
          <tr
            onClick={() => router.push(`transactions/${t.id}`)}
            className="
              border-t border-border
              hover:bg-darkmode/60
              transition
              cursor-pointer
            "
          >
            <th className="px-6 py-4">S. No.</th>
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Loan Amount</th>
            <th className="px-6 py-4">EMI / Tenure</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Date</th>
          </tr>
        </thead>

        <tbody>
          {/* {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-t border-border hover:bg-darkmode/60 transition"
            > */}

          {currentData.map((t) => (
            <tr
              key={t.id}
              onClick={() => router.push(`/transactions/${t.id}`)}
              className="
                  border-t border-border
                  hover:bg-darkmode/60
                  transition
                  cursor-pointer
                "
            >
              <td className="px-6 py-5 text-white">{t.id}</td>

              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center text-white font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{t.name}</p>
                    <p className="text-lightblue text-sm">{t.phone}</p>
                  </div>
                </div>
              </td>

              <td className="px-6 py-5 text-white font-medium">{t.amount}</td>

              <td className="px-6 py-5">
                <p className="text-white">{t.emi}</p>
                <p className="text-lightblue text-sm">{t.tenure}</p>
              </td>

              <td className="px-6 py-5">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    t.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {t.status}
                </span>
              </td>

              <td className="px-6 py-5 text-lightblue">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-6 py-4 border-t border-border text-sm">
        <p className="text-lightblue">
          Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)}{" "}
          of {transactions.length}
        </p>

        <div className="flex items-center gap-2">
          {/* Prev */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 rounded-md border border-border text-lightblue
              disabled:opacity-40 hover:bg-darkmode transition"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md border transition
                  ${
                    currentPage === page
                      ? "bg-secondary text-white border-secondary"
                      : "border-border text-lightblue hover:bg-darkmode"
                  }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 rounded-md border border-border text-lightblue
              disabled:opacity-40 hover:bg-darkmode transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
