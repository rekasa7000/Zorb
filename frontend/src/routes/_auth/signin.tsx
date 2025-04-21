import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/signin")({
  
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(auth)/signin"!</div>;
}
