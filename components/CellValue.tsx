"use client";

import { cn, getVenueLogo } from "@/lib/utils";

type CellValueProps = {
  value: unknown;
  columnKey: string;
};

export function CellValue({ value, columnKey }: CellValueProps) {
  if (value === null || value === undefined) return <span>-</span>;

  const baseStyles =
    "text-[#FAFAFA] font-medium text-[10px] leading-3.5 uppercase tracking-normal";

  switch (columnKey) {
    case "latency": {
      const latency = Number(value);
      return (
        <span className={baseStyles}>
          {latency} <span className="lowercase">ms</span>
        </span>
      );
    }

    case "heartbeat": {
      const heartbeat = Number(value);
      return <span className={baseStyles}>{heartbeat}%</span>;
    }

    case "uptime": {
      const uptime = Number(value);
      return <span className={baseStyles}>{uptime}%</span>;
    }

    case "venue":
      return (
        <span
          className={cn(baseStyles, "flex items-center justify-start gap-2")}
        >
          {getVenueLogo[String(value)]}
          {String(value)}
        </span>
      );

    default:
      return <span className={baseStyles}>{String(value)}</span>;
  }
}
