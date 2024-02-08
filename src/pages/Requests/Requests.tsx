import { Outlet, useLocation } from "react-router-dom";
import RequestHeader from "src/components/Headers/RequestHeader/RequestHeader";

export default function Requests() {
  const location = useLocation();

  return (
    <>
      <>
        {location.pathname.split("/")?.at(3) !== "requestDetails" ? (
          <RequestHeader />
        ) : (
          <Outlet />
        )}
      </>
    </>
  );
}
