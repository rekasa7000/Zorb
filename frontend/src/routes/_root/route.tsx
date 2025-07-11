import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useAuthStore } from "@/store/useAuthStore";

export const Route = createFileRoute("/_root")({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: "/signin",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function RouteComponent() {
  return <Outlet />;
}
