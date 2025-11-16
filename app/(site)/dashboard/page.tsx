import { DotBackgroundDemo } from "@/components/landing/landing";
import UsersGrid from "./components/UsersGrid";
import BrandsGrid from "./components/BrandsGrid";
import ProfileMenu from "./components/ProfileMenu";
import { ModeToggle } from "./components/ToggleMode";

export default function Dashboard() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Bar */}
      <ModeToggle/>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ProfileMenu />
      </div>
    
      {/* Your Component */}
      <DotBackgroundDemo/>

      {/* Users Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">User Profiles</h2>
        <UsersGrid />
      </section>

      {/* Brands Section */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Brands</h2>
        <BrandsGrid />
      </section>
    </div>
    </>
  );
}
