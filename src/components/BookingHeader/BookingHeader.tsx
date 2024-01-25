import Search from "src/assets/svg/search.svg";
import Filter from "src/assets/svg/filter.svg";
import classes from "./BookingHeader.module.css";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import Status from "../Status/Status";
import { useState } from "react";

type Props = { heading: string };

export default function BookingHeader({ heading }: Props) {
  const [isAssigned, setIsAssigned] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleAssign = () => {
    const assignData = {
      status: "PENDING",
    };
    setIsAssigned((prevIsAssigned) => !prevIsAssigned);
    if (!isAssigned) console.log(assignData.status);
  };

  const handleToggle = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

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
          <ToggleSwitch toggle={isToggled} onToggle={handleToggle} />
          <span>Show Status</span>
          {isToggled ? <Status /> : null}
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
        {/* <table className={classes.tableContainer}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Order Type</th>
              <th>Fees</th>
              <th>Customer</th>
              <th>Pick Up Schedule</th>
              <th>Created At</th>
              <th>Route</th>
              <th>Assigned To</th>
              <th>Status</th>
            </tr>
          </thead>
        </table> */}
      </>
    </>
  );
}
