import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TableTabs from "@/components/TableTabs";
import { columns, generateDummyData } from "@/lib/utils";
import DataTable from "@/components/DataTable";
import { TabItem } from "@/types/table";

const meta: Meta<typeof TableTabs> = {
  title: "TableComponent/TableTabs",
  component: TableTabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  globals: {
    backgrounds: { value: "black", grid: false },
  },

  argTypes: {
    onChange: { action: "tabChanged" },
  },
};

export default meta;
type Story = StoryObj<typeof TableTabs>;

const makeTabs = (count = 4, withContent = false): Array<TabItem> =>
  Array.from({ length: count }).map((_, i) => ({
    label: `Tab ${i + 1}`,
    value: `tab${i + 1}`,
    content: withContent ? (
      <DataTable columns={columns} data={generateDummyData()} />
    ) : (
      <></>
    ),
  }));

export const TabsOnly: Story = {
  args: {
    items: makeTabs(4, false),
    defaultValue: "tab1",
  },
};

export const WithContent: Story = {
  args: {
    items: makeTabs(4, true),
    defaultValue: "tab1",
  },
};

export const Disabled: Story = {
  args: {
    items: makeTabs(4, true),
    defaultValue: "tab2",
    disabled: true,
  },
};

export const ManyTabs: Story = {
  args: {
    items: makeTabs(12, false),
    defaultValue: "tab1",
  },
};
