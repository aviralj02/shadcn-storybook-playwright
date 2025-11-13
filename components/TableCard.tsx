import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

type TableCardProps = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children?: ReactNode;
};

const TableCard = ({ children, icon, subtitle, title }: TableCardProps) => {
  const Icon = icon;

  return (
    <Card
      className={cn(
        "p-6 rounded-2xl border border-[#212626] flex flex-col items-start gap-6 bg-[#141919] hover:shadow-[0px_4px_4px_-4px_#00FF800D,0px_12px_12px_-4px_#00FF801A] transition-all"
      )}
      data-testid="table-card"
    >
      <div className="flex items-center gap-3">
        <div className="size-9 bg-[#0A331F] rounded-lg grid place-content-center">
          <Icon className="size-[18px] text-[#00FF80]" />
        </div>

        <div className="flex flex-col">
          <h1
            data-testid="table-card-title"
            className="font-bold text-base leading-[22px] text-[#FAFAFA]"
          >
            {title}
          </h1>
          <h2
            data-testid="table-card-subtitle"
            className="font-normal text-[10px] leading-3.5 text-[#A4A7AE]"
          >
            {subtitle}
          </h2>
        </div>
      </div>

      <>{children}</>
    </Card>
  );
};

export default TableCard;
