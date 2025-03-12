export interface Address {
  street: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface OpeningHours {
  day: string;
  open: Date;
  close: Date;
}

export interface Center {
  name: string;
  address: Address;
  phone: string;
  distance_km: number;
  location: Location;
  opening_hours: OpeningHours[];
}