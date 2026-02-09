import EmiList from "./components/EmiList";

export async function generateStaticParams() {
  // TEMP: static IDs (later from API / DB)
  const transactionIds = [1, 2, 3, 4, 5, 6];

  return transactionIds.map((id) => ({
    id: id.toString(),
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function TransactionDetails({ params }: PageProps) {
  const transactionId = params.id;

  // dummy EMI data for now
  const emis = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    amount: 6500,
    date: `03 Sep 2025`,
    installmentId: 199 + i,
    status: i < 6 ? "COMPLETED" : i == 6 ? "PENDING" : "UPCOMING",

    remark: i < 6 ? "ACTIVE" : i === 6 ? "LOCKED_DEVICE" : "DEACTIVATED_DEVICE",
  }));

  return (
    <main className="bg-body-bg min-h-screen">
      <div className="container pt-40 pb-18">
        <h2 className="mb-8">Transaction #{transactionId}</h2>

        <EmiList emis={emis} />
      </div>
    </main>
  );
}
