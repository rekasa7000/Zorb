import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Settings, Zap } from "lucide-react";

export const Route = createFileRoute("/(auth)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-gray-900 text-white relative overflow-hidden">
      <nav className="relative z-10 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">Zorb</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 gap-2">
          <Settings /> Settings
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
