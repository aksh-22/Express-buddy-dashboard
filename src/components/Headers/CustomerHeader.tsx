import Search from "src/assets/svg/search.svg";
import Filter from "src/assets/svg/filter.svg";
import classes from "./CustomHeader.module.css";
import { Link, useSearchParams } from "react-router-dom";

import Eye from "src/assets/svg/Eye.svg";

import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function BookingHeader() {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams({
    type: "",
    bookingType: "",
    status: "PENDING",
    search: "",
  });

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
  };

  const renderHeading = () => {
    return <p className={classes.heading}>Customers</p>;
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  // useEffect(
  //   function () {
  //     const data = {
  //       status: searchParams.get("status"),
  //       type: searchParams.get("type"),
  //     };
  //     searchParams.get("bookingType")
  //       ? (data.bookingType = searchParams.get("bookingType"))
  //       : null;
  //     search.length
  //       ? setSearchParams({
  //           ...data,
  //           search,
  //         })
  //       : setSearchParams({
  //           ...data,
  //           search: "",
  //         });
  //   },
  //   [search]
  // );

  const type: any = searchParams?.get("type");

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
          <p className={classes.para}>Vehicle Type</p>

          <div className={classes.wrapper}>
            <select
              value={type}
              name="type"
              onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="NORMAL">Automatic</option>
              <option value="PRIORITY">Normal</option>
            </select>
          </div>
        </div>
        <div className={classes.toggleAssign}>
          <p>
            <strong>Total 12 Customers</strong>
          </p>
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
          <li>C.ID</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Mobile</li>
          <li>Email</li>
          <li>Car Plate No.</li>
          <li>Vehicle Type</li>
          <li>Order Count</li>
          <li>Total</li>
          <li>Action</li>
        </ul>
        <hr className={classes.headerRule} />
        <ul className={classes.listDataContainer}>
          <li>#1706506164</li>
          <li>Shashi</li>
          <li>Khandelwal</li>
          <li>+65-8963806768</li>
          <li>Shashi.kum...</li>
          <li>SMJ 2093 A</li>
          <li>Automatic</li>
          <li>11</li>
          <li>$434.00</li>
          <li className={classes.action}>
            <ToggleSwitch />
            <Link to="">
              <img src={Eye} className={classes.eye} alt="Eye Icon" />
            </Link>
          </li>
        </ul>
        <hr className={classes.normalRule} />
      </div>
    </>
  );
}
