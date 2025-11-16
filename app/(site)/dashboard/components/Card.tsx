"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <>
    <div className="max-w-sm w-full bg-[#15202B] rounded-2xl overflow-hidden shadow-lg border border-gray-700">
      {/* Banner */}
      <div className="relative h-32 w-full">
        <Image
          src="/banner.jpg" // Replace with your banner image URL
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Avatar */}
      <div className="relative px-6">
        <div className="absolute -top-10">
          <Image
            src="/avatar.png" // replace with your avatar URL
            alt="Avatar"
            width={80}
            height={80}
            className="rounded-full border-4 border-[#15202B]"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mt-10 px-6 pb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-white">Stas Neprokin</h2>
          <span className="text-blue-400 text-xl">✔️</span>
        </div>

        <p className="text-gray-400 -mt-1">@sneprokin</p>

        <p className="text-gray-200 mt-3">
          Designing Products that Users Love
        </p>

        {/* Info section */}
        <div className="mt-4 space-y-1 text-gray-400 text-sm">
          <p className="flex items-center gap-2">
            <span>💼</span> Entrepreneur
          </p>
          <p className="flex items-center gap-2">
            <span>🌍</span> Earth
          </p>
          <p className="flex items-center gap-2">
            <span>🌐</span>
            <a href="https://neprokin.com" className="text-blue-400 hover:underline">
              neprokin.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span>🎂</span> Born November 7, 1987
          </p>
          <p className="flex items-center gap-2">
            <span>📅</span> Joined November 2010
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-4 mt-4 text-gray-300 text-sm">
          <span>
            <b className="text-white">143</b> Following
          </span>
          <span>
            <b className="text-white">149</b> Followers
          </span>
        </div>
      </div>
</div>
    </>
  );
}
