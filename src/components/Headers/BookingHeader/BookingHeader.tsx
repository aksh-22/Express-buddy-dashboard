import Search from "src/assets/svg/search.svg";
import Filter from "src/assets/svg/filter.svg";
import classes from "./BookingHeader.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import Status from "../../Status/Status";

import { useEffect, useState } from "react";

export default function BookingHeader() {
  const [isAssigned, setIsAssigned] = useState(true);

  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams({
    type: "",
    bookingType: "",
    status: "PENDING",
    search: "",
  });

  const booking = useLocation().pathname.split("/")[3];

  function handleAssign() {
    setIsAssigned((prevAssigned) => !prevAssigned);

    if (!isAssigned) {
      switch (booking) {
        case "now":
          setSearchParams({ bookingType: "NOW", status: "PENDING" });
          break;

        case "advanced":
          setSearchParams({ bookingType: "ADVANCE", status: "PENDING" });
          break;

        case "later":
          setSearchParams({ bookingType: "LATER", status: "PENDING" });
          break;

        default:
          setSearchParams({ status: "PENDING" });
      }
    } else {
      booking !== "all-bookings"
        ? setSearchParams({ bookingType: booking.toUpperCase() })
        : setSearchParams({});
    }
  }

  const handleOrder = (e: any) => {
    const data: any = {};

    searchParams.get("bookingType")
      ? (data.bookingType = searchParams.get("bookingType"))
      : null;

    if (e.target.value !== "ALL") {
      if (e.target.name === "type") {
        data.type = e.target.value;
        data.status = searchParams.get("status");
      } else {
        data.status = e.target.value;
        data.type = searchParams.get("type");
      }
    } else {
      if (e.target.name === "type") {
        data.status = searchParams.get("status");
      } else {
        data.type = searchParams.get("type");
      }
    }

    setSearchParams(data);

    e.target.value !== "PENDING" && e.target.name === "status"
      ? setIsAssigned(false)
      : setIsAssigned(true);
  };

  const renderHeading = () => {
    switch (searchParams.get("bookingType")) {
      case "NOW":
        return <p className={classes.heading}>Now Booking</p>;

      case "ADVANCE":
        return <p className={classes.heading}>Advanced Booking</p>;

      case "LATER":
        return <p className={classes.heading}>Later Booking</p>;

      default:
        return <p className={classes.heading}>All Bookings</p>;
    }
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(
    function () {
      const data = {
        status: searchParams.get("status"),
        type: searchParams.get("type"),
      };
      searchParams.get("bookingType")
        ? (data.bookingType = searchParams.get("bookingType"))
        : null;
      search.length
        ? setSearchParams({
            ...data,
            search,
          })
        : setSearchParams({
            ...data,
            search: "",
          });
    },
    [search]
  );

  // function debounce  (callback, wait) {
  //   let timer;

  //   const debouncedFunc = () => {
  //      checking whether the waiting time has passed
  //     if (shouldCallCallback(Date.now())) {
  //       callback();
  //     } else {
  //        if time hasn't passed yet, restart the timer
  //       timer = startTimer(callback);
  //     }
  //   }

  //   return debouncedFunc;
  // }

  // const debouncedOnChange = debounce(handleChange, 500);

  const type: any = searchParams?.get("type");
  const status: any =
    searchParams?.get("status") !== null ? searchParams.get("status") : "ALL";

  return (
    <>
      <div className={classes.headerContainer}>
        {renderHeading()}
        <div className={classes.filters}>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className={classes.search}
          />
          <img className={classes.searchIcon} src={Search} alt="Search Icon" />
          <img className={classes.filterIcon} src={Filter} alt="Filter Icon" />
          <p className={classes.para}>Order Type</p>

          <div className={classes.wrapper}>
            <select
              value={type}
              name="type"
              onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="NORMAL">Normal</option>
              <option value="PRIORITY">Priority</option>
            </select>
          </div>
          <p className={classes.para}>Status</p>

          <div className={classes.wrapper}>
            <select
              value={status}
              name="status"
              onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="ASSIGNED">Assigned</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="COMPLETED">Completed</option>
              <option value="DECLINED">Declined</option>
              <option value="OTW">Driver OTW</option>
              <option value="IN_TRANSIT">In Transit</option>
              <option value="CUSTOMER_NO_SHOW">No Show</option>
              <option value="PENDING">Pending</option>
            </select>
          </div>

          <Link className={classes.link} to="">
            <p>Clear Filters</p>
          </Link>
        </div>
        <div className={classes.toggleAssign}>
          <ToggleSwitch toggle={isAssigned} onToggle={handleAssign} />
          <span>To Assign</span>
        </div>
        <div className={classes.toggleAssign}>
          <Status setIsAssigned={setIsAssigned} />
        </div>
        <div className={classes.entries}>
          <span>Show</span>
          <div className={classes.options}>
            <select>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <span>entries</span>
        </div>
      </div>
      <hr />
      <>
        <ul className={classes.listHeaderContainer}>
          <li>Booking ID</li>
          <li>Order Type</li>
          <li>Fees</li>
          <li>Customer</li>
          <li>▼Pick Up Schedule</li>
          <li>▼Created At</li>
          <li>Route</li>
          <li>Assigned To</li>
          <li className={classes.headerLink}>Status</li>
        </ul>
        <hr className={classes.headerRule} />
      </>
    </>
  );
}
