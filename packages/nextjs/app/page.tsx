"use client";

import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export default function Home() {
  const { data: proposals } = useScaffoldReadContract({
    contractName: "Voting",
    functionName: "getProposals",
  });

  const { writeContractAsync, isMining } = useScaffoldWriteContract({ contractName: "Voting" });

  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <h1 className="text-3xl font-bold">Децентрализованное голосование</h1>

      {proposals?.map((p, i) => (
        <div key={i} className="flex items-center gap-4 border p-4 rounded-xl">
          <span className="font-semibold">{p.description}</span>
          <span>Голосов: {p.voteCount.toString()}</span>
          <button
            className="btn btn-primary btn-sm"
            disabled={isMining}
            onClick={() => writeContractAsync({ functionName: "vote", args: [BigInt(i)] })}
          >
            Голосовать
          </button>
        </div>
      ))}
    </div>
  );
}
