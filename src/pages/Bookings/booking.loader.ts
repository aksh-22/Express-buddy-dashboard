import { bookingApi } from "src/api/booking.service";

export async function bookingLoader({ request }: any) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const status = url.searchParams.get("status");
  const bookingType = url.searchParams.get("bookingType");
  const page = url.searchParams.get("page");
  const search = url.searchParams.get("search");
  const params = { type, status, bookingType, page, search };
  const res = await bookingApi({ params });

  // return { bookingList: res?.data?.bookings ?? [] };
  return { bookingList: res ?? [] };
}
