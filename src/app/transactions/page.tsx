
import { Metadata } from "next";
import TransactionsTable from "./TransactionsTable";

export const metadata: Metadata = {
  title: "Transactions | VLocker",
};

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-transactions-bg)]">
      {/* <main className="container py-24"> */}
      <main className="container pt-40 pb-10">
        <h2 className="mb-10">Transactions</h2>
        <TransactionsTable />
      </main>
    </div>
  );
}
