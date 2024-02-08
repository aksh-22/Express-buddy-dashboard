import Search from "src/assets/svg/search.svg";
import Filter from "src/assets/svg/filter.svg";
import classes from "./CurrentDriverHeader.module.css";
import { Link } from "react-router-dom";
import Eye from "src/assets/svg/Eye.svg";

import { useState } from "react";
import ToggleSwitch from "src/components/ToggleSwitch/ToggleSwitch";

export default function CurrentDriverHeader() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState({ approved: true, reject: false });

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Drivers</p>
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
          <p className={classes.para}>License Type</p>

          <div className={classes.wrapper}>
            <select
              // value={type}
              name="type"
              // onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="NORMAL">Automatic</option>
              <option value="MANUAL">Manual</option>
            </select>
          </div>

          <p className={classes.para}>Status</p>
          <div className={classes.wrapper}>
            <select
              // value={type}
              name="type"
              // onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        </div>
        <div className={classes.toggleAssign}>
          <div className={classes.driverStatusContainer}>
            <span
              className={
                active.approved
                  ? ` ${classes.driverStatus} ${classes.driverStatusActive}`
                  : `${classes.driverStatus}`
              }
              onClick={() => setActive({ approved: true, reject: false })}
            >
              Approved
              {active.approved ? (
                <span className={classes.driverStatusUnderline} />
              ) : null}
            </span>
            <span
              className={
                active.reject
                  ? ` ${classes.driverStatus} ${classes.driverStatusActive}`
                  : `${classes.driverStatus}`
              }
              onClick={() => setActive({ approved: false, reject: true })}
            >
              Rejected
              {active.reject ? (
                <span className={classes.driverRejectUnderline} />
              ) : null}
            </span>
          </div>
          <div>
            <strong>Total 5 Partners</strong>
          </div>
        </div>
        <hr className={classes.headerRule} />
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
        <hr className={classes.normalRule} />
        <ul className={classes.listHeaderContainer}>
          <li>Partner ID</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Mobile</li>
          <li>Email</li>
          <li>License Type</li>
          <li>Total # Trips</li>
          <li>Total Earn</li>
          <li>Status</li>
          <li>Action</li>
        </ul>
        <hr className={classes.headerRule} />
        {active.approved ? (
          <ul className={classes.listDataContainer}>
            <li>#1706506164</li>
            <li>Shashi</li>
            <li>Khandelwal</li>
            <li>+65-8963806768</li>
            <li>Shashi.kum...</li>
            <li>Automatic</li>
            <li>4</li>
            <li>$74.00</li>
            <li>Inactive</li>
            <li className={classes.action}>
              <ToggleSwitch />
              <Link to="currentDetails">
                <img src={Eye} className={classes.eye} alt="Eye Icon" />
              </Link>
            </li>
          </ul>
        ) : (
          <span className={classes.noData}>No data available in table</span>
        )}
        <hr className={classes.normalRule} />
        {active.approved ? (
          <div className={classes.pagination}>
            <p>Showing 1 to 5 of 5 entries</p>
            <div>
              <span className={classes.prev}>Previous</span>
              <span className={`${classes.pages} ${classes.pagesActive}`}>
                1
              </span>
              <span className={classes.next}>Next</span>
            </div>
          </div>
        ) : (
          <div className={classes.pagination}>
            <p>Showing 0 to 0 of 0 entries</p>
            <div>
              <span className={classes.prev}>Previous</span>
              <span className={classes.next}>Next</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
