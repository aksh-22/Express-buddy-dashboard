import classes from "./DisplayDateTimeStamp.module.css";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

export default function DisplayDateTimeStamp({ bookingInfo }: any) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <span className={classes.secondaryInput}>
        {dayjs(bookingInfo?.data?.bookingDetail?.BookingAt * 1000)
          .tz(timeZone)
          .format("DD MMM, YYYY")}
      </span>
      <span className={classes.secondarySpan}>@</span>
      <span className={classes.secondaryEditSpan}>
        {dayjs(bookingInfo?.data?.bookingDetail?.BookingAt * 1000)
          .tz(timeZone)
          .format("hh")}
      </span>
      <span className={classes.secondarySpan}>:</span>
      <span className={classes.secondaryEditSpan}>
        {dayjs(bookingInfo?.data?.bookingDetail?.BookingAt * 1000)
          .tz(timeZone)
          .format("mm")}
      </span>
      <span className={classes.secondarySpan}>:</span>
      <span className={classes.secondaryEditSpan}>
        {dayjs(bookingInfo?.data?.bookingDetail?.BookingAt * 1000)
          .tz(timeZone)
          .format("a")}
      </span>
    </>
  );
}
