interface otherPointsItemType {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  _id: string;
}

interface endPointType {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  _id: string;
}

interface startPointType {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  _id: string;
}

interface user_detailType {
  _id: string;
  phoneNumber: string;
  phoneCode: string;
  firstName: string;
  lastName: string;
  vehicleType: string;
}

interface assignedFullNameType {}

export interface bookingsItemType {
  _id?: string;
  veletType?: string;
  paymentType?: string;
  status?: string;
  paymentFailed?: boolean;
  otherPoints: Array<otherPointsItemType>;
  BookingAt: number;
  endPoint?: endPointType;
  startPoint?: startPointType;
  BookingId?: number;
  totalPayableAmount?: number;
  createdAt?: string;
  user_detail: user_detailType;
  userFullName: string;
  assignedFullName?: any;
}

export interface bookingDataItemType {
  bookings: Array<bookingsItemType>;
}
