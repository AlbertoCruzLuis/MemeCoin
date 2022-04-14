import { ToolTipPieChart } from "components/TooltipPieChart"

export const TokenomicsSection = () => {
  return (
    <div className=" bg-primaryPurple-900">
      <h2 className="pt-8 pb-4 text-3xl font-bold text-center text-white">Tokenomics</h2>
      <div className="flex justify-center gap-12 px-4 py-8 xs:flex-col">
        <ToolTipPieChart data={[
          { title: "Airdrop", value: 2, color: "#E38627" },
          { title: "Owner", value: 98, color: "#C13C37" }
        ]} />
        <div className="grid grid-cols-1 p-2 xs:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-white">$FXC</span>
            <span className="text-xs text-neutral-300">Token Symbol</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg text-white">5.000</span>
            <span className="text-xs text-neutral-300">Total Supply</span>
          </div>
        </div>
      </div>
    </div>
  )
}
