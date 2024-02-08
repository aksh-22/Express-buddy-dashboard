import classes from "./RequestHeader.module.css";
import Button from "src/components/Button/Button";
import { MdDelete } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function RequestHeader() {
  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>Requests</p>
        <div className={classes.filters}>
          <p className={classes.para}>Select Role</p>

          <div className={classes.wrapper}>
            <select
              // value={type}
              name="type"
              // onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="ADMIN">Admin</option>
              <option value="DRIVER">Driver</option>
              <option value="USER">User</option>
            </select>
          </div>

          <p className={classes.para}>Select Method</p>

          <div className={classes.wrapper}>
            <select
              // value={type}
              name="type"
              // onChange={handleOrder}
              className={classes.filter}
            >
              <option value="ALL">All</option>
              <option value="GET">GET</option>
              <option value="DELETE">DELETE</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
            </select>
          </div>

          <Button btnStyle="btnApply" tabStyle="">
            Apply
          </Button>
          <Button btnStyle="btnReset" tabStyle="">
            Reset
          </Button>
          <span className={classes.sideBtn}>
            <Button btnStyle="sideBtn" tabStyle="">
              <SlRefresh className={classes.reset} />
            </Button>
            <Button btnStyle="sideBtn" tabStyle="">
              <MdDelete className={classes.del} />
            </Button>
          </span>
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
          <li>Method</li>
          <li>Path</li>
          <li>Status</li>
          <li>Duration</li>
          <li>Happended</li>
        </ul>
        <hr className={classes.headerRule} />
        <ul className={classes.listDataContainer}>
          <li className={classes.method}>GET</li>
          <li>/Admin/Reports/List?Draw=1&Columns%5B0%5D%5Bdat...</li>
          <li className={classes.status}>200</li>
          <li>113ms</li>
          <li>6th February 2024, 5:24:34 PM</li>
          <li>
            <IoMdArrowRoundForward className={classes.view} />
          </li>
        </ul>
        <hr className={classes.normalRule} />
        <div className={classes.pagination}>
          <p>Showing 1 to 10 of 7,177 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={`${classes.pages} ${classes.pagesActive}`}>1</span>
            <span className={classes.pages}>2</span>
            <span className={classes.pages}>3</span>
            <span className={classes.pages}>4</span>
            <span className={classes.pages}>5</span>
            <span className={classes.pages}>...</span>
            <span className={classes.pages}>718</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
      </div>
    </>
  );
}
