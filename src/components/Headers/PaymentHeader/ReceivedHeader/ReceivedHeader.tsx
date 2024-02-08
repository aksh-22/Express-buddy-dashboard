import classes from "./ReceivedHeader.module.css";
import Search from "src/assets/svg/search.svg";

import { useState } from "react";

export default function ReceivedHeader() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Received</p>
        <div className={classes.filters}>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className={classes.search}
          />
          <img className={classes.searchIcon} src={Search} alt="Search Icon" />
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
        <hr className={classes.normalRule} />
        <ul className={classes.listHeaderContainer}>
          <li> Received ID</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Request Date</li>
          <li>Method</li>
          <li>Amount</li>
          <li>Payment Date</li>
          <li>Status</li>
        </ul>
        <hr className={classes.headerRule} />
        <ul className={classes.listDataContainer}>
          <li>#1706506164</li>
          <li>Shashi</li>
          <li>Khandelwal</li>
          <li>20th December 2023</li>
          <li>
            <span
              style={{
                border: "1px solid #000",
                display: "flex",
                width: "7rem",
                padding: "0.3rem",
                marginTop: "-0.3rem",
              }}
            >
              Cash
            </span>
          </li>
          <li>$200.00</li>
          <li>20th December 2023</li>
          <li className={classes.action} style={{ marginLeft: "-7rem" }}>
            <span
              style={{
                border: "1px solid #000",
                display: "flex",
                width: "7rem",
                padding: "0.3rem",
                marginTop: "-0.3rem",
              }}
            >
              Paid
            </span>
          </li>
        </ul>

        <hr className={classes.normalRule} />
        <div className={classes.pagination}>
          <p>Showing 1 to 1 of 1 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={`${classes.pages} ${classes.pagesActive}`}>1</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
      </div>
    </>
  );
}
