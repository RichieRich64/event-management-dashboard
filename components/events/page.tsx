import { EventDetailsType, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<EventDetailsType[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      eventName: "Cloud Innovation Summit",
      date: "2024-10-15",
      speaker: "Jane Doe",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik", "John Lee"],
      attendees: 300,
    },
    {
      id: "2",
      eventName: "Blockchain Revolution Conference",
      date: "2024-11-15",
      speaker: "Dr. Peter Smith",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 200,
    },
    {
      id: "3",
      eventName: "AI in Healthcare Symposium",
      date: "2024-10-25",
      speaker: "Dr. Aisha Malik",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik", "John Lee"],
      attendees: 400,
    },
    {
      id: "4",
      eventName: "Future of Fintech Forum",
      date: "2024-10-15",
      speaker: "John Lee",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik", "Kevin Adams"],
      attendees: 250,
    },
    {
      id: "5",
      eventName: "Data Analytics in Business",
      date: "2024-11-12",
      speaker: "Rachael Moore",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 150,
    },
    {
      id: "6",
      eventName: "Sustainable Energy Expo",
      date: "2024-09-28",
      speaker: "Prof. Alan Green",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 200,
    },
    {
      id: "7",
      eventName: "Web3 Interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 320,
    },
    {
      id: "8",
      eventName: "Cybersecurity for Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik", "Maria Hernandez"],
      attendees: 340,
    },
    {
      id: "9",
      eventName: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 100,
    },
    {
      id: "10",
      eventName: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 170,
    },
    {
      id: "11",
      eventName: "Web3 Interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 290,
    },
    {
      id: "12",
      eventName: "Cybersecurity for Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 450,
    },
    {
      id: "13",
      eventName: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 100,
    },
    {
      id: "14",
      eventName: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 230,
    },
    {
      id: "15",
      eventName: "Cloud Innovation Summit",
      date: "2024-10-15",
      speaker: "Jane Doe",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik", "John Lee"],
      attendees: 300,
    },
    {
      id: "16",
      eventName: "Blockchain Revolution Conference",
      date: "2024-11-15",
      speaker: "Dr. Peter Smith",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 200,
    },
    {
      id: "17",
      eventName: "AI in Healthcare Symposium",
      date: "2024-10-25",
      speaker: "Dr. Aisha Malik",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Maria Hernandez"],
      attendees: 400,
    },
    {
      id: "18",
      eventName: "Future of Fintech Forum",
      date: "2024-10-15",
      speaker: "John Lee",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 250,
    },
    {
      id: "19",
      eventName: "Data Analytics in Business",
      date: "2024-11-12",
      speaker: "Rachael Moore",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 150,
    },
    {
      id: "20",
      eventName: "Sustainable Energy Expo",
      date: "2024-09-28",
      speaker: "Prof. Alan Green",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 200,
    },
    {
      id: "21",
      eventName: "Web3 Interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 320,
    },
    {
      id: "22",
      eventName: "Cybersecurity for Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 340,
    },
    {
      id: "23",
      eventName: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 100,
    },
    {
      id: "24",
      eventName: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik", "John Doe"],
      attendees: 170,
    },
    {
      id: "25",
      eventName: "Web3 Interfaces Workshop",
      date: "2024-10-10",
      speaker: "Kevin Adams",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 290,
    },
    {
      id: "26",
      eventName: "Cybersecurity for Startups",
      date: "2024-11-19",
      speaker: "Emily Zhang",
      status: "completed",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 450,
    },
    {
      id: "27",
      eventName: "Smart Cities Forum",
      date: "2024-10-18",
      speaker: "Dr. Maria Hernandez",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 100,
    },
    {
      id: "28",
      eventName: "Tech Safari Mixer",
      date: "2024-09-30",
      speaker: "Guest Panel",
      status: "inProgress",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, natus",
      guestSpeakers: ["Peter Smith", "Aisha Malik"],
      attendees: 230,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto pb-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
