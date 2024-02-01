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
import Capitalize from "src/utils/Capitalize";
import classes from "./BookingDetails.module.css";

export default function BookingDetails() {
  const param = useParams();
  const id = param?.id;
  const [bookingInfo, setBookingInfo] = useState<any>({});
  const location = useLocation();

  const startPoint = bookingInfo?.data?.bookingDetail?.startPoint?.address;
  const endPoint = bookingInfo?.data?.bookingDetail?.endPoint?.address;
  const otherPoint = bookingInfo?.data?.bookingDetail?.otherPoints;

  const status = bookingInfo?.data?.bookingDetail?.status;
  const type = bookingInfo?.data?.bookingDetail?.veletType;
  const assign = bookingInfo?.data?.bookingDetail?.assigned_to?.firstName;

  const userFname = bookingInfo?.data?.bookingDetail?.user_detail?.firstName;
  const userLname = bookingInfo?.data?.bookingDetail?.user_detail?.lastName;
  const userCode = bookingInfo?.data?.bookingDetail?.user_detail?.phoneCode;
  const userPhone = bookingInfo?.data?.bookingDetail?.user_detail?.phoneNumber;
  const userEmail = bookingInfo?.data?.bookingDetail?.user_detail?.email;
  const userVehType =
    bookingInfo?.data?.bookingDetail?.user_detail?.vehicleType;
  const userPlate =
    bookingInfo?.data?.bookingDetail?.user_detail?.carPlateNumber;

  const normalValet = bookingInfo?.data?.bookingDetail?.amount;
  const normalSurge = bookingInfo?.data?.surgeValue;
  const additionalStop = bookingInfo?.data?.additionalStop;
  const tips = bookingInfo?.data?.bookingDetail?.tip;
  const promotion =
    bookingInfo?.data?.bookingDetail?.promotional?.promotionalAmount;
  const totalPay = bookingInfo?.data?.bookingDetail?.totalPayableAmount;

  const bookingVal = location.pathname.split("/")[3];

  const getData = async () => {
    try {
      const res = await bookingDetailsApi({ params: { id } });
      // const res = await bookingDetailsApi(id);
      setBookingInfo(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(bookingInfo);

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

  return (
    <div>
      {/* Heading */}
      <div className={classes.container}>
        <p className={classes.heading}>
          Booking ID: {bookingInfo?.data?.bookingDetail?.BookingId}
        </p>
        <Link to="" className={classes.sideHeading}>
          {renderVal()}
        </Link>
        <span className={classes.sideSpan}>{">"}</span>
        <span className={classes.sideSpanText}>
          #{bookingInfo?.data?.bookingDetail?.BookingId}
        </span>{" "}
      </div>

      {/* General */}
      <div className={`${classes.detailsContainer} ${classes.container}`}>
        <div>
          <p className={classes.insideHeading}>General</p>

          <span>
            <img
              src={Edit}
              onClick={() => console.log("edit")}
              alt="Edit Icon"
            />
          </span>

          <p className={classes.secondaryHeading}>Date Created</p>

          <DisplayDate bookingInfo={bookingInfo} />

          <p className={classes.secondaryInputHeading}>Pickup Schedule</p>

          <DisplayDateTimeStamp bookingInfo={bookingInfo} />

          <p className={classes.anotherHeading}>Route</p>

          <BookingInfoBox heading="Pick Up" bookingInfo={startPoint} />

          {otherPoint?.length ? (
            <p className={classes.secondaryInputHeading}>Additional Stop</p>
          ) : null}

          {otherPoint?.length
            ? otherPoint.map((elem: any) => (
                <OtherAddress key={elem.address} bookingInfo={elem.address} />
              ))
            : null}

          <BookingInfoBox heading="End Off" bookingInfo={endPoint} />
        </div>

        <div>
          <p className={classes.paymentType}>
            <strong>Payment Type:</strong>
            {<Capitalize str={bookingInfo?.data?.bookingDetail?.paymentType} />}
          </p>

          <BookingInfoBox width="32rem" heading="Status" bookingInfo={status} />

          <div className={classes.sideAlign}>
            <div>
              <BookingInfoBox
                heading="Order Type:"
                width="15rem"
                bookingInfo={type}
              />
            </div>
            <div>
              <BookingInfoBox
                width="15rem"
                heading="Assigned To:"
                bookingInfo={assign ? assign : "Select Driver"}
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
            <button className={classes.btnSave}>Save</button>
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
              bookingInfo={userFname}
            />
            <DetailsExtraBox
              heading="Mobile"
              width="13rem"
              bookingExtra={userCode}
              bookingInfo={userPhone}
            />
            <DetailsInfoBox
              heading="Car Plate Number"
              width="13rem"
              bookingExtra={userPlate}
            />
          </div>
          <div className={classes.firstGrid}>
            <DetailsInfoBox
              heading="Last Name"
              width="13rem"
              bookingInfo={userLname}
            />
            <DetailsInfoBox
              heading="Email"
              width="13rem"
              bookingExtra={userEmail || "N/A"}
            />
            <DetailsInfoBox
              heading="Vehicle Type"
              width="13rem"
              bookingInfo={userVehType}
            />
          </div>
        </div>

        {/* Internal Note */}
        <div className={`${classes.detailsContainer} ${classes.container}`}>
          <div>
            <p className={classes.insideHeading}>Internal Note</p>
            <span>
              <img
                src={Edit}
                onClick={() => console.log("edit")}
                alt="Edit Icon"
              />
            </span>
          </div>
          <BookingInfoBox
            style={{ gridColumn: "1/3" }}
            width="28rem"
            height="10rem"
          />
          <p className={classes.paymentType}>
            <button className={classes.btnSave}>Add Note</button>
          </p>
        </div>
      </div>

      {/* Payment */}
      <div className={`${classes.detailsContainer} ${classes.container}`}>
        <p className={classes.insideHeading}>Payment</p>
        <p className={`${classes.insideHeading} ${classes.right}`}>$ SGD</p>
        <p className={classes.paymentVals}>Normal Valet</p>
        <p className={`${classes.right}`}>$ {normalValet?.toFixed(2)}</p>
        <p className={classes.paymentVals}>Normal Surge</p>
        <p className={`${classes.right}`}>$ {normalSurge?.toFixed(2)}</p>
        <p className={classes.paymentVals}>Additional Stop</p>
        <p className={`${classes.right}`}>$ {additionalStop?.toFixed(2)}</p>
        {tips ? (
          <>
            <p className={classes.paymentVals}>Tips</p>
            <p className={`${classes.right}`}>$ {tips?.toFixed(2)}</p>
          </>
        ) : null}
        <p className={classes.promo}>Promo Code</p>
        <p
          className={`${classes.right}`}
          style={{ fontWeight: "500", margin: "1rem 0" }}
        >
          {promotion ? `$ ${promotion?.toFixed(2)}` : "-"}
        </p>
        <hr className={classes.rule} />
        <p>
          <Capitalize str={bookingInfo?.data?.bookingDetail?.paymentType} />
        </p>
        <p style={{ fontWeight: "600" }} className={`${classes.right}`}>
          Total: ${totalPay?.toFixed(2)}
        </p>
        <hr className={classes.rule} />
      </div>

      {/* Cancel Button */}
      <p className={classes.paymentType}>
        <button className={classes.btnCancel}>Force Cancel</button>
      </p>
    </div>
  );
}
