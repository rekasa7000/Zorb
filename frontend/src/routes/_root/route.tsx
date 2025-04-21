import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_root")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_root/router"!
      <Outlet />
    </div>
  );
}
