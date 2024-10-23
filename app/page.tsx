import BarChart from "@/components/Chart";
import Carousel from "@/components/Carousel";
import StatCard from "@/components/StatCard";
import ArrowDown from "@/components/svg/ArrowRedDown";
import ArrowUp from "@/components/svg/ArrowGreenUp";
import TableComp from "@/components/TableComp";

const slides2 = [
  {
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    imgUrl: "/assets/slide-img-1.png",
  },
  {
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    imgUrl: "/assets/slide-img-2.png",
  },
  {
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    imgUrl: "/assets/slide-img-3.png",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mb-6">
        <h2 className="mb-3 text-[22px]">Welcome! here is your summary</h2>
        <div className="flex flex-col md:flex-row gap-2">
          <StatCard
            title="Total Events"
            value="100,000"
            primaryIcon={<ArrowUp />}
            changePercentage="+5.0%"
          />
          <StatCard
            title="Active Speakers"
            value="25"
            primaryIcon={<ArrowDown />}
            changePercentage="-5.0%"
          />
          <StatCard
            title="Total Registrations"
            value="300"
            primaryIcon={<ArrowUp />}
            changePercentage="+5.0%"
          />
          <StatCard
            title="Total Revenue"
            value="$500,000"
            primaryIcon={<ArrowUp />}
            changePercentage="+5.0%"
          />
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">
          Event Registrations per month
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-6/12">
            <BarChart />
          </div>
          <div className="w-full md:w-6/12 max-w-[510px]">
            <Carousel items={slides2} />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-medium mb-1">Event History</h2>
        <TableComp />
      </section>
    </div>
  );
}
