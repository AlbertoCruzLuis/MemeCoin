import { useState, ComponentProps } from "react"
import ReactTooltip from "react-tooltip"
import { PieChart } from "react-minimal-pie-chart"

type Props = {
  data: ComponentProps<typeof PieChart>["data"];
}

function makeTooltipContent (entry: Props["data"][0]) {
  return `${entry.tooltip} - ${entry.value}%`
}

export const ToolTipPieChart = (props: Props) => {
  const [hovered, setHovered] = useState<number | null>(null)
  const data = props.data.map(({ title, ...entry }) => {
    return {
      ...entry,
      tooltip: title
    }
  })

  return (
    <div data-tip="" data-for="chart">
      <PieChart
        className="w-[20rem] xs:w-[15rem] mx-auto"
        data={data}
        lineWidth={30}
        paddingAngle={10}
        onMouseOver={(_, index) => {
          setHovered(index)
        }}
        onMouseOut={() => {
          setHovered(null)
        }}
      />
      <ReactTooltip
        id="chart"
        type="light"
        getContent={() =>
          typeof hovered === "number" ? makeTooltipContent(data[hovered]) : null
        }
      />
    </div>
  )
}
