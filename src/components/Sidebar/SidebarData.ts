import Order from "src/assets/svg/orderManagement.svg";
import Customers from "src/assets/svg/customers.svg";
import Partners from "src/assets/svg/partners.svg";
import Ratings from "src/assets/svg/Ratings.svg";
import Payment from "src/assets/svg/payment.svg";
import Settings from "src/assets/svg/settings.svg";
import Promotional from "src/assets/svg/promotional.svg";
import { IoIosNotifications } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import Reports from "src/assets/svg/reports.svg";
import { TbArrowsLeftRight } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";

export const SidebarData: any = [
  {
    id: "booking",
    text: "Booking Management",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "booking",
    imgPath: Order,
    alt: "Booking Management Icon",
    child: [
      {
        id: "booking/all-bookings",
        text: "All Bookings",
        path: "booking/all-bookings?status=PENDING",
      },
      {
        id: "booking/now",
        text: "Now Bookings",
        defaultPath: "now",
        path: "booking/now?bookingType=NOW&status=PENDING",
      },
      {
        id: "booking/advanced",
        text: "Advanced Bookings",
        defaultPath: "advance",
        path: "booking/advanced?bookingType=ADVANCE&status=PENDING",
      },
      {
        id: "booking/later",
        text: "Later Bookings",
        defaultPath: "later",
        path: "booking/later?bookingType=LATER&status=PENDING",
      },
    ],
  },
  {
    id: "customer",
    text: "Customers",
    style: "sidebar",
    tabStyle: "filledActive",
    path: "customer",
    imgPath: Customers,
    alt: "Customers Icon",
    child: [],
  },
  {
    id: "driver",
    text: "Partners",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "driver",
    imgPath: Partners,
    alt: "Partners Icon",
    child: [
      {
        id: "driver/current",
        text: "Current",
        path: "driver/current",
      },
      {
        id: "driver/pending",
        text: "Pending",
        path: "driver/pending",
      },
    ],
  },
  {
    id: "ratings",
    text: "Ratings",
    style: "sidebar",
    tabStyle: "filledActive",
    path: "ratings",
    imgPath: Ratings,
    alt: "Ratings Icon",
    child: [],
  },
  {
    id: "transactions",
    text: "Payment",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "transactions",
    imgPath: Payment,
    alt: "Payment Icon",
    child: [
      {
        id: "transactions/paid",
        text: "Paid",
        path: "transactions/paid",
      },
      {
        id: "transactions/received",
        text: "Received",
        path: "transactions/received",
      },
    ],
  },
  {
    id: "user-settings",
    text: "Admin Settings",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "user-settings",
    imgPath: Settings,
    alt: "Settings Icon",
    child: [
      {
        id: "user-settings/alluser",
        text: "All Admins",
        path: "user-settings/alluser",
      },
      {
        id: "user-settings/roles",
        text: "Role Function",
        path: "user-settings/roles",
      },
      {
        id: "user-settings/add-admin",
        text: "Add New Admin",
        path: "user-settings/add-admin",
      },
    ],
  },
  {
    id: "promotional",
    text: "Promotional",
    style: "sidebar",
    tabStyle: "filledActive",
    path: "promotional",
    imgPath: Promotional,
    alt: "Promotional Icon",
    child: [],
  },
  {
    id: "notifications",
    text: "Notifications",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "notification",
    imgpath: "",
    RIcons: IoIosNotifications,
    alt: "Notification Icon",
    child: [
      {
        id: "notification/user",
        text: "Customer",
        path: "notification/user",
      },
      {
        id: "notification/partner",
        text: "Partner",
        path: "notification/partner",
      },
    ],
  },
  {
    id: "enquiry",
    text: "Enquiry",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "enquiry",
    imgPath: "",
    RIcons: FaListAlt,
    alt: "Enquiry Icon",
    child: [
      {
        id: "enquiry/user",
        text: "Customer",
        path: "enquiry/user",
      },
      {
        id: "enquiry/partner",
        text: "Partner",
        path: "enquiry/partner",
      },
    ],
  },
  {
    id: "reports",
    text: "Reports",
    style: "sidebar",
    tabStyle: "filledActive",
    path: "reports",
    imgPath: Reports,
    alt: "Reports Icon",
    child: [],
  },
  {
    id: "setting",
    text: "Settings",
    style: "sidebar",
    tabStyle: "outlineActive",
    path: "setting",
    imgPath: Settings,
    alt: "Settings Icon",
    child: [
      {
        id: "setting/pages",
        text: "Pages",
        path: "setting/pages",
      },
      {
        id: "setting/holidays",
        text: "Public Holidays",
        path: "setting/holidays",
      },
      {
        id: "setting/pricing",
        text: "Pricing",
        path: "setting/pricing",
      },
    ],
  },
  {
    id: "requests",
    text: "Requests",
    style: "sidebar",
    tabStyle: "filledActive",
    path: "requests",
    imgPath: "",
    RIcons: TbArrowsLeftRight,
    alt: "Requests Icon",
    child: [],
  },
  {
    id: "logout",
    text: "Logout",
    style: "sidebar",
    tabStyle: "filledActive",
    imgPath: "",
    RIcons: TbLogout,
    alt: "Logout Icon",
    path: "",
    child: [],
  },
];
