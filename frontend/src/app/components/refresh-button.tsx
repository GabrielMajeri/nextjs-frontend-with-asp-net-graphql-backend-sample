"use client";

import { revalidateHomePage } from "../actions";

export default function RefreshButton() {
  return (
    <button
      onClick={async () => await revalidateHomePage()}
      className="mt-6 border rounded-md px-3 pt-1 pb-2 cursor-pointer hover:bg-gray-300 active:bg-gray-400"
    >
      Refresh
    </button>
  );
}
