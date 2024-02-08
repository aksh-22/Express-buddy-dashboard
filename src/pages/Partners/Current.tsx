import { Outlet, useLocation } from "react-router-dom";
import CurrentDriverHeader from "src/components/Headers/DriverHeader/CurrentDriverHeader/CurrentDriverHeader";

export default function Current() {
  const location = useLocation();

  return (
    <>
      {location.pathname.split("/")?.at(4) !== "currentDetails" ? (
        <CurrentDriverHeader />
      ) : (
        <Outlet />
      )}
    </>
  );
}
