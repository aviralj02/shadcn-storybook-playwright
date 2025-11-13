"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getTableHeaderIcon } from "@/lib/utils";

type DataTableProps<TData, TValue> = {
  columns: Array<ColumnDef<TData, TValue>>;
  data: TData[];
  className?: string;
};

function DataTable<TData, TValue>({
  columns,
  data,
  className,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      data-testid="data-table-container"
      className={cn(
        "overflow-y-auto max-h-[210px] border border-[#212626] rounded-lg scrollbar",
        className
      )}
    >
      <Table data-testid="data-table">
        {/* HEADER */}
        <TableHeader data-testid="data-table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              data-testid="data-table-header-row"
              key={headerGroup.id}
              className="border-b border-[#212626] bg-[#141414] hover:bg-[#141414]"
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  data-testid={`data-table-header-cell-${header.id}`}
                  key={header.id}
                  className="h-[30px] text-[10px] uppercase text-[#A4A7AE] px-4 first:w-[342px] w-[150px]"
                >
                  <span className="flex items-center gap-2">
                    {getTableHeaderIcon(header.id)}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </span>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* BODY */}
        <TableBody className="bg-transparent" data-testid="data-table-body">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow
                data-testid={`data-table-row-${rowIndex}`}
                key={row.id}
                className="border border-[#212626] border-l-0 border-r-0 hover:bg-[#212626]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-0 h-[30px] px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow data-testid="data-table-empty">
              <TableCell
                colSpan={columns.length}
                className="h-[210px] text-center text-[10px] text-[#fafafa]"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
