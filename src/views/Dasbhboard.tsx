"use client";

import { Selector } from "@/components/Selector/Selector";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { InputCsv } from "@/components/InputCsv/InputCsv";

import { CoordinateTable } from "@/components/CoordinateTable/CoordinateTable";
import { OperationalButtons } from "@/components/OperationalButtons/OperationalButtons";
import { Divider } from "@/components/Divider/Divider";

// const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Dashboard() {
  const {
    decimalPlacesXY,
    setDecimalPlacesXY,
    decimalPlacesZ,
    setDecimalPlacesZ,
    separator,
    setSeparator,
    points,
  } = useDashboardContext();

  return (
    <div className="p-6 space-y-4 max-w-[1000px] mx-auto">
      <InputCsv />
      <Divider />
      {points.length > 0 && (
        <div >
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-items-center gap-4 mx-auto max-w-[800px] ">
            <Selector
              placeholder="Separator"
              options={[",", ";", "space"]}
              value={separator}
              onValueChange={(value) => setSeparator(value)}
            />
            <Selector
              placeholder="Decimal Places X/Y"
              options={["0", "1", "2", "3"]}
              value={decimalPlacesXY.toString()}
              onValueChange={(value) => setDecimalPlacesXY(parseInt(value))}
            />
            <Selector
              placeholder="Decimal Places Z"
              options={["0", "1", "2", "3"]}
              value={decimalPlacesZ.toString()}
              onValueChange={(value) => setDecimalPlacesZ(parseInt(value))}
            />
          </div>
          <CoordinateTable />
          <Divider />
          <OperationalButtons />
        </div>
      )}
    </div>
  );
}
