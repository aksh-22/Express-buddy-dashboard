import dayjs from "dayjs";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
  useParams,
} from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import Eye from "src/assets/svg/Eye.svg";
import BookingHeader from "src/components/BookingHeader/BookingHeader";
import Button from "src/components/Button/Button";
import Capitalize from "src/utils/Capitalize";
import CapitalizeConsecutive from "src/utils/CapitalizeConsecutive";
import CapitalizeSentence from "src/utils/CapitalizeSentence";
import classes from "./Bookings.module.css";
import Modal from "src/components/Modal/Modal";
import { useState } from "react";

import Cancel from "src/assets/svg/cancel.svg";
import Search from "src/assets/svg/search.svg";
import ToggleSwitch from "src/components/ToggleSwitch/ToggleSwitch";

const override = {
  display: "block",
  margin: "10rem auto",
};

export default function Bookings() {
  const { bookingList }: any = useLoaderData();
  const navigation = useNavigation();
  const param = useParams();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const renderStatus = (elem: any) => {
    switch (elem.status) {
      case "COMPLETED":
        return (
          <Button btnStyle="btnCompleted" tabStyle="btnStatus">
            <Capitalize str={elem.status} />
          </Button>
        );

      case "ASSIGNED":
      case "DECLINED":
        return (
          <Button btnStyle="btnAssigned" tabStyle="btnStatus">
            <Capitalize str={elem.status} />
          </Button>
        );

      case "CUSTOMER_NO_SHOW":
        return (
          <Button btnStyle="btnNoShow" tabStyle="btnStatus">
            <CapitalizeConsecutive str={elem.status} />
          </Button>
        );

      case "ACCEPTED":
      case "ARRIVED":
        return (
          <Button btnStyle="btnAccepted" tabStyle="btnStatus">
            <Capitalize str={elem.status} />
          </Button>
        );

      default:
        return (
          <Button btnStyle="btnPending" tabStyle="btnStatus">
            <Capitalize str={elem.status} />
          </Button>
        );
    }
  };

  // const handleAssign = (details: object) => {
  //   console.log(details);
  // };

  const orderId = 21312312312312;
  const vehicleType = "Automatic";

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.container}>
      {location.pathname.split("/").at(-1) === param.id ? (
        <Outlet />
      ) : (
        <>
          <BookingHeader />

          {navigation.state === "loading" ? (
            <DotLoader
              color="#cf1c34"
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : bookingList.length ? (
            bookingList?.map((elem: any) => (
              <div key={elem._id}>
                <ul className={classes.listContainer}>
                  <li>#{elem.BookingId}</li>
                  <li>
                    <Capitalize str={elem.veletType} />
                  </li>
                  <li>
                    $
                    {elem?.totalPayableAmount &&
                      elem.totalPayableAmount.toFixed(2)}
                    <br /> (<Capitalize str={elem.paymentType} />)
                  </li>
                  <li className={classes.nameWrap}>
                    {elem.userFullName} <br /> {elem.user_detail.phoneCode}-
                    {elem.user_detail.phoneNumber} <br />
                    (<Capitalize str={elem.user_detail.vehicleType} />)
                  </li>
                  <li>
                    {dayjs(elem.BookingAt * 1000).format("DD MMM YYYY,")}
                    <br />
                    {dayjs(elem.BookingAt * 1000).format("hh:mm A")}
                  </li>
                  <li>
                    {dayjs(elem.createdAt).format("DD MMM YYYY,")}
                    <br />
                    {dayjs(elem.createdAt).format("hh:mm A")}
                  </li>
                  <li className={classes.route}>
                    {[elem.startPoint, ...elem.otherPoints, elem.endPoint].map(
                      (otherPoint: any) => {
                        return (
                          <CapitalizeSentence
                            key={otherPoint._id}
                            str={otherPoint.address}
                          />
                        );
                      }
                    )}
                  </li>
                  <li className={classes.nameWrap}>
                    {elem?.status &&
                    elem.status === "PENDING" &&
                    elem.assignedFullName === null ? (
                      <>
                        <Button
                          btnStyle="btnBooking"
                          tabStyle="outlineActive"
                          onClick={handleOpen}
                        >
                          To Assign
                        </Button>
                        <Modal isOpen={open}>
                          <div
                            style={{
                              background: "#fff",
                              margin: " 6rem auto",
                              border: "1px solid #9a9a9a",
                              borderRadius: "0.3rem",
                              width: "50rem",
                              height: "30rem",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "1rem",
                                borderRadius: "0.4rem",
                              }}
                            >
                              <span
                                style={{
                                  border: "1px solid rgb(230 228 228)",
                                  padding: "0.5rem 2rem 0.5rem 1rem",
                                }}
                              >
                                <strong>
                                  {" "}
                                  {`Order #${orderId} is assigned To:`}{" "}
                                </strong>
                                <button
                                  style={{
                                    background: "none",
                                    border: "1px solid rgb(230 228 228)",
                                    padding: "0.3rem",
                                    borderRadius: "1rem",
                                    marginLeft: "0.5rem",
                                  }}
                                >
                                  Vishal Staging
                                  <strong style={{ marginLeft: "0.5rem" }}>
                                    x
                                  </strong>
                                </button>
                              </span>
                              <button
                                style={{
                                  background: "#d01c30",
                                  color: "#fff",
                                  margin: "1rem",
                                  padding: "0.8rem 1.5rem",
                                  borderRadius: "2rem",
                                  border: "none",
                                }}
                                disabled
                              >
                                Confirm
                              </button>
                              <img
                                style={{
                                  border: "1px solid #9a9a9a",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  padding: "0.3rem",
                                  left: "67.5rem",
                                  top: "7rem",
                                  cursor: "pointer",
                                }}
                                onClick={handleClose}
                                src={Cancel}
                                alt=""
                              />
                            </div>
                            <p style={{ marginLeft: "1.5rem" }}>
                              <strong>Vehicle Type: </strong> {vehicleType}
                            </p>
                            <hr
                              style={{
                                margin: "2rem 0 1rem 0",
                                border: "0.5px solid rgb(230 228 228)",
                              }}
                            />
                            <div
                              style={{
                                marginLeft: "1rem",
                                position: "relative",
                              }}
                            >
                              <button
                                style={{
                                  background: "#d01c30",
                                  color: "#fff",
                                  marginRight: "0.5rem",
                                  padding: "0.4rem 1.5rem",
                                  borderRadius: "2rem",
                                  border: "1px solid rgb(230 228 228)",
                                }}
                              >
                                All
                              </button>
                              <button
                                style={{
                                  background: "#fff",
                                  color: "#000",
                                  marginRight: "0.5rem",
                                  padding: "0.4rem 1.5rem",
                                  borderRadius: "2rem",
                                  border: "1px solid rgb(230 228 228)",
                                }}
                              >
                                Active
                              </button>
                              <button
                                style={{
                                  background: "#fff",
                                  color: "#000",
                                  marginRight: "0.5rem",
                                  padding: "0.4rem 1.5rem",
                                  borderRadius: "2rem",
                                  border: "1px solid rgb(230 228 228)",
                                }}
                              >
                                Inactive
                              </button>
                              <input
                                type="search"
                                style={{
                                  padding: "0.4rem 1.5rem",
                                  borderRadius: "2rem",
                                  border: "1px solid rgb(230 228 228)",
                                  width: "17rem",
                                  outline: "none",
                                }}
                                placeholder="Search Partner Name, Mobile"
                              />
                              <img
                                style={{
                                  position: "absolute",
                                  top: "0.4rem",
                                  left: "32.3rem",
                                  width: "1rem",
                                }}
                                src={Search}
                                alt="Search Icon"
                              />
                            </div>
                            <div
                              style={{
                                marginLeft: "1rem",
                                marginTop: "1.5rem",
                              }}
                            >
                              <ToggleSwitch />
                              <span
                                style={{
                                  marginRight: "1rem",
                                  marginLeft: "0.5rem",
                                }}
                              >
                                <strong>Manual License</strong>
                              </span>
                              <ToggleSwitch />
                              <span
                                style={{
                                  marginRight: "1rem",
                                  marginLeft: "0.5rem",
                                }}
                              >
                                <strong>Automatic License</strong>
                              </span>
                            </div>
                            <hr
                              style={{
                                margin: "1.5rem 1rem 1rem 1rem",
                                border: "0.5px solid rgb(230 228 228)",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                width: "28rem",
                                justifyContent: "space-between",
                                marginLeft: "4rem",
                              }}
                            >
                              <span>
                                <strong>Partner Name</strong>
                              </span>
                              <span>
                                <strong>Mobile</strong>
                              </span>
                              <span>
                                <strong>License Type</strong>
                              </span>
                            </div>
                            <hr
                              style={{
                                margin: "1rem",
                                border: "1px solid rgb(230 228 228)",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                width: "43rem",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "0.4rem",
                                  marginRight: "-4.5rem",
                                  marginLeft: "1.5rem",
                                }}
                              >
                                🟢
                              </span>
                              <span>Vishal Staging</span>
                              <span>9521012336</span>
                              <span>Manual</span>
                              <span style={{ color: "#d01c30" }}>
                                <strong>To Assign</strong>
                              </span>
                            </div>
                            <hr
                              style={{
                                margin: "1.5rem 1rem 1rem 1rem",
                                border: "0.5px solid rgb(230 228 228)",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                width: "43rem",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "0.4rem",
                                  marginRight: "-4.5rem",
                                  marginLeft: "1.5rem",
                                }}
                              >
                                🟢
                              </span>
                              <span>Vishal Staging</span>
                              <span>9521012336</span>
                              <span>Manual</span>
                              <span style={{ color: "#d01c30" }}>
                                <strong>To Assign</strong>
                              </span>
                            </div>
                            <hr
                              style={{
                                margin: "1.5rem 1rem 1rem 1rem",
                                border: "0.5px solid rgb(230 228 228)",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                width: "43rem",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "0.4rem",
                                  marginRight: "-4.5rem",
                                  marginLeft: "1.5rem",
                                }}
                              >
                                🟢
                              </span>
                              <span>Vishal Staging</span>
                              <span>9521012336</span>
                              <span>Manual</span>
                              <span style={{ color: "#d01c30" }}>
                                <strong>To Assign</strong>
                              </span>
                            </div>
                          </div>
                        </Modal>
                      </>
                    ) : elem.status === "CANCELLED" &&
                      elem.assignedFullName === null ? (
                      "--"
                    ) : (
                      elem.assignedFullName
                    )}
                  </li>
                  <li className={classes.linkButton}>
                    {renderStatus(elem)}
                    <Link to={elem._id}>
                      <img src={Eye} className={classes.eye} alt="Eye Icon" />
                    </Link>
                  </li>
                </ul>
                <hr className={classes.containerRule} />
              </div>
            ))
          ) : (
            <p className={classes.noData}>No data available in table</p>
          )}
        </>
      )}
    </div>
  );
}
