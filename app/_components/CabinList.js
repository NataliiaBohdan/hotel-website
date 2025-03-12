// import { unstable_noStore as noStore } from "next/cache";

import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
  // noStore();
  const cabins = await getCabins();
  if (!cabins.length) return null;
  let displayedCabins = cabins;
  if (filter.capacity === "all") {
    displayedCabins = cabins;
  }
  if (filter.capacity === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter.capacity === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  }
  if (filter.capacity === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
