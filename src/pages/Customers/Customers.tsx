import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import CustomerHeader from "src/components/Headers/CustomerHeader";

export default function Customers() {
  const location = useLocation();

  return (
    <>
      {location.pathname.split("/")?.at(3) !== "customerDetails" ? (
        <CustomerHeader />
      ) : (
        <Outlet />
      )}
    </>
  );
}
