import dayjs from "dayjs";
import classes from "./DisplayDate.module.css";

export default function DisplayDate({ bookingInfo }: any) {
  return (
    <div className={classes.dateContainer}>
      <span className={classes.secondaryText}>
        {dayjs(bookingInfo?.data?.bookingDetail?.createdAt).format(
          "DD MMM, YYYY"
        )}
      </span>
      <span className={classes.secondarySpan}>{"@"}</span>
      <span className={classes.secondarySpan}>
        {dayjs(bookingInfo?.data?.bookingDetail?.createdAt).format("hh")}
      </span>
      <span className={classes.secondarySpan}>:</span>
      <span className={classes.secondarySpan}>
        {dayjs(bookingInfo?.data?.bookingDetail?.createdAt).format("mm")}
      </span>
      <span className={classes.secondarySpan}>:</span>
      <span className={classes.secondarySpan}>
        {dayjs(bookingInfo?.data?.bookingDetail?.createdAt).format("a")}
      </span>
    </div>
  );
}
