export type VehiclePrice = {
  dzire: number;
  ertiga: number;
  innova: number;
};

export type TaxiRoute = {
  location: string;
  pickupDrop: string;
  duration?: string;
  price: VehiclePrice;
  extraWaiting: {
    pricePerHour: number;
  };
  coveringPoints?: string[];
  notes?: string[];
};

export type TaxiCategory = {
  type: "local" | "hillStation" | "transfer" | "railway" | "airport" | "serviceArea";
  title: string;
  subtitle?: string;
  routes: TaxiRoute[];
};

export type TaxiData = {
  header: {
    title: string;
    callText: string;
  };
  categories: TaxiCategory[];
  policies: string[];
};
