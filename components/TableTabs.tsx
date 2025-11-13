"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabItem } from "@/types/table";

type TableTabsProps = {
  items: Array<TabItem>;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

const TableTabs = ({
  items,
  defaultValue,
  onChange,
  disabled,
}: TableTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue ?? items[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <Tabs
      data-testid="table-tabs"
      defaultValue={activeTab}
      value={activeTab}
      onValueChange={handleTabChange}
      className={cn("max-w-[800px] w-full")}
    >
      <div className="w-full overflow-x-auto scrollbar-hide rounded-lg mb-4">
        <TabsList
          className={cn(
            `bg-[#141414] rounded-lg gap-1 `,
            disabled && "cursor-not-allowed"
          )}
        >
          {items.map((item) => (
            <TabsTrigger
              data-testid={`tab-trigger-${item.value.toLowerCase()}`}
              key={item.value}
              disabled={disabled}
              value={item.value}
              className={cn(
                `w-[195px] shrink-0 truncate text-[#A4A7AE] leading-3.5 tracking-0 text-[10px] flex items-center justify-center rounded-md h-full font-normal transition-all ease-in-out hover:font-medium hover:bg-[#292524] hover:text-[#FAFAFA]`,
                activeTab === item.value && `font-medium text-[#FAFAFA]`,
                !disabled && "cursor-pointer"
              )}
              style={{
                backgroundColor: activeTab === item.value ? "#141919" : "",
              }}
              aria-selected={activeTab === item.value}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          data-testid={`tab-panel-${item.value.toLowerCase()}`}
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TableTabs;
