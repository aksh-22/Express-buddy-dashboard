import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Auth/RequireAuth";
import Home from "./pages/Home/Home";
import Customers from "./pages/Customers/Customers";
import Dashboard from "./components/Dashboard/Dashboard";
import Ratings from "./pages/Ratings/Ratings";
import Promotional from "./pages/Promotional/Promotional";
import Reports from "./pages/Reports/Reports";
import Bookings from "./pages/Bookings/Bookings";
import Current from "./pages/Partners/Current";
import Pending from "./pages/Partners/Pending";
import Paid from "./pages/Payment/Paid";
import Received from "./pages/Payment/Received";
import AllAdmins from "./pages/AdminSettings/AllAdmins";
import RoleFunction from "./pages/AdminSettings/RoleFunction";
import AddAdmin from "./pages/AdminSettings/AddAdmin";
import Requests from "./pages/Requests/Requests";
import CustomerNotification from "./pages/Notification/CustomerNotification/CustomerNotification";
import PartnerNotification from "./pages/Notification/PartnerNotification/PartnerNotification";
import CustomerEnquiry from "./pages/Enquiry/CustomerEnquiry/CustomerEnquiry";
import PartnerEnquiry from "./pages/Enquiry/PartnerEnquiry/PartnerEnquiry";
import Pages from "./pages/Settings/Pages/Pages";
import Holidays from "./pages/Settings/Holidays/Holidays";
import Pricing from "./pages/Settings/Pricing/Pricing";
import { bookingLoader } from "src/pages/Bookings/booking.loader";
import BookingDetails from "./pages/BookingDetails/BookingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "booking",
        children: [
          {
            path: "all-bookings",
            element: <Bookings />,
            loader: bookingLoader,
            errorElement: <div>Oops! There was an error.</div>,
            children: [
              {
                path: ":id",
                element: <BookingDetails />,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ],
          },
          {
            path: "now",
            element: <Bookings />,
            loader: bookingLoader,
            errorElement: <div>Oops! There was an error.</div>,
            children: [
              {
                path: ":id",
                element: <BookingDetails />,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ],
          },
          {
            path: "advanced",
            element: <Bookings />,
            loader: bookingLoader,
            errorElement: <div>Oops! There was an error.</div>,
            children: [
              {
                path: ":id",
                element: <BookingDetails />,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ],
          },
          {
            path: "later",
            element: <Bookings />,
            loader: bookingLoader,
            errorElement: <div>Oops! There was an error.</div>,
            children: [
              {
                path: ":id",
                element: <BookingDetails />,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ],
          },
        ],
      },
      {
        path: "customer",
        element: <Customers />,
      },
      {
        path: "driver",
        children: [
          {
            path: "current",
            element: <Current />,
          },
          {
            path: "pending",
            element: <Pending />,
          },
        ],
      },
      {
        path: "ratings",
        element: <Ratings />,
      },
      {
        path: "transactions",

        children: [
          {
            path: "paid",
            element: <Paid />,
          },
          {
            path: "received",
            element: <Received />,
          },
        ],
      },
      {
        path: "user-settings",

        children: [
          {
            path: "alluser",
            element: <AllAdmins />,
          },
          {
            path: "add-admin",
            element: <AddAdmin />,
          },
          {
            path: "roles",
            element: <RoleFunction />,
          },
        ],
      },
      {
        path: "promotional",
        element: <Promotional />,
      },
      {
        path: "notification",

        children: [
          {
            path: "user",
            element: <CustomerNotification />,
          },
          {
            path: "partner",
            element: <PartnerNotification />,
          },
        ],
      },
      {
        path: "enquiry",

        children: [
          {
            path: "user",
            element: <CustomerEnquiry />,
          },
          {
            path: "partner",
            element: <PartnerEnquiry />,
          },
        ],
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "setting",

        children: [
          {
            path: "pages",
            element: <Pages />,
          },
          {
            path: "holidays",
            element: <Holidays />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
        ],
      },
      {
        path: "requests",
        element: <Requests />,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
