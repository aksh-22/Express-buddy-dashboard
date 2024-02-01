import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
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

dayjs.extend(timezone);
dayjs.extend(utc);

const override = {
  display: "block",
  margin: "10rem auto",
};

export default function Bookings() {
  const { bookingList }: any = useLoaderData();
  const navigation = useNavigation();
  const param = useParams();
  const location = useLocation();

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
                    {dayjs(elem.BookingAt * 1000)
                      .tz(timeZone)
                      .format("DD MMM YYYY,")}
                    <br />
                    {dayjs(elem.BookingAt * 1000)
                      .tz(timeZone)
                      .format("hh:mm A")}
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
                      <Button btnStyle="btnBooking" tabStyle="outlineActive">
                        To Assign
                      </Button>
                    ) : elem.status === "CANCELLED" &&
                      elem.assignedFullName === null ? (
                      "--"
                    ) : (
                      elem.assignedFullName
                    )}
                  </li>
                  <li className={classes.linkButton}>
                    {renderStatus(elem)}
                    <Link to={`${elem._id}`}>
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
