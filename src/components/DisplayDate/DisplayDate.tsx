import dayjs from "dayjs";
import classes from "./DisplayDate.module.css";

export default function DisplayDate({ bookingInfo }: any) {
  return (
    <div className={classes.dateContainer}>
      <span className={classes.secondaryText}>
        {dayjs(bookingInfo?.bookingDetail?.createdAt).format("DD MMM, YYYY")}
      </span>
      <span className={classes.secondarySpan}>{"@"}</span>
      <span className={classes.secondarySpan}>
        {dayjs(bookingInfo?.bookingDetail?.createdAt).format("hh")}
      </span>
      <span className={classes.secondarySpan}>:</span>
      <span className={classes.secondarySpan}>
        {dayjs(bookingInfo?.bookingDetail?.createdAt).format("mm")}
      </span>
      <span className={classes.secondarySpan}>:</span>
      <span className={classes.secondarySpan}>
        {dayjs(bookingInfo?.bookingDetail?.createdAt).format("a")}
      </span>
    </div>
  );
}
