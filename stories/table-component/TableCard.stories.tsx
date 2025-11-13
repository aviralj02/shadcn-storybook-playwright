import DataTable from "@/components/DataTable";
import TableCard from "@/components/TableCard";
import TableTabs from "@/components/TableTabs";
import { columns, generateDummyData } from "@/lib/utils";
import { TabItem } from "@/types/table";
import type { Meta, StoryObj } from "@storybook/react";
import { Server } from "lucide-react";

const meta: Meta<typeof TableCard> = {
  title: "TableComponent/TableCard",
  component: TableCard,
  tags: ["autodocs"],
  args: {
    icon: Server,
    title: "Infrastructure Health",
    subtitle: "System monitoring & performance",
    children: (
      <div className="text-[#A4A7AE] text-xs">Table content goes here...</div>
    ),
  },

  parameters: {
    layout: "centered",
  },

  globals: {
    backgrounds: { value: "black", grid: false },
  },
};

export default meta;
type Story = StoryObj<typeof TableCard>;

const data1 = generateDummyData();
const data2 = generateDummyData();
const data3 = generateDummyData();
const data4 = generateDummyData();

const tabs: Array<TabItem> = [
  {
    label: "CEX",
    value: "CEX",
    content: <DataTable columns={columns} data={data1} />,
  },
  {
    label: "DEX",
    value: "DEX",
    content: <DataTable columns={columns} data={data2} />,
  },
  {
    label: "OTC",
    value: "OTC",
    content: <DataTable columns={columns} data={data3} />,
  },
  {
    label: "DARKPOOL",
    value: "DARKPOOL",
    content: <DataTable columns={columns} data={data4} />,
  },
];

export const Default: Story = {
  render: (args) => {
    return (
      <TableCard {...args}>
        <TableTabs items={tabs} defaultValue="CEX" />
      </TableCard>
    );
  },
};

export const CardWithoutContent: Story = {
  render: (args) => {
    return <TableCard {...args} />;
  },
};
