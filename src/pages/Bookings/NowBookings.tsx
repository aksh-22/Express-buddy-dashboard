import { useLoaderData } from "react-router-dom";

export default function NowBookings() {
  const { bookingList }: any = useLoaderData();
  // console.log(bookingList);

  return <div>NowBookings</div>;
}
