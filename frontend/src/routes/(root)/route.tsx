import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(root)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/(root)"!
      <Outlet />
    </div>
  );
}
