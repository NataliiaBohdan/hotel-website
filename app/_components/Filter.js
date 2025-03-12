"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {[
        { label: "All cabins", value: "all" },
        { label: "1–3 guests", value: "small" },
        { label: "4–7 guests", value: "medium" },
        { label: "8–12 guests", value: "large" },
      ].map(({ label, value }) => (
        <button
          key={value}
          className={`px-5 py-2 hover:bg-primary-700 ${
            activeFilter === value ? "bg-primary-700 text-primary-50" : ""
          }`}
          onClick={() => handleFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
