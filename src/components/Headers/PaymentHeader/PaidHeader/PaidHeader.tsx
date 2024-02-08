import classes from "./PaidHeader.module.css";
import Search from "src/assets/svg/search.svg";

import { useState } from "react";
import Button from "src/components/Button/Button";

export default function PaidHeader() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState({
    all: true,
    paid: false,
    pending: false,
    inProcess: false,
  });
  const [check, setCheck] = useState(false);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleCheck = (e: any) => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Paid</p>
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

        <div className={classes.filters}>
          <p className={classes.para}>Method</p>
          <p className={classes.para} style={{ marginLeft: "8.5rem" }}>
            Status
          </p>
        </div>

        <div className={classes.filters}>
          <div className={classes.wrapper}>
            <select
              // value={type}
              name="type"
              // onChange={handleOrder}
              className={classes.filter}
            >
              <option value="none" selected disabled>
                Select Method
              </option>
              <option value="BANK">Bank Transfer</option>
              <option value="CASH">Cash</option>
            </select>
          </div>

          <div className={classes.wrapper}>
            <select
              // value={type}
              name="type"
              // onChange={handleOrder}
              className={classes.filter}
            >
              <option value="none" selected disabled>
                Select Status
              </option>
              <option value="PAID">Paid</option>
              <option value="PENDING">Pending</option>
              <option value="INPROCESS">In Process</option>
            </select>
          </div>

          <p className={classes.para}>Select All</p>

          <label className={classes.outerBox}>
            <input
              type="checkbox"
              checked={check}
              onChange={handleCheck}
              className={classes.check}
            />
            {check ? <span className={classes.innerBox} /> : null}
          </label>

          {check ? (
            <Button
              btnStyle="btnSubmit"
              tabStyle=""
              style={{
                marginLeft: "7rem",
                padding: "0.8rem 1rem",
                fontSize: "1rem",
              }}
            >
              Update
            </Button>
          ) : (
            <Button
              btnStyle="btnSubmit"
              disabled
              tabStyle=""
              style={{
                marginLeft: "7rem",
                padding: "0.8rem 1rem",
                fontSize: "1rem",
              }}
            >
              Update
            </Button>
          )}
        </div>
        <div className={classes.toggleAssign}>
          <div className={classes.paymentStatusContainer}>
            <span
              className={
                active.all
                  ? ` ${classes.paymentStatus} ${classes.paymentStatusActive}`
                  : `${classes.paymentStatus}`
              }
              onClick={() =>
                setActive({
                  all: true,
                  paid: false,
                  pending: false,
                  inProcess: false,
                })
              }
            >
              All
              {active.all ? (
                <span className={classes.paymentAllUnderline} />
              ) : null}
            </span>

            <span
              className={
                active.paid
                  ? ` ${classes.paymentStatus} ${classes.paymentStatusActive}`
                  : `${classes.paymentStatus}`
              }
              onClick={() =>
                setActive({
                  all: false,
                  paid: true,
                  pending: false,
                  inProcess: false,
                })
              }
            >
              Paid
              {active.paid ? (
                <span className={classes.paymentPaidUnderline} />
              ) : null}
            </span>

            <span
              className={
                active.pending
                  ? ` ${classes.paymentStatus} ${classes.paymentStatusActive}`
                  : `${classes.paymentStatus}`
              }
              onClick={() =>
                setActive({
                  all: false,
                  paid: false,
                  pending: true,
                  inProcess: false,
                })
              }
            >
              Pending
              {active.pending ? (
                <span className={classes.paymentPendingUnderline} />
              ) : null}
            </span>

            <span
              className={
                active.inProcess
                  ? ` ${classes.paymentStatus} ${classes.paymentStatusActive}`
                  : `${classes.paymentStatus}`
              }
              onClick={() =>
                setActive({
                  all: false,
                  paid: false,
                  pending: false,
                  inProcess: true,
                })
              }
            >
              In Process
              {active.inProcess ? (
                <span className={classes.paymentProcessUnderline} />
              ) : null}
            </span>
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
          <li> Withdrawl ID</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Request Date</li>
          <li>Method</li>
          <li>Amount</li>
          <li>Payment Date</li>
          <li>Status</li>
        </ul>
        <hr className={classes.headerRule} />
        {active.all ? (
          <ul className={classes.listDataContainer}>
            <li style={{ display: "flex", alignItems: "flex-start" }}>
              <label className={classes.outerBox}>
                <input
                  type="checkbox"
                  checked={check}
                  onChange={handleCheck}
                  className={classes.check}
                />
                {check ? <span className={classes.innerBox} /> : null}
              </label>
              <span style={{ marginLeft: "0.5rem", marginTop: "0.3rem" }}>
                #1706506164
              </span>
            </li>
            <li>Shashi</li>
            <li>Khandelwal</li>
            <li>20th December 2023</li>
            <li>
              <select style={{ padding: "0.2rem", marginTop: "-0.2rem" }}>
                <option value="BANK">Bank Transfer</option>
                <option value="CASH">Cash</option>
              </select>
            </li>
            <li>$74.00</li>
            <li>N/A</li>
            <li className={classes.action} style={{ marginLeft: "-5.5rem" }}>
              <select style={{ padding: "0.2rem", marginTop: "-0.2rem" }}>
                <option value="PAID">Paid</option>
                <option value="PENDING">Pending</option>
                <option value="PROCESS">In Process</option>
              </select>
              <Button tabStyle="btnSubmit" btnStyle="">
                Update
              </Button>
            </li>
          </ul>
        ) : (
          <span className={classes.noData}>No data available in table</span>
        )}
        <hr className={classes.normalRule} />
        {active.all ? (
          <div className={classes.pagination}>
            <p>Showing 1 to 1 of 1 entries</p>
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
