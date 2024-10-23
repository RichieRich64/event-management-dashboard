/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ArrowDown from "@/components/svg/ArrowDown";
import MoreVertical from "@/components/svg/MoreVerticalIcon";
import DownloadIcon from "@/components/svg/DownloadIcon";
import SearchIcon from "../svg/SearchIcon";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EventDetailsType } from "./columns";
import ArrowRight from "../svg/ArrowRight";
import ArrowLeft from "../svg/ArrowLeft";
import { useTheme } from "next-themes";

type MobileTableProps = {
  table: any;
  flexRender: any;
  columns: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventData: React.Dispatch<React.SetStateAction<EventDetailsType | null>>;
};

const MobileTable = ({
  table,
  flexRender,
  columns,
  setShowModal,
  setEventData,
}: MobileTableProps) => {
  const { theme } = useTheme();

  return (
    <div className="py-4">
      <div className="mb-2">
        <div className="flex items-center gap-2 border px-3 py-2 mb-2 rounded dark:bg-[#484554] dark:border-none">
          <SearchIcon />
          <input
            placeholder="Search..."
            className="border-none outline-none bg-inherit placeholder-[#CBD5E1]"
          />
        </div>
        <div
          className="py-2 px-4 border rounded flex gap-3 cursor-pointer items-center justify-center mb-3 dark:bg-[#484554] dark:border-none"
          onClick={() => {
            const dateColumn = table.getColumn("date");
            dateColumn?.toggleSorting(dateColumn.getIsSorted() === "asc");
          }}
        >
          Date
          <ArrowDown color={theme === "dark" ? "white" : null} />
        </div>
        <div
          className="py-2 px-4 border rounded flex gap-3 cursor-pointer items-center justify-center mb-3 dark:bg-[#484554] dark:border-none"
          onClick={() => {
            const statusColumn = table.getColumn("status");
            statusColumn?.toggleSorting(statusColumn.getIsSorted() === "asc");
          }}
        >
          Status
          <ArrowDown color={theme === "dark" ? "white" : null} />
        </div>
        <div
          className="py-2 px-4 border rounded flex gap-3 cursor-pointer items-center justify-center mb-3 dark:bg-[#484554] dark:border-none"
          onClick={() => {
            const speakerColumn = table.getColumn("eventName");
            speakerColumn?.toggleSorting(speakerColumn.getIsSorted() === "asc");
          }}
        >
          Name
          <ArrowDown color={theme === "dark" ? "white" : null} />
        </div>
        <p className="font-semibold">
          Displaying {table.getFilteredRowModel().rows.length} results
        </p>
      </div>
      <div className="">
        <div
          className="flex gap-2 items-center justify-between cursor-pointer mb-3"
          onClick={() => {
            const emailColumn = table.getColumn("date");
            emailColumn?.toggleSorting(emailColumn.getIsSorted() === "asc");
          }}
        >
          Sort:
          <div className="py-2 px-4 border rounded flex gap-3 items-center dark:bg-[#484554] dark:border-none">
            Most recent
            <ArrowDown color={theme === "dark" ? "white" : null} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="py-3 px-4 border rounded dark:bg-[#484554] dark:border-none">
            <MoreVertical color={theme === "dark" ? "white" : null} />
          </div>
          <div className="py-2 px-4 border rounded flex gap-3 items-center dark:bg-[#484554] dark:border-none">
            <DownloadIcon color={theme === "dark" ? "white" : null} />
            Export
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Table>
          <TableHeader className="bg-[#F1F5F9] text-xs dark:bg-[#6A6676]">
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <TableHead key={header.id} className="font-semibold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="dark:bg-[#484554]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer !border-none"
                >
                  {row.getVisibleCells().map((cell: any) => (
                    <TableCell
                      key={cell.id}
                      onClick={() => {
                        console.log("row", row);
                        setEventData(row.original);
                        setShowModal(true);
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-6">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-[#E2E8F0] p-4 rounded dark:bg-[#484554] dark:border-none"
          >
            <ArrowLeft />
          </button>
          <div className="flex items-center gap-6">
            {Array.from({ length: table.getPageCount() }).map((_, index) => (
              <button
                key={index}
                onClick={() => table.setPageIndex(index)}
                disabled={table.getState().pagination.pageIndex === index}
                className={`${
                  table.getState().pagination.pageIndex === index &&
                  "text-white rounded-full bg-[#8576FF] h-8 w-8"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border p-4 rounded dark:bg-[#484554] dark:border-none"
          >
            <ArrowRight />
          </button>
        </div>
        <div className="flex gap-2 items-center relative">
          Show:
          <select
            value={table.getPageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="p-3 pr-8 border cursor-pointer outline-none rounded dark:bg-[#484554] dark:border-none"
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} rows
              </option>
            ))}
          </select>
          <span className="absolute right-4">
            <ArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileTable;
