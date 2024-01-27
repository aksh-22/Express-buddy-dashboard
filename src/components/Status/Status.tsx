import { useEffect, useState } from "react";
import { allBookingsCountApi } from "src/api/allBookingsCount.service";
import Button from "../Button/Button";
import classes from "./Status.module.css";
import { useNavigation, useSearchParams } from "react-router-dom";
import { StatusData } from "./StatusData";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Status() {
  const [bookingsCount, setBookingsCount] = useState<any>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const [isToggled, setIsToggled] = useState(true);

  const getData = async () => {
    try {
      const res = await allBookingsCountApi();
      setBookingsCount(res.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleToggle = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

  return (
    <>
      <ToggleSwitch toggle={isToggled} onToggle={handleToggle} />
      <span>Show Status</span>
      {isToggled ? (
        <div className={classes.statusContainer}>
          {StatusData.map((elem) => (
            <Button
              key={elem.query}
              btnStyle={elem.style}
              tabStyle="btnStatus"
              onClick={() => {
                elem.status
                  ? setSearchParams({ status: elem?.status })
                  : setSearchParams();
              }}
            >
              <span>{elem.value}</span> ┃{" "}
              {navigation.state === "loading" ? 0 : bookingsCount[elem.query]}
            </Button>
          ))}
        </div>
      ) : null}
    </>
  );
}
