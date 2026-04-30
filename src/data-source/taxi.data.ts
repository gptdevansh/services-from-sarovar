import type { TaxiData } from "@/features/taxi";
import { RESORT_SUBTITLE } from "@/shared/constants/ui.constants";


export const taxiData: TaxiData = {
  header: {
    title: "Cab Service",
    callText: "Call 99972-88805",
  },
  categories: [
    {
      type: "local",
      title: "Near By Corbett Local Sightseeing",
      subtitle: RESORT_SUBTITLE,
      routes: [
        {
          location: "Jim Corbett Local Sightseeing",
          duration: "3 Point / Half Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 5200, ertiga: 6500, innova: 7800 },
          extraWaiting: { pricePerHour: 300 },
          coveringPoints: ["Dhangari Museum", "Garjiya Devi Temple", "Suspension Bridge"],
        },
        {
          location: "Jim Corbett Local Sightseeing",
          duration: "6 Point / Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 6500, ertiga: 7800, innova: 9800 },
          extraWaiting: { pricePerHour: 300 },
          coveringPoints: [
            "Dhangari Museum",
            "Garjiya Devi Temple",
            "Suspension Bridge",
            "Hanuman Dham Temple",
            "Corbett Waterfall",
            "Fun Activities",
          ],
        },
      ],
    },
    {
      type: "hillStation",
      title: "Hills Station",
      subtitle: RESORT_SUBTITLE,
      routes: [
        {
          location: "Nainital",
          duration: "Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 6200, ertiga: 7500, innova: 9450 },
          extraWaiting: { pricePerHour: 300 },
        },
        {
          location: "Kainchi Dham Temple",
          duration: "Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 7100, ertiga: 8400, innova: 10400 },
          extraWaiting: { pricePerHour: 300 },
        },
        {
          location: "Mukteshwar",
          duration: "Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 8200, ertiga: 9500, innova: 12300 },
          extraWaiting: { pricePerHour: 300 },
        },
        {
          location: "Bhimtal",
          duration: "Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 6200, ertiga: 7500, innova: 9500 },
          extraWaiting: { pricePerHour: 300 },
        },
        {
          location: "Ranikhet",
          duration: "Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 7100, ertiga: 9100, innova: 11650 },
          extraWaiting: { pricePerHour: 300 },
        },
      ],
    },
    {
      type: "serviceArea",
      title: "We Provide Taxi Service At These Places",
      subtitle: "Extra toll + parking applies for Nainital & Kainchi Dham Temple",
      routes: [
        { location: "Ramnagar", pickupDrop: "Pickup / Drop", price: { dzire: 1550, ertiga: 2100, innova: 3250 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Nainital", pickupDrop: "Pickup / Drop", price: { dzire: 4800, ertiga: 6200, innova: 8500 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Ranikhet", pickupDrop: "Pickup / Drop", price: { dzire: 6100, ertiga: 7900, innova: 10400 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kathgodam", pickupDrop: "Pickup / Drop", price: { dzire: 4200, ertiga: 5600, innova: 7400 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Haldwani", pickupDrop: "Pickup / Drop", price: { dzire: 4200, ertiga: 5600, innova: 7400 }, extraWaiting: { pricePerHour: 300 } },
        {
          location: "Pantnagar Airport",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 5200, ertiga: 6000, innova: 8650 },
          extraWaiting: { pricePerHour: 300 },
        },
        { location: "Rudrapur", pickupDrop: "Pickup / Drop", price: { dzire: 5200, ertiga: 6000, innova: 8650 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kashipur", pickupDrop: "Pickup / Drop", price: { dzire: 3200, ertiga: 4000, innova: 6100 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Moradabad", pickupDrop: "Pickup / Drop", price: { dzire: 5200, ertiga: 6000, innova: 8000 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Bareilly", pickupDrop: "Pickup / Drop", price: { dzire: 7100, ertiga: 8000, innova: 10400 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Rishikesh", pickupDrop: "Pickup / Drop", price: { dzire: 9100, ertiga: 10400, innova: 11700 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Haridwar", pickupDrop: "Pickup / Drop", price: { dzire: 8100, ertiga: 9700, innova: 10400 }, extraWaiting: { pricePerHour: 300 } },
        {
          location: "Dehradun / City",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 9100, ertiga: 10500, innova: 14900 },
          extraWaiting: { pricePerHour: 300 },
        },
        {
          location: "Delhi / City",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 9100, ertiga: 10500, innova: 14900 },
          extraWaiting: { pricePerHour: 300 },
        },
        { location: "Gurugram", pickupDrop: "Pickup / Drop", price: { dzire: 9700, ertiga: 11650, innova: 16800 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Mussoorie", pickupDrop: "Pickup / Drop", price: { dzire: 11700, ertiga: 13000, innova: 17500 }, extraWaiting: { pricePerHour: 300 } },
      ],
    },
  ],
  policies: [
    "It is mandatory to pay 5% GST as per government rules.",
    "Booking without advance will not be considered. It is necessary to pay advance for booking.",
    "Payment will not be refunded once the vehicle reaches the resort.",
  ],
};
