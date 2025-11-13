import { CellValue } from "@/components/CellValue";
import BinanceLogo from "@/components/icons/BinanceLogo";
import { ExchangeStats } from "@/types/table";
import { ColumnDef } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { Activity, Heart, Zap } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const columns: ColumnDef<ExchangeStats>[] = [
  {
    accessorKey: "venue",
    header: "Venue",
    cell: ({ row }) => (
      <CellValue columnKey="venue" value={row.getValue("venue")} />
    ),
  },
  {
    accessorKey: "latency",
    header: "Latency",
    cell: ({ row }) => (
      <CellValue columnKey="latency" value={row.getValue("latency")} />
    ),
  },
  {
    accessorKey: "heartbeat",
    header: "Heartbeat",
    cell: ({ row }) => (
      <CellValue columnKey="heartbeat" value={row.getValue("heartbeat")} />
    ),
  },
  {
    accessorKey: "uptime",
    header: "Uptime",
    cell: ({ row }) => (
      <CellValue columnKey="uptime" value={row.getValue("uptime")} />
    ),
  },
];

export const generateDummyData = (): Array<ExchangeStats> => {
  const data: Array<ExchangeStats> = [];
  for (let i = 0; i < 20; i++) {
    const venue = "Binance";
    const latency = Math.floor(Math.random() * 250) + 50;
    const heartbeat = parseFloat((80 + Math.random() * 20).toFixed(2));
    const uptime = parseFloat((95 + Math.random() * 5).toFixed(2));

    data.push({ venue, latency, heartbeat, uptime });
  }
  return data;
};

export const getTableHeaderIcon = (columnKey: string) => {
  switch (columnKey) {
    case "latency": {
      return <Zap className="size-3 text-[#00FF80]" />;
    }

    case "heartbeat": {
      return <Heart className="size-3 text-[#00FF80]" />;
    }

    case "uptime": {
      return <Activity className="size-3 text-[#00FF80]" />;
    }

    default:
      return null;
  }
};

/**
 * utility for having multiple venues
 */
export const getVenueLogo: Record<string, React.ReactNode> = {
  Binance: <BinanceLogo />,
};
