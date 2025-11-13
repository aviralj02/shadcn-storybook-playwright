"use client";

import BasicButton from "@/components/BasicButton";
import DataTable from "@/components/DataTable";
import TableCard from "@/components/TableCard";
import TableTabs from "@/components/TableTabs";
import { columns, generateDummyData } from "@/lib/utils";
import { ExchangeStats, TabItem } from "@/types/table";
import { Server } from "lucide-react";
import { useEffect, useState } from "react";

const ClientPage = () => {
  const [data, setData] = useState<Record<string, Array<ExchangeStats>>>({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
  });

  useEffect(() => {
    setData({
      data1: generateDummyData(),
      data2: generateDummyData(),
      data3: generateDummyData(),
      data4: generateDummyData(),
    });
  }, []);

  const tabOptions: Array<TabItem> = [
    {
      label: "CEX",
      value: "CEX",
      content: <DataTable columns={columns} data={data.data1} />,
    },
    {
      label: "DEX",
      value: "DEX",
      content: <DataTable columns={columns} data={data.data2} />,
    },
    {
      label: "OTC",
      value: "OTC",
      content: <DataTable columns={columns} data={data.data3} />,
    },
    {
      label: "DARKPOOL",
      value: "DARKPOOL",
      content: <DataTable columns={columns} data={data.data4} />,
    },
  ];
  return (
    <div className="w-full mt-10 flex flex-col items-center gap-40">
      <div className="grid grid-cols-2 gap-4 mx-auto w-fit">
        <BasicButton data-testid="primary-btn" variant="primary">
          Basic
        </BasicButton>
        <BasicButton data-testid="secondary-btn" variant="secondary">
          Basic
        </BasicButton>
        <BasicButton data-testid="destructive-btn" variant="destructive">
          Basic
        </BasicButton>
        <BasicButton data-testid="disabled-btn" variant="primary" disabled>
          Basic
        </BasicButton>
      </div>

      <div className="w-fit">
        <TableCard
          icon={Server}
          title="Infrastructure Health"
          subtitle="System monitoring & performance"
        >
          <TableTabs items={tabOptions} defaultValue={"CEX"} />
        </TableCard>
      </div>
    </div>
  );
};

export default ClientPage;
