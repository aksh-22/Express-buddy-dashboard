import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
import Eye from "src/assets/svg/Eye.svg";
import classess from "./LaterBooking.module.css";

export default function LaterBookings() {
  return (
    <div className={classess.container}>
      <ul className={classess.headerContainer}>
        <li>Booking ID</li>
        <li>Order Type</li>
        <li>Fees</li>
        <li>Customer</li>
        <li>▼Pick Up Schedule</li>
        <li>▼Created At</li>
        <li>Route</li>
        <li>Assigned To</li>
        <li className={classess.headerLink}>Status</li>
      </ul>
      <hr />

      <ul className={classess.listContainer}>
        <li>#1703156036</li>
        <li>Normal</li>
        <li>
          $60.00 <br /> (Cash)
        </li>
        <li className={classess.nameWrap}>
          Vipul Pairroxxxzzzzz <br /> +65-8888888888 <br /> (Automatic)
        </li>
        <li>
          21st Dec, 2023 <br /> 04:23 PM{" "}
        </li>
        <li>
          21st Dec, 2023 <br /> 04:23 PM
        </li>
        <li className={classess.route}>
          1378 Nil Ang Mo Kio Avenue 1 {">"} <br />
          Ang Mo Kio Avenue 1 {">"} <br />
          1378 Nil Ang Mo Kio Avenue 1 {">"} <br />
          Nil Bishan New Town Nil {">"} <br />
          Ang Mo Kio Avenue 1 {">"} <br />
          Nil Bishan New Town Nil {">"}
        </li>
        <li className={classess.nameWrap}>
          Kartik Kundraaaaaa <br />
          +65-9876543211
        </li>
        <li className={classess.linkButton}>
          <Button btnStyle="btnCompleted" tabStyle="btnStatus">
            PENDING
          </Button>
          <Link to="">
            <img src={Eye} className={classess.eye} alt="Eye Icon" />
          </Link>
        </li>
      </ul>

      <hr />

      <ul className={classess.listContainer}>
        <li>#1703156036</li>
        <li>Normal</li>
        <li>
          $60.00 <br /> (Cash)
        </li>
        <li className={classess.nameWrap}>
          Vipul Pairroxxxz <br /> +65-8888888888 <br /> (Automatic)
        </li>
        <li>
          21st Dec, 2023 <br /> 04:23 PM{" "}
        </li>
        <li>
          21st Dec, 2023 <br /> 04:23 PM
        </li>
        <li className={classess.route}>
          1378 Nil Ang Mo Kio Avenue 1 {">"} <br />
          Ang Mo Kio Avenue 1 {">"} <br />
        </li>
        <li>
          <Button btnStyle="btnBooking" tabStyle="outlineActive">
            To Assign
          </Button>
        </li>
        <li className={classess.linkButton}>
          <Button btnStyle="btnCompleted" tabStyle="btnStatus">
            PENDING
          </Button>
          <Link to="">
            <img src={Eye} className={classess.eye} alt="Eye Icon" />
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}
