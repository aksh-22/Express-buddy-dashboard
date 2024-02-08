import Button from "src/components/Button/Button";
import classes from "./AllAdmins.module.css";

export default function AllAdmins() {
  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.heading}>All Admin</p>
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
          <li>Admin ID</li>
          <li>AdminName</li>
          <li>Email</li>
          <li>Role</li>
          <li>Action</li>
        </ul>
        <hr className={classes.headerRule} />
        <ul className={classes.listDataContainer}>
          <li>1700628225</li>
          <li>Super Admin </li>
          <li>Admin3@Tes... </li>
          <li>Super Admin</li>
          <li style={{ marginLeft: "-3rem" }}>
            <Button btnStyle="btnSubmit" tabStyle="">
              Reset Password
            </Button>
          </li>
        </ul>
        <hr className={classes.normalRule} />
        <div className={classes.pagination}>
          <p>Showing 1 to 10 of 10 entries</p>
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
