import { useEffect, useState } from "react";
import { bookingApi } from "src/api/booking.service";
import classes from "./Bookings.module.css";
import dayjs from "dayjs";
import Capitalize from "src/utils/Capitalize";
import CapitalizeSentence from "src/utils/CapitalizeSentence";
import Button from "src/components/Button/Button";
import Eye from "src/assets/svg/Eye.svg";
import { Link } from "react-router-dom";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import DotLoader from "react-spinners/DotLoader";
import BookingHeader from "src/components/BookingHeader/BookingHeader";
import CapitalizeConsecutive from "src/utils/CapitalizeConsecutive";
import { bookingsItemType } from "src/@types/booking-data-type";

dayjs.extend(timezone);
dayjs.extend(utc);

const override = {
  display: "block",
  margin: "20rem auto",
};

export default function AllBookings() {
  const [bookingList, setBookingList] = useState<Array<bookingsItemType>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await bookingApi();
      setBookingList(res.data?.bookings);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className={classes.container}>
      <BookingHeader heading="All Bookings" />
      {isLoading ? (
        <DotLoader
          color="#cf1c34"
          cssOverride={override}
          size={50}
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <table className={classes.listContainer}>
          <tbody>
            {bookingList.map((elem) => (
              <div key={elem._id}>
                <tr>
                  <td>#{elem.BookingId}</td>
                  <td>
                    <Capitalize str={elem.veletType} />
                  </td>
                  <td>
                    $
                    {elem?.totalPayableAmount &&
                      elem.totalPayableAmount.toFixed(2)}
                    <br /> (<Capitalize str={elem.paymentType} />)
                  </td>
                  <td className={classes.customer}>
                    {elem.userFullName} <br /> {elem.user_detail.phoneCode}-
                    {elem.user_detail.phoneNumber} <br />
                    <Capitalize str={elem.user_detail.vehicleType} />
                  </td>
                  <td className={classes.date}>
                    {dayjs(elem.BookingAt * 1000)
                      .tz(timeZone)
                      .format("DD MMM YYYY, hh:mm A")}
                  </td>
                  <td className={classes.date}>
                    {dayjs(elem.createdAt).format("DD MMM YYYY, hh:mm A")}
                  </td>
                  <td>
                    <p className={classes.route}>
                      {[
                        elem.startPoint,
                        ...elem.otherPoints,
                        elem.endPoint,
                      ].map((otherPoint: any) => {
                        return (
                          <CapitalizeSentence
                            key={otherPoint._id}
                            str={otherPoint.address}
                          />
                        );
                      })}
                    </p>
                  </td>
                  <td className={classes.assigned}>
                    {elem?.status &&
                    elem.status === "PENDING" &&
                    elem.assignedFullName === null ? (
                      <Button btnStyle="btnBooking" tabStyle="outlineActive">
                        To Assign
                      </Button>
                    ) : elem.status === "CANCELLED" &&
                      elem.assignedFullName === null ? (
                      "--"
                    ) : (
                      elem.assignedFullName
                    )}
                  </td>
                  <td className={classes.status}>
                    {renderStatus(elem)}
                    <Link to="">
                      <img src={Eye} className={classes.eye} alt="Eye Icon" />
                    </Link>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
