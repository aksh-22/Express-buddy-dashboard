import { Link, useNavigate } from "react-router-dom";
import classes from "./CustomerDetails.module.css";
import { MdOutlineEditOff } from "react-icons/md";
import Edit from "src/assets/svg/edit.svg";
import { useState } from "react";
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

export default function CustomerDetails() {
  const navigate = useNavigate();
  const [isEditGeneral, setIsEditGeneral] = useState(false);

  const handleEditGeneral = () => {
    setIsEditGeneral((prevEdit) => !prevEdit);
  };

  return (
    <div className={classes.customerContainer}>
      {/* heading */}
      <div className={classes.container}>
        <p className={classes.heading}>Customer ID: #1702912323</p>
        {/* <Link to={navigate(-1)} className={classes.sideHeading}> */}
        <Link to="" className={classes.sideHeading}>
          Customers
        </Link>
        <span className={classes.sideSpan}>{">"}</span>
        <span className={classes.sideSpanText}>
          <strong>#1702912323</strong>
        </span>
      </div>

      {/* summary */}
      <div className={`${classes.container} ${classes.summary}`}>
        <p className={classes.summaryHeading}>Summary</p>
        <div className={classes.summaryBlocks}>
          <div className={classes.summaryBox}>
            <p>Total Order</p>
            <p>
              <strong>1</strong>
            </p>
          </div>
          <div className={classes.summaryBox}>
            <p>Total Spend</p>
            <p>
              <strong>$77.00</strong>
            </p>
          </div>
          <div className={`${classes.summaryBox} ${classes.dueBlock}`}>
            <p>Due Balance</p>
            <p>
              <strong>$0.00</strong>
            </p>
            <button disabled className={classes.dueClear}>
              clear
            </button>
          </div>
        </div>
      </div>

      {/* general */}
      <div className={`${classes.container} ${classes.summary}`}>
        <div>
          <p className={classes.summaryHeading}>General</p>
          <span>
            {isEditGeneral ? (
              <MdOutlineEditOff
                style={{ height: "1.1rem", width: "1.1rem", cursor: "pointer" }}
                onClick={() => handleEditGeneral()}
              />
            ) : (
              <img
                src={Edit}
                onClick={() => handleEditGeneral()}
                style={{ cursor: "pointer" }}
                alt="Edit Icon"
              />
            )}
          </span>
        </div>
        <div className={classes.generalGrid}>
          <div>
            <p>First Name</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>Android</p>
            )}

            <p>Mobile</p>
            <p className={classes.generalTextBox}>+65-888888888</p>
            <p>Car Plate Number</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>qerty567</p>
            )}
          </div>
          <div>
            <p>Last Name</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>Test</p>
            )}
            <p>Email</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>android@expressbuddy.com</p>
            )}
            <p>Vehicle Type</p>
            {isEditGeneral ? (
              <select className={classes.generalType} name="" id="">
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            ) : (
              <p className={classes.generalTextBox}>Automatic</p>
            )}
          </div>
          <div className={classes.generalAccount}>
            <p>Account Created</p>
            <p className={classes.generalTextBox}>18th Dec 2023, 08:42 PM</p>
          </div>
        </div>
        <div className={classes.generalButton}>
          {isEditGeneral ? (
            <Button
              btnStyle="btnAdd"
              tabStyle=""
              onClick={() => console.log("internalNote")}
            >
              Save Edits
            </Button>
          ) : (
            <Button btnStyle="btnAdd" tabStyle="" disabled>
              Save Edits
            </Button>
          )}
        </div>
      </div>

      {/* transaction */}
      <div className={`${classes.container} ${classes.summary}`}>
        <div className={classes.transactionContainer}>
          <p className={classes.summaryHeading}>Transaction History</p>
          <p className={classes.summaryHeading}>Total Orders: 1</p>
        </div>
        <div className={classes.transactionEntries}>
          <span>Show</span>
          <div className={classes.transactionOptions}>
            <select>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <span>entries</span>
        </div>
        <div>
          <hr className={classes.normalRule} />
          <ul className={classes.listHeaderContainer}>
            <li>Booking ID</li>
            <li>Order Type</li>
            <li>Pick Up Schedule</li>
            <li>Route</li>
            <li>Fees</li>
          </ul>
          <hr className={classes.headerRule} />
        </div>
        <div>
          <ul
            className={`${classes.listHeaderContainer} ${classes.listDataContainer}`}
          >
            <li>#1704779220 </li>
            <li>Normal</li>
            <li>
              9th Jan, 2024
              <br /> 11:17 AM
            </li>
            <li>
              U-Freight Logistics Centre {">"} <br />
              Universal Studios Singapore {">"} <br />
              Plaza Singapura {">"} <br />
              Sekolah Indonesia Singapura {">"}
            </li>
            <li>$77.00</li>
          </ul>
        </div>
        <div className={classes.pagination}>
          <p>Showing 1 to 1 of 1 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.pages}>1</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
        <div className={classes.transactionTotalContainer}>
          <span className={classes.transactionTotal}>Total: $60.00</span>
        </div>
      </div>

      {/* log */}
      <div className={`${classes.container} ${classes.summary}`}>
        <p className={classes.summaryHeading}>Log History</p>
        <div className={classes.transactionEntries}>
          <span>Show</span>
          <div className={classes.transactionOptions}>
            <select>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <span>entries</span>
        </div>
        <div>
          <hr className={classes.normalRule} />
          <ul
            className={`${classes.listHeaderContainer} ${classes.listAnotherData}`}
          >
            <li>Changed Date</li>
            <li>Changed By</li>
            <li>Changed Field</li>
            <li>Old Value</li>
            <li>New Value</li>
          </ul>
          <hr className={classes.headerRule} />
        </div>
        <div>
          <ul
            className={`${classes.listHeaderContainer} ${classes.listDataContainer} ${classes.listAnotherData}`}
          >
            <li>
              6th Feb 2024,
              <br /> 03:15 PM{" "}
            </li>
            <li>Super Admin </li>
            <li>CarPlateNu...</li>
            <li>RJ1487651</li>
            <li>RJ1487623</li>
          </ul>
        </div>
        <div className={classes.pagination}>
          <p>Showing 1 to 1 of 1 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.pages}>1</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}
