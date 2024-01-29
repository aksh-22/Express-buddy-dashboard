import Search from "src/assets/svg/search.svg";
import Filter from "src/assets/svg/filter.svg";
import classes from "./BookingHeader.module.css";
import { Link, useSearchParams } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Status from "../Status/Status";

import { useState } from "react";

export default function BookingHeader() {
  const [isAssigned, setIsAssigned] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({
    status: "PENDING",
  });

  function handleAssign() {
    setIsAssigned((prevAssigned) => !prevAssigned);

    if (!isAssigned) setSearchParams({ status: "PENDING" });
    else setSearchParams();
  }

  const handleOrder = (e: any) => {
    const data: any = {
      type: searchParams.get("type"),
      status: searchParams.get("status"),
      [e.target.name]: e.target.value,
    };
    // if (searchParams.get("type") === "ALL")
    //   setSearchParams({ status: searchParams.get("status") });
    // else if (searchParams.get("status"))
    //   setSearchParams({ type: searchParams.get("type") });
    setSearchParams(data);
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

  return (
    <>
      <div className={classes.headerContainer}>
        {renderHeading()}
        <div className={classes.filters}>
          <input
            type="search"
            placeholder="Search"
            className={classes.search}
          />
          <img className={classes.searchIcon} src={Search} alt="Search Icon" />
          <img className={classes.filterIcon} src={Filter} alt="Filter Icon" />
          <p className={classes.para}>Order Type</p>

          <div className={classes.wrapper}>
            <select
              value={searchParams?.get("type")}
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
              value={searchParams?.get("status")}
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
          <Status />
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
