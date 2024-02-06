import Search from "src/assets/svg/search.svg";
import classes from "./RatingHeader.module.css";
import { CiStar } from "react-icons/ci";

import { useState } from "react";

export default function RatingHeader() {
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleCheck = (e: any) => {
    setCheck((prevCheck) => !prevCheck);
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

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Rating and Reviews</p>
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
          <li>Order ID</li>
          <li>Customer</li>
          <li>Partners</li>
          <li>Review</li>
          <li>Ratings</li>
          <li>Add In App</li>
        </ul>
        <hr className={classes.headerRule} />
        <ul className={classes.listDataContainer}>
          <li>#1706506164</li>
          <li>
            89 Khandel...
            <br />
            7976076770
          </li>
          <li>N/A</li>
          <li>N/A</li>
          <li>
            <span>
              <CiStar className={classes.star} />
            </span>
            <span>
              <CiStar className={classes.star} />
            </span>
            <span>
              <CiStar className={classes.star} />
            </span>
            <span>
              <CiStar className={classes.star} />
            </span>
            <span>
              <CiStar className={classes.star} />
            </span>
          </li>
          <li className={classes.checkItem}>
            <label className={classes.outerBox}>
              <input
                type="checkbox"
                checked={check}
                onChange={handleCheck}
                className={classes.check}
              />
              {check ? <span className={classes.innerBox} /> : null}
            </label>
          </li>
        </ul>
        <hr className={classes.normalRule} />
        <ul className={classes.listDataContainer}>
          <li>N/A</li>
          <li>
            89 Khandel...
            <br />
            7976076770
          </li>
          <li>N/A</li>
          <li>N/A</li>
          <li>
            <span>
              <CiStar className={classes.star} />
            </span>
            <span>
              <CiStar className={classes.star} />
            </span>
            <span>
              <CiStar className={classes.star} />
            </span>
          </li>
          <li className={classes.checkItem}>
            <label className={classes.outerBox}>
              <input
                type="checkbox"
                checked={check}
                onChange={handleCheck}
                className={classes.check}
              />
              {check ? <span className={classes.innerBox} /> : null}
            </label>
          </li>
        </ul>
        <hr className={classes.normalRule} />
        <div className={classes.pagination}>
          <p>Showing 1 to 2 of 2 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.pages}>1</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
      </div>
    </>
  );
}
