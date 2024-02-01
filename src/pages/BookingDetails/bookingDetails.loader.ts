import { useParams } from "react-router-dom";
import { bookingDetailsApi } from "src/api/booking.service";

export async function bookingDetailsLoader({ request }: any) {
  const param = useParams();
  const url = new URL(request.url);
  const id = url.searchParams.get(param.id);
  const params = { id };
  const res = await bookingDetailsApi({ params });

  return { bookingDetails: res?.data?.bookingDetail ?? [] };
}
