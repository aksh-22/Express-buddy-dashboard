import { Outlet, useLocation } from "react-router-dom";
import PendingDriverHeader from "src/components/Headers/DriverHeader/PendingDriverHeader/PendingDriverHeader";

export default function Pending() {
  const location = useLocation();
  return (
    <>
      {location.pathname.split("/")?.at(4) !== "pendingDetails" ? (
        <PendingDriverHeader />
      ) : (
        <Outlet />
      )}
    </>
  );
}
