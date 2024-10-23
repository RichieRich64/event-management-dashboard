"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EventDetailsType = {
  id: string;
  eventName: string;
  date: string;
  speaker: string;
  status: "inProgress" | "completed";
  eventDescription: string;
  guestSpeakers: string[];
  attendees: number;
};

export const columns: ColumnDef<EventDetailsType>[] = [
  {
    accessorKey: "eventName",
    header: "Event Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "speaker",
    header: "Speaker",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div className="font-medium">
          {status === "inProgress" ? (
            <span className="bg-blue-300 text-blue-600 rounded-md p-4 py-2">
              ● In progress
            </span>
          ) : (
            <span className="bg-green-200 text-green-500 rounded-md p-4 py-2">
              ● Completed
            </span>
          )}
        </div>
      );
    },
  },
];
