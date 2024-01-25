import { useEffect, useState } from "react";
import { allBookingsCountApi } from "src/api/allBookingsCount.service";
import Button from "../Button/Button";
import classes from "./Status.module.css";
import { useSearchParams } from "react-router-dom";
import { StatusData } from "./StatusData";

export default function Status() {
  const [bookingsCount, setBookingsCount] = useState<any>({});
  const [searchParams, setSearchParams] = useSearchParams();

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

  return (
    <div className={classes.statusContainer}>
      {StatusData.map((elem) => (
        <Button
          key={elem.query}
          btnStyle={elem.style}
          tabStyle="btnStatus"
          onClick={() => {
            setSearchParams(elem.query);
            console.log(elem?.status);
          }}
        >
          <span>{elem.value}</span> ┃ {bookingsCount[elem.query]}
        </Button>
      ))}
    </div>
  );
}
