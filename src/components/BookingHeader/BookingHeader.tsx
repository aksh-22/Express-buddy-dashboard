import Search from "src/assets/svg/search.svg";
import Filter from "src/assets/svg/filter.svg";
import classes from "./BookingHeader.module.css";
import { Link, useSearchParams } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Status from "../Status/Status";

import { useState } from "react";

type Props = { heading: string };

export default function BookingHeader({ heading }: Props) {
  const [isAssigned, setIsAssigned] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleAssign() {
    setIsAssigned((prevIsAssigned) => !prevIsAssigned);

    if (!isAssigned) setSearchParams({ status: "PENDING" });
    else setSearchParams();
  }

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>{heading}</p>
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
            <select className={classes.filter}>
              <option>All</option>
              <option>Normal</option>
              <option>Priority</option>
            </select>
          </div>
          <p className={classes.para}>Status</p>
          <div className={classes.wrapper}>
            <select className={classes.filter}>
              <option>All</option>
              <option>Assigned</option>
              <option>Cancelled</option>
              <option>Completed</option>
              <option>Declined</option>
              <option>Driver OTW</option>
              <option>In Transit</option>
              <option>No Show</option>
              <option>Pending</option>
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
