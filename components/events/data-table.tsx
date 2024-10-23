"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import { EventDetailsType } from "./columns";
import MobileTable from "./mobile-table";
import DesktopTable from "./desktop-table";

import useWindowSize from "@/hooks/useWindowSize";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [show, setShow] = React.useState(false);
  const [eventData, setEventData] = React.useState<EventDetailsType | null>(
    null
  );

  const windowSize = useWindowSize();

  const mobileColumns = [
    ...columns.filter(
      (column) => column.header == "Event Name" || column.header === "Status"
    ),
  ];

  const table = useReactTable({
    data,
    columns: windowSize === "md" ? mobileColumns : columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="hidden md:block">
        <DesktopTable
          table={table}
          setShowModal={setShow}
          flexRender={flexRender}
          setEventData={setEventData}
          columns={columns}
        />
      </div>

      <div className="block md:hidden">
        <MobileTable
          table={table}
          setShowModal={setShow}
          flexRender={flexRender}
          setEventData={setEventData}
          columns={columns}
        />
      </div>

      <>
        <Dialog open={show} onOpenChange={setShow}>
          <DialogContent className="w-[330px] md:w-[425px] md:max-w-[425px] p-0">
            <DialogHeader className="px-6 py-4 text-left">
              <DialogTitle className="text-[#334155]">
                {eventData?.eventName}
              </DialogTitle>
              <DialogDescription>{eventData?.date}</DialogDescription>
            </DialogHeader>
            <div className="text-sm text-[#334155] px-6 mb-2">
              <p>{eventData?.eventDescription}</p>
              <p className="mt-10">
                <div className="flex mb-1">
                  {eventData?.guestSpeakers?.map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={`assets/avatar-img-${index + 1}.png`}
                        alt={`avatar-img-${index + 1}`}
                      />
                    );
                  })}
                </div>
                {eventData?.guestSpeakers?.length} Guest Speakers:{" "}
                {eventData?.guestSpeakers?.map((speaker, index) => {
                  return (
                    <span key={index}>
                      {speaker}
                      {index + 1 === eventData?.guestSpeakers?.length
                        ? "."
                        : ", "}
                    </span>
                  );
                })}
              </p>
              <p>{eventData?.attendees} Attendees</p>
            </div>
            <DialogFooter className="flex !justify-start bg-[#F8FAFC] px-6 py-4">
              <div className="flex flex-col gap-3 md:flex-row justify-between w-full">
                <button className="bg-white border border-solid border-[#E2E8F0] px-4 py-2 text-[#334155] rounded">
                  Edit
                </button>
                <div className="flex flex-col gap-3 md:flex-row">
                  <button className="bg-[#F43F5E] text-white rounded px-4 py-2">
                    Delete
                  </button>
                  <button className="bg-[#8576FF] text-white rounded px-4 py-2">
                    Mark as completed
                  </button>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
}
