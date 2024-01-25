import { bookingApi } from "src/api/booking.service";

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const params = { status };
  const res = await bookingApi({ params });
  return { bookingList: res?.data?.bookings ?? [] };
}
