import { Outlet } from "react-router-dom";


export function Layout() {
  return (
    <div>
      <section className="bg-amber-200 flex justify-center">
        <Outlet />
      </section>
    </div>
  );
}