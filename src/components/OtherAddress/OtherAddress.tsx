import CapitalizeAddress from "src/utils/CapitalizeAddress";
import classes from "./OtherAddress.module.css";

export default function BookingInfoBox({ bookingInfo }: any) {
  return (
    <>
      <span className={`${classes.secondaryInput} `}>
        <CapitalizeAddress str={bookingInfo} />
      </span>
    </>
  );
}
