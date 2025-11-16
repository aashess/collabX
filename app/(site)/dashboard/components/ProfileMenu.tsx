"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-400 transition"
      >
        <span className="font-bold">P</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border p-2">
          <button
            onClick={() => router.push("/profile")}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
          >
            View Profile
          </button>

          <button
            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
