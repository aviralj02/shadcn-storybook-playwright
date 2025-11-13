import { CellValue } from "@/components/CellValue";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CellValue> = {
  title: "TableComponent/CellValue",
  component: CellValue,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  globals: {
    backgrounds: { value: "black", grid: false },
  },
  argTypes: {
    columnKey: {
      control: "select",
      options: ["venue", "latency", "heartbeat", "uptime", "default"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CellValue>;

export const DefaultValue: Story = {
  args: {
    columnKey: "default",
    value: "Generic Text",
  },
};

export const Venue: Story = {
  args: {
    columnKey: "venue",
    value: "Binance",
  },
};

export const Latency: Story = {
  args: {
    columnKey: "latency",
    value: 125,
  },
};

export const Percentage: Story = {
  args: {
    columnKey: "heartbeat",
    value: 92.5,
  },
};
