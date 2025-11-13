import type { Meta, StoryObj } from "@storybook/react";
import { columns, generateDummyData } from "@/lib/utils";
import DataTable from "@/components/DataTable";
import { ExchangeStats } from "@/types/table";

const meta: Meta<typeof DataTable<ExchangeStats, unknown>> = {
  title: "TableComponent/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    columns,
    data: generateDummyData(),
  },

  globals: {
    backgrounds: { value: "black", grid: false },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable<ExchangeStats, unknown>>;

export const Default: Story = {
  args: {
    columns,
    data: generateDummyData(),
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};

export const LargeDataset: Story = {
  args: {
    columns,
    data: Array.from({ length: 100 }).map(() => ({
      venue: "Binance",
      latency: Math.floor(Math.random() * 300),
      heartbeat: 85 + Math.random() * 10,
      uptime: 95 + Math.random() * 5,
    })),
  },
};

export const MultipleVenues: Story = {
  args: {
    columns,
    data: Array.from({ length: 10 }).map(() => ({
      venue: ["Binance", "Coinbase", "Kraken", "Gemini"][
        Math.floor(Math.random() * 4)
      ],
      latency: Math.floor(Math.random() * 250) + 50,
      heartbeat: parseFloat((80 + Math.random() * 20).toFixed(2)),
      uptime: parseFloat((95 + Math.random() * 5).toFixed(2)),
    })),
  },
};
