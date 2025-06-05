import NavBar from "@/components/layout/NavBar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-gray-900 text-white relative">
      <NavBar />
      <TanStackRouterDevtools />
      <Outlet />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
