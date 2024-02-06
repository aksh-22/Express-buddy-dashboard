import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { bookingDetailsApi } from "src/api/booking.service";
import Edit from "src/assets/svg/edit.svg";
import BookingInfoBox from "src/components/AddressBox/AddressBox";
import DisplayDate from "src/components/DisplayDate/DisplayDate";
import DisplayDateTimeStamp from "src/components/DisplayDateTimeStamp/DisplayDateTimeStamp";
import OtherAddress from "src/components/OtherAddress/OtherAddress";
import DetailsInfoBox from "src/components/InfoBox/DetailsInfoBox";
import DetailsExtraBox from "src/components/InfoBox/DetailsExtraBox";
import { MdOutlineEditOff } from "react-icons/md";
import dayjs from "dayjs";

import Capitalize from "src/utils/Capitalize";
import classes from "./BookingDetails.module.css";
import Button from "src/components/Button/Button";

export default function BookingDetails() {
  const param = useParams();
  const id = param?.id;
  const [bookingInfo, setBookingInfo] = useState<any>({});
  const location = useLocation();
  // const navigate = useNavigate();

  const [isEditInternal, setIsEditInternal] = useState(false);
  const [internalNote, setInternalNote] = useState("");

  const bookingVal = location.pathname.split("/")[3];

  const getData = async () => {
    try {
      const res = await bookingDetailsApi({ params: { id } });
      // const res = await bookingDetailsApi(id);
      setBookingInfo(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [isEditGeneral, setIsEditGeneral] = useState(false);

  const [generalData, setGeneralData] = useState({
    status: "",
    // assigned: "",
    date: "",
    hour: "",
    min: "",
    sec: "",
    zone: "",
  });

  useEffect(() => {
    setGeneralData({
      status: bookingInfo?.bookingDetail?.status,
      date: dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format(
        "YYYY-MM-DD"
      ),
      hour: dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("hh"),
      min: dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("mm"),
      sec: dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("ss"),
      zone: dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("a"),
    });
  }, [bookingInfo]);

  const bookingAt = dayjs(
    `${generalData.date} ${generalData.hour}:${generalData.min}: ${generalData.sec} ${generalData.zone}`
  ).unix();

  // const handleUnload = () => {
  //   switch (bookingVal) {
  //     case "now":
  //       navigate("now");
  //       break;

  //     case "advanced":
  //       navigate("advanced");
  //       break;

  //     case "later":
  //       navigate("later");
  //       break;

  //     default:
  //       navigate("all-bookings");
  //       break;
  //   }
  // };

  const handleEditGeneral = () => {
    setIsEditGeneral((prevEdit) => !prevEdit);
  };

  const handleEditInternal = () => {
    setIsEditInternal((prevEdit) => !prevEdit);
  };

  const renderVal = () => {
    switch (bookingVal) {
      case "now":
        return "Now Bookings";

      case "advanced":
        return "Advanced Bookings";

      case "later":
        return "Later Bookings";

      default:
        return "All Bookings";
    }
  };

  const handleChange = (e: any) => {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
  };

  // console.log(generalData);
  // console.log("bookingAt:", bookingAt);

  return (
    <div>
      {/* Heading */}
      <div className={classes.container}>
        <p className={classes.heading}>
          Booking ID: {bookingInfo?.bookingDetail?.BookingId}
        </p>
        <Link to="" className={classes.sideHeading}>
          {renderVal()}
        </Link>
        <span className={classes.sideSpan}>{">"}</span>
        <span className={classes.sideSpanText}>
          #{bookingInfo?.bookingDetail?.BookingId}
        </span>{" "}
      </div>

      {/* General */}
      <div className={`${classes.detailsContainer} ${classes.container}`}>
        <div>
          <p className={classes.insideHeading}>General</p>

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

          <p className={classes.secondaryHeading}>Date Created</p>

          <DisplayDate bookingInfo={bookingInfo} />

          <p className={classes.secondaryInputHeading}>Pickup Schedule</p>

          <DisplayDateTimeStamp
            isEditGeneral={isEditGeneral}
            bookingInfo={bookingInfo}
            generalData={generalData}
            setGeneralData={setGeneralData}
          />

          <p className={classes.anotherHeading}>Route</p>

          <BookingInfoBox
            heading="Pick Up"
            bookingInfo={bookingInfo?.bookingDetail?.startPoint?.address}
          />

          {bookingInfo?.bookingDetail?.otherPoints?.length ? (
            <p className={classes.secondaryInputHeading}>Additional Stop</p>
          ) : null}

          {bookingInfo?.bookingDetail?.otherPoints?.length
            ? bookingInfo?.bookingDetail?.otherPoints.map((elem: any) => (
                <OtherAddress key={elem.address} bookingInfo={elem.address} />
              ))
            : null}

          <BookingInfoBox
            heading="End Off"
            bookingInfo={bookingInfo?.bookingDetail?.endPoint?.address}
          />
        </div>

        <div>
          <p className={classes.paymentType}>
            <strong>Payment Type:</strong>
            {<Capitalize str={bookingInfo?.bookingDetail?.paymentType} />}
          </p>

          {isEditGeneral ? (
            <>
              <p>Status</p>
              <select
                className={classes.statusSelect}
                value={generalData.status}
                name="status"
                onChange={handleChange}
              >
                <option value="DECLINED">Declined</option>
                <option value="PENDING">Pending</option>
                <option value="ASSIGNED">Assigned</option>
              </select>
            </>
          ) : (
            <BookingInfoBox
              width="32rem"
              heading="Status"
              bookingInfo={bookingInfo?.bookingDetail?.status}
            />
          )}

          <div className={classes.sideAlign}>
            <div>
              <BookingInfoBox
                heading="Order Type:"
                width="15rem"
                bookingInfo={bookingInfo?.bookingDetail?.veletType}
              />
            </div>
            <div>
              <BookingInfoBox
                width="15rem"
                heading="Assigned To:"
                bookingInfo={
                  bookingInfo?.bookingDetail?.assigned_to?.firstName
                    ? bookingInfo?.bookingDetail?.assigned_to?.firstName
                    : "Select Driver"
                }
              />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <BookingInfoBox
              heading="Note (Optional)"
              weight="600"
              width="32.2rem"
              height="8rem"
            />
          </div>

          <p className={classes.paymentType}>
            {isEditGeneral ? (
              <Button
                btnStyle="btnAdd"
                tabStyle=""
                onClick={() => console.log(internalNote)}
              >
                Save
              </Button>
            ) : (
              <Button btnStyle="btnAdd" tabStyle="" disabled>
                Save
              </Button>
            )}
          </p>
        </div>
      </div>

      <div className={classes.infoGrid}>
        {/* Customer */}
        <div className={`${classes.detailsContainer} ${classes.container}`}>
          <p className={classes.insideHeading}>Customer</p>

          <div className={classes.firstGrid}>
            <DetailsInfoBox
              heading="First Name"
              width="13rem"
              bookingInfo={bookingInfo?.bookingDetail?.user_detail?.firstName}
            />
            <DetailsExtraBox
              heading="Mobile"
              width="13rem"
              bookingExtra={bookingInfo?.bookingDetail?.user_detail?.phoneCode}
              bookingInfo={bookingInfo?.bookingDetail?.user_detail?.phoneNumber}
            />
            <DetailsInfoBox
              heading="Car Plate Number"
              width="13rem"
              bookingExtra={
                bookingInfo?.bookingDetail?.user_detail?.carPlateNumber
              }
            />
          </div>
          <div className={classes.firstGrid}>
            <DetailsInfoBox
              heading="Last Name"
              width="13rem"
              bookingInfo={bookingInfo?.bookingDetail?.user_detail?.lastName}
            />
            <DetailsInfoBox
              heading="Email"
              width="13rem"
              bookingExtra={
                bookingInfo?.bookingDetail?.user_detail?.email || "N/A"
              }
            />
            <DetailsInfoBox
              heading="Vehicle Type"
              width="13rem"
              bookingInfo={bookingInfo?.bookingDetail?.user_detail?.vehicleType}
            />
          </div>
        </div>

        {/* Internal Note */}
        <div className={`${classes.detailsContainer} ${classes.container}`}>
          <div>
            <p className={classes.insideHeading}>Internal Note</p>
            <span>
              {isEditInternal ? (
                <MdOutlineEditOff
                  style={{
                    height: "1.1rem",
                    width: "1.1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEditInternal()}
                />
              ) : (
                <img
                  src={Edit}
                  onClick={() => handleEditInternal()}
                  style={{ cursor: "pointer" }}
                  alt="Edit Icon"
                />
              )}
            </span>
          </div>
          {isEditInternal ? (
            <textarea
              className={classes.textArea}
              placeholder="Write Here"
              value={internalNote}
              onChange={(e) => setInternalNote(e.target.value)}
              cols="30"
              rows="8"
            ></textarea>
          ) : (
            <BookingInfoBox
              style={{ gridColumn: "1/3" }}
              width="28rem"
              height="10rem"
            />
          )}

          <p className={classes.paymentType}>
            {isEditInternal ? (
              <Button
                btnStyle="btnAdd"
                tabStyle=""
                onClick={() => console.log(internalNote)}
              >
                Add Note
              </Button>
            ) : (
              <Button btnStyle="btnAdd" tabStyle="" disabled>
                Add Note
              </Button>
            )}
          </p>
        </div>
      </div>

      {/* Payment */}
      <div className={`${classes.detailsContainer} ${classes.container}`}>
        <p className={classes.insideHeading}>Payment</p>
        <p className={`${classes.insideHeading} ${classes.right}`}>$ SGD</p>
        <p className={classes.paymentVals}>Normal Valet</p>
        <p className={`${classes.right}`}>
          $ {bookingInfo?.bookingDetail?.amount?.toFixed(2)}
        </p>
        <p className={classes.paymentVals}>Normal Surge</p>
        <p className={`${classes.right}`}>
          $ {bookingInfo?.surgeValue?.toFixed(2)}
        </p>
        <p className={classes.paymentVals}>Additional Stop</p>
        <p className={`${classes.right}`}>
          $ {bookingInfo?.additionalStop?.toFixed(2)}
        </p>
        <p className={classes.paymentVals}>Tips</p>
        <p className={`${classes.right}`}>
          $ {bookingInfo?.bookingDetail?.tip?.toFixed(2)}
        </p>

        <p className={classes.promo}>Promo Code</p>
        <p
          className={`${classes.right}`}
          style={{ fontWeight: "500", margin: "1rem 0" }}
        >
          {bookingInfo?.bookingDetail?.promotional?.promotionalAmount
            ? `$ ${bookingInfo?.bookingDetail?.promotional?.promotionalAmount?.toFixed(
                2
              )}`
            : "-"}
        </p>
        <hr className={classes.rule} />
        <p>
          <Capitalize str={bookingInfo?.bookingDetail?.paymentType} />
        </p>
        <p style={{ fontWeight: "600" }} className={`${classes.right}`}>
          Total: ${bookingInfo?.bookingDetail?.totalPayableAmount?.toFixed(2)}
        </p>
        <hr className={classes.rule} />
      </div>

      {/* Cancel Button */}
      <p className={classes.paymentType}>
        <Button btnStyle="btnCancel" tabStyle="">
          Force Cancel
        </Button>
      </p>
    </div>
  );
}
