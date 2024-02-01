import Capitalize from "src/utils/Capitalize";
import classes from "../AddressBox/AddressBox.module.css";

export default function BookingInfoBox({
  heading,
  height,
  width,
  weight,
  bookingInfo,
  bookingExtra,
}: any) {
  return (
    <>
      <p style={{ fontWeight: weight }}>{heading}</p>
      <span className={`${classes.secondaryInput} `} style={{ width, height }}>
        <Capitalize str={bookingInfo} />
        {bookingExtra}
      </span>
    </>
  );
}
