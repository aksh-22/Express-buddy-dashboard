import { Link } from "react-router-dom";
import classes from "./PartnersCurrent.module.css";
import { MdOutlineEditOff } from "react-icons/md";
import Edit from "src/assets/svg/edit.svg";
import { useState } from "react";
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import License from "src/assets/image/license.jpg";
import { FaFileUpload } from "react-icons/fa";

export default function PartnersCurrent() {
  const [isEditGeneral, setIsEditGeneral] = useState(false);

  const handleEditGeneral = () => {
    setIsEditGeneral((prevEdit) => !prevEdit);
  };

  return (
    <div className={classes.customerContainer}>
      {/* heading */}
      <div className={classes.container}>
        <p className={classes.heading}>Partner ID: #1702912323</p>
        <Link to="" className={classes.sideHeading}>
          Partners
        </Link>
        <span className={classes.sideSpan}>{">"}</span>
        <Link to="" className={classes.sideHeading}>
          Approved
        </Link>
        <span className={classes.sideSpan}>{">"}</span>
        <span className={classes.sideSpanText}>
          <strong>#1702912323</strong>
        </span>
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
              <p className={classes.generalTextBox}>Vishal</p>
            )}

            <p>Mobile</p>
            <p className={classes.generalTextBox}>+65-888888888</p>
            <p>License Type</p>
            {isEditGeneral ? (
              <select className={classes.generalType} name="" id="">
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            ) : (
              <p className={classes.generalTextBox}>Automatic</p>
            )}
          </div>
          <div>
            <p>Last Name</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>Pairroxz</p>
            )}
            <p>Email</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>android@expressbuddy.com</p>
            )}
            <p>Wallet Balance</p>
            <p className={classes.generalTextBox}>N/A</p>
          </div>
          <div className={classes.generalAccount}>
            <p>Account Created</p>
            <p className={classes.generalTextBox}>18th Dec 2023, 08:42 PM</p>
          </div>
        </div>
        <hr className={classes.divide} />
        <p className={classes.summaryHeading}>Images of NRIC And License</p>
        <div className={classes.imgDiv}>
          <div className={classes.singleImg}>
            <p className={classes.paraImage}>Partner License Image of Front</p>
            <img className={classes.image} src={License} alt="Image1" />

            <label>
              <span>
                <FaFileUpload className={classes.icon} />
              </span>
            </label>
            <input type="file" />
          </div>
          <div className={classes.singleImg}>
            <p className={classes.paraImage}>Partner License Image of Back</p>
            <img className={classes.image} src={License} alt="Image2" />
            <span>
              <FaFileUpload className={classes.icon} />
            </span>
          </div>
          <div className={classes.singleImg}>
            <p className={classes.paraImage}>NRIC Image of Front</p>
            <img className={classes.image} src={License} alt="Image3" />
            <span>
              <FaFileUpload className={classes.icon} />
            </span>
          </div>
          <div className={classes.singleImg}>
            <p className={classes.paraImage}>NRIC Image of Back</p>
            <img className={classes.image} src={License} alt="Image4" />
            <span>
              <FaFileUpload className={classes.icon} />
            </span>
          </div>
        </div>
        <div>
          <Button btnStyle="upload" tabStyle="">
            Upload
          </Button>
        </div>
      </div>

      {/* bank details */}
      <div className={`${classes.container} ${classes.summary}`}>
        <div>
          <p className={classes.summaryHeading}>Bank Details</p>
        </div>
        <div className={classes.generalGrid}>
          <div>
            <p>Name as in Bank Account</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>123456789</p>
            )}
          </div>
          <div>
            <p>Bank Name</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>Bob</p>
            )}
          </div>
          <div>
            <p>Bank Account Number</p>
            {isEditGeneral ? (
              <Input inputStyle="generalInput" />
            ) : (
              <p className={classes.generalTextBox}>316300000018992</p>
            )}
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

      {/* order history */}
      <div className={`${classes.container} ${classes.summary}`}>
        <div className={classes.transactionContainer}>
          <p className={classes.summaryHeading}>Order History</p>
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
          <ul className={classes.orderHeaderContainer}>
            <li>Booking ID</li>
            <li>Order Type</li>
            <li>Pick Up Schedule</li>
            <li>Route</li>
            <li>Status</li>
            <li>Payment Method</li>
            <li>Fees</li>
            <li>Commission</li>
          </ul>
          <hr className={classes.headerRule} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <p>No data available in table</p>
          {/* <ul
            className={`${classes.orderHeaderContainer} ${classes.listDataContainer}`}
          ></ul> */}
        </div>
        <div className={classes.pagination}>
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
        <div className={classes.transactionTotalContainer}>
          <span className={classes.transactionTotal}>
            Total Commision Earned: $0.00
          </span>
        </div>
      </div>

      {/* withdrawal history */}
      <div className={`${classes.container} ${classes.summary}`}>
        <div className={classes.transactionContainer}>
          <p className={classes.summaryHeading}>Withdrawl History</p>
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
          <ul
            className={` ${classes.orderHeaderContainer} ${classes.withdrawlHeaderContainer}`}
          >
            <li>Withdrawl ID</li>
            <li>Request Date</li>
            <li>Processed By</li>
            <li>Method</li>
            <li>Status</li>
            <li>Payment Date</li>
            <li>Amount</li>
          </ul>
          <hr className={classes.headerRule} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <p>No data available in table</p>
          {/* <ul
            className={`${classes.orderHeaderContainer} ${classes.listDataContainer}`}
          ></ul> */}
        </div>
        <div className={classes.pagination}>
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
        <div className={classes.transactionTotalContainer}>
          <span className={classes.transactionTotal}>Total Withdrawl: -</span>
        </div>
      </div>

      {/* submitted amount history */}
      <div className={`${classes.container} ${classes.summary}`}>
        <div className={classes.transactionContainer}>
          <p className={classes.summaryHeading}>Submitted Amount History</p>
          <Button btnStyle="collect" tabStyle="">
            Collect Cash $0
          </Button>
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
          <ul
            className={` ${classes.orderHeaderContainer} ${classes.withdrawlHeaderContainer}`}
          >
            <li>Submitted ID</li>
            <li>Submitted Date</li>
            <li>Processed By</li>
            <li>Method</li>
            <li>Status</li>
            <li>Payment Date</li>
            <li>Amount</li>
          </ul>
          <hr className={classes.headerRule} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <p>No data available in table</p>
          {/* <ul
            className={`${classes.orderHeaderContainer} ${classes.listDataContainer}`}
          ></ul> */}
        </div>
        <div className={classes.pagination}>
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
        <div className={classes.transactionTotalContainer}>
          <span className={classes.transactionTotal}>Total Withdrawl: -</span>
        </div>
      </div>

      {/* log history */}
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
          <ul className={`${classes.orderHeaderContainer} ${classes.log}`}>
            <li>Changed Date</li>
            <li>Changed By</li>
            <li>Changed Field</li>
            <li>Old Value</li>
            <li>New Value</li>
          </ul>
          <hr className={classes.headerRule} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <p>No data available in table</p>
          {/* <ul
            className={`${classes.listHeaderContainer} ${classes.listDataContainer} ${classes.listAnotherData}`}
          ></ul> */}
        </div>
        <div className={classes.pagination}>
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <span className={classes.prev}>Previous</span>
            <span className={classes.next}>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}
