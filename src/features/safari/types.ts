export type SafariRateRow = {
  zone: string;
  zoneType: "core" | "buffer";
  rate: number;
  gstRate: number;
  timing: {
    morning: string;
    afternoon: string;
  };
  distanceFromRamnagar: string;
};

export type SafariRateTable = {
  inclusionText?: string;
  rateRows: SafariRateRow[];
};

export type CabRateRow = {
  location: string;
  pickupDrop: string;
  dzire: string | number;
  ertiga: string | number;
  innovaCrysta: string | number;
};

export type CabRateTable = {
  rateRows: CabRateRow[];
};

export type SafariRateSection = {
  id: string;
  category: "current" | "prebooking" | "combined";
  title: string;
  subtitle?: string;
  tables: SafariRateTable[];
  cabTables?: CabRateTable[];
  notes?: string[];
  warning?: string;
};

export type SafariData = {
  header: {
    parkTitle: string;
    tagline: string;
    callText: string;
    coreZones: string[];
    bufferZones: string[];
  };
  indian: SafariRateSection[];
  foreigner: SafariRateSection[];
  policyLines: string[];
};
