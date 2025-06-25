import NavBar from "@/components/layout/NavBar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { useCheckAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

function RootLayout() {
  const { isLoading } = useCheckAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-gray-900 text-white relative flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-gray-900 text-white relative">
      <NavBar />
      <TanStackRouterDevtools />
      <Outlet />
    </div>
  );
}

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRoute({
  component: RootLayout,
  context: (): RouterContext => ({
    queryClient: new QueryClient(),
  }),
});
