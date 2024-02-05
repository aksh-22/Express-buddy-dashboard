import classes from "./DisplayDateTimeStamp.module.css";
import dayjs from "dayjs";

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i);

export default function DisplayDateTimeStamp({
  bookingInfo,
  isEditGeneral,
  setGeneralData,
  generalData,
}: any) {
  const handleChange = (e: any) => {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <span className={classes.secondaryInput}>
        {isEditGeneral ? (
          <input
            className={classes.dateSelect}
            type="date"
            value={generalData.date}
            name="date"
            onChange={handleChange}
          />
        ) : (
          dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format(
            "DD MMM, YYYY"
          )
        )}
      </span>
      <span className={classes.secondarySpan}>@</span>

      <span className={classes.secondaryEditSpan}>
        {isEditGeneral ? (
          <>
            <select
              className={classes.dateSelect}
              value={generalData.hour}
              name="hour"
              onChange={handleChange}
            >
              {hours.map((hour) => (
                <option value={("0" + hour).slice(-2)}>
                  {("0" + hour).slice(-2)}
                </option>
              ))}
            </select>
          </>
        ) : (
          dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("hh")
        )}
      </span>

      <span className={classes.secondarySpan}>:</span>

      <span className={classes.secondaryEditSpan}>
        {isEditGeneral ? (
          <>
            <select
              className={`${classes.dateSelect} ${classes.myDropDown}`}
              value={generalData.min}
              name="min"
              onChange={handleChange}
            >
              {minutes.map((min) => (
                <option value={("0" + min).slice(-2)}>
                  {("0" + min).slice(-2)}
                </option>
              ))}
            </select>
          </>
        ) : (
          dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("mm")
        )}
      </span>

      <span className={classes.secondarySpan}>:</span>

      <span className={classes.secondaryEditSpan}>
        {isEditGeneral ? (
          <>
            <select
              className={classes.dateSelect}
              value={generalData.zone}
              name="zone"
              onChange={handleChange}
            >
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </>
        ) : (
          dayjs(bookingInfo?.bookingDetail?.BookingAt * 1000).format("a")
        )}
      </span>
    </>
  );
}

// <style>
// .dropbtn {
//   background-color: #4CAF50;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
// }

// .dropdown {
//   position: relative;
//   display: inline-block;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
// }

// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {background-color: #f1f1f1}

// .dropdown:hover .dropdown-content {
//   display: block;
// }

// .dropdown:hover .dropbtn {
//   background-color: #3e8e41;
// }
// </style>

// <h2>Dropdown Menu</h2>
// <p>Move the mouse over the button to open the dropdown menu.</p>

// <div class="dropdown">
//   <button class="dropbtn">Dropdown</button>
//   <div class="dropdown-content">
//   <a href="#">Link 1</a>
//   <a href="#">Link 2</a>
//   <a href="#">Link 3</a>
//   </div>
// </div>
