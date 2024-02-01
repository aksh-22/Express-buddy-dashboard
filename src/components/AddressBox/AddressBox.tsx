import classes from "./AddressBox.module.css";
import CapitalizeAddress from "src/utils/CapitalizeAddress";

export default function BookingInfoBox({
  heading,
  height,
  width,
  weight,
  bookingInfo,
}: any) {
  return (
    <>
      <p style={{ fontWeight: weight }}>{heading}</p>
      <span className={`${classes.secondaryInput} `} style={{ width, height }}>
        <CapitalizeAddress str={bookingInfo} />
      </span>
    </>
  );
}
