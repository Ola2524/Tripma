export const users = [
  { id: 1, email: "yifei.chen@example.com", password: "$fmsdkmfklmfd.wqmdemf" },
  {
    id: 2,
    email: "kaori.yamaguchi@example.com",
    password: "$adaswdkaklfnkjasjkfne",
  },
  {
    id: 3,
    email: "anthony.lewis@example.com",
    password: "$wqdlkasmfmdkmksdvsddkl",
  },
];

export const payments = [
  {
    id: 1,
    card_name: "Sophia Knowles",
    card_number: "1234567890123456",
    Expiration_date: 10 / 23,
    CCV: 123,
    user_id: 1,
  },
];

export const hotels = [
  {
    id: 1,
    name: "The Bund",
    img: "hotel1.jfif",
    price: 598,
    description: "China’s most international city",
    city_id: 1,
  },
  {
    id: 2,
    name: "Sydney Opera House",
    img: "hotel2.png",
    price: 981,
    description: "Take a stroll along the famous harbor",
    city_id: 2,
  },
  {
    id: 3,
    name: "Kōdaiji Temple",
    img: "hotel3.png",
    price: 633,
    description: "Step back in time in the Gion district",
    city_id: 3,
  },
  {
    id: 4,
    name: "Tsavo East National Park, Kenya",
    img: "hotel4.jfif",
    price: "$1,248",
    description:
      "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.",
    city_id: 3,
  },
];

export const countries = [
  { id: 1, name: "South Korea" },
  { id: 2, name: "Hawaii" },
  { id: 3, name: "Germany" },
];

export const cities = [
  { id: 1, name: "Seoul", country_id: 1 },
  { id: 1, name: "Honolulu", country_id: 2 },
  { id: 1, name: "Berlin", country_id: 3 },
];

export const reviews = [
  {
    id: 1,
    name: "Yifei Chen",
    date: "15-12-2024",
    img: "avatar.png",
    rate: "5",
    message:
      "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me",
    city_id: 1,
  },
  {
    id: 2,
    name: "Kaori Yamaguchi",
    date: "25-7-2021",
    img: "avatar (1).png",
    rate: "4",
    message:
      "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy",
    city_id: 1,
  },
  {
    id: 3,
    name: "Anthony Lewis",
    date: "1-1-2022",
    img: "avatar (2).png",
    rate: "5",
    message:
      "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for",
    city_id: 1,
  },
];

export const flights = [
  {
    id: 1,
    img: "Delta Airlines.png",
    flight_number: "FIG4312",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "SFO",
    to: "ATL",
    startDate: "Jan 1",
    endDate: "Jan 6",
    departure_time: "7:00AM",
    return_time: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "624",
    seat_class: "a",
    available_seats: 20,
    from_city: "California",
    from_country: "US",
    to_city: "Tokyo",
    to_country: "Japan",
  },
  {
    id: 2,
    img: "Japan Airlines.png",
    flight_number: "FIG4312",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "ATL",
    to: "LAX",
    startDate: "Dec 27",
    endDate: "Dec 28",
    departure_time: "7:00AM",
    return_time: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "663",
    seat_class: "a",
    available_seats: 50,
    from_city: "Tokyo",
    from_country: "Japan",
    to_city: "California",
    to_country: "US",
  },
  {
    id: 3,
    img: "image 25.png",
    flight_number: "FIG4312",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "LAX",
    to: "SFO",
    startDate: "Dec 24",
    endDate: "Dec 30",
    departure_time: "7:00AM",
    return_time: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "690",
    seat_class: "a",
    available_seats: 10,
    from_city: "California",
    from_country: "US",
    to_city: "Tokyo",
    to_country: "Japan",
  },
  {
    id: 4,
    img: "United Airlines.png",
    flight_number: "FIG4312",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "SFO",
    to: "LAX",
    startDate: "Jan 1",
    endDate: "Jan 3",
    departure_time: "7:00AM",
    return_time: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "756",
    seat_class: "a",
    available_seats: 20,
    from_city: "Tokyo",
    from_country: "Japan",
    to_city: "California",
    to_country: "US",
  },
  {
    id: 5,
    img: "image 25.png",
    flight_number: "FIG4312",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "SFO",
    to: "LAX",
    startDate: "Jan 1",
    endDate: "Jan 3",
    departure_time: "7:00AM",
    return_time: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "756",
    seat_class: "a",
    available_seats: 20,
    from_city: "Tokyo",
    from_country: "Japan",
    to_city: "California",
    to_country: "US",
  },
];

// export const bookings = [
//   {
//     id: 1,
//     img: "Delta Airlines.png",
//     airline_name: "Hawaiian Airlines",
//     flight_number: "FIG4312",
//     duration: "16h 45m",
//     from: "SFO",
//     to: "ATL",
//     departure_date: "7:00AM",
//     return_date: "4:15PM",
//     stop_number: "1",
//     stop_duration: "2h 45m",
//     stop_place: "HNL",
//     round_trip_price: "624",
//     seat_class: "a",
//     available_seats: 20,
//   },
//   {
//     id: 2,
//     img: "Delta Airlines.png",
//     airline_name: "Hawaiian Airlines",
//     flight_number: "FIG4312",
//     duration: "16h 45m",
//     from: "SFO",
//     to: "ATL",
//     departure_date: "7:00AM",
//     return_date: "4:15PM",
//     stop_number: "1",
//     stop_duration: "2h 45m",
//     stop_place: "HNL",
//     round_trip_price: "624",
//     seat_class: "a",
//     available_seats: 50,
//   },
// ];
export const bookings = [
  {
    id: 1,
    img: "United Airlines.png",
    flight_number: "FIG4312",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "SFO",
    to: "LAX",
    startDate: "Dec 24",
    endDate: "Dec 25",
    departure_time: "7:00AM",
    return_time: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "756",
    seat_class: "business",
    available_seats: 20,
  },
];

export const seats = [
  {
    cabin: "BUSINESS",
    number: "14A",
    characteristicsCodes: ["1", "CH", "LS", "O", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "AVAILABLE",
        price: {
          currency: "EUR",
          total: "25.00",
        },
      },
    ],
    coordinates: {
      x: 1,
      y: 0,
    },
  },
  {
    cabin: "BUSINESS",
    number: "14B",
    characteristicsCodes: ["1", "9", "CH", "LS", "O", "1A_AQC_PREMIUM_SEAT"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 1,
      y: 1,
    },
  },
  {
    cabin: "BUSINESS",
    number: "14C",
    characteristicsCodes: ["1", "A", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 1,
      y: 2,
    },
  },
  {
    cabin: "BUSINESS",
    number: "14D",
    characteristicsCodes: ["1", "A", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 1,
      y: 4,
    },
  },
  {
    cabin: "BUSINESS",
    number: "14E",
    characteristicsCodes: ["1", "9", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 1,
      y: 5,
    },
  },
  {
    cabin: "BUSINESS",
    number: "14F",
    characteristicsCodes: ["1", "CH", "O", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 1,
      y: 6,
    },
  },
  {
    cabin: "BUSINESS",
    number: "15A",
    characteristicsCodes: ["1", "CH", "LS", "O", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 2,
      y: 0,
    },
  },
  {
    cabin: "BUSINESS",
    number: "15B",
    characteristicsCodes: ["1", "9", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 2,
      y: 1,
    },
  },
  {
    cabin: "BUSINESS",
    number: "15C",
    characteristicsCodes: ["1", "A", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 2,
      y: 2,
    },
  },
  {
    cabin: "BUSINESS",
    number: "15D",
    characteristicsCodes: ["1", "A", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 2,
      y: 4,
    },
  },
  {
    cabin: "BUSINESS",
    number: "15E",
    characteristicsCodes: ["1", "9", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 2,
      y: 5,
    },
  },
  {
    cabin: "BUSINESS",
    number: "15F",
    characteristicsCodes: ["1", "CH", "O", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 2,
      y: 6,
    },
  },
  {
    cabin: "BUSINESS",
    number: "16A",
    characteristicsCodes: ["1", "CH", "LS", "O", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 3,
      y: 0,
    },
  },
  {
    cabin: "BUSINESS",
    number: "16B",
    characteristicsCodes: ["1", "9", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 3,
      y: 1,
    },
  },
  {
    cabin: "BUSINESS",
    number: "16C",
    characteristicsCodes: ["1", "A", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 3,
      y: 2,
    },
  },
  {
    cabin: "BUSINESS",
    number: "16D",
    characteristicsCodes: ["1", "A", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 3,
      y: 4,
    },
  },
  {
    cabin: "BUSINESS",
    number: "16E",
    characteristicsCodes: ["1", "9", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 3,
      y: 5,
    },
  },
  {
    cabin: "BUSINESS",
    number: "16F",
    characteristicsCodes: ["1", "CH", "O", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 3,
      y: 6,
    },
  },
  {
    cabin: "BUSINESS",
    number: "18A",
    characteristicsCodes: ["1", "1A", "CH", "LS", "O", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 5,
      y: 0,
    },
  },
  {
    cabin: "BUSINESS",
    number: "18B",
    characteristicsCodes: ["1", "1A", "9", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 5,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "18C",
    characteristicsCodes: ["1", "1A", "A", "CH", "LS", "O"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 5,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "18D",
    characteristicsCodes: ["1", "A", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 5,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "18E",
    characteristicsCodes: ["1", "9", "CH", "O", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 5,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "18F",
    characteristicsCodes: ["1", "CH", "O", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 5,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "19A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 6,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "19B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 6,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "19C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 6,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "19D",
    travelerPricing: [
      {
        id: "1",
        characteristicsCodes: ["1", "A", "CH", "RS"],
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 6,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "19E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 6,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "19F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 6,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "20A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 7,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "20B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 7,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "20C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 7,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "20D",
    characteristicsCodes: ["A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "OCCUPIED",
      },
    ],
    coordinates: {
      x: 7,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "20E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 7,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "20F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 7,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "21A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 8,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "21B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 8,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "21C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 8,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "21D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 8,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "21E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 8,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "21F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 8,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "22A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 9,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "22B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 9,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "22C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 9,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "22D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 9,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "22E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 9,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "22F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 9,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "23A",
    characteristicsCodes: ["1", "1A", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 10,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "23B",
    characteristicsCodes: ["1", "1A", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 10,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "23C",
    characteristicsCodes: ["1", "1A", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 10,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "23D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 10,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "23E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 10,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "23F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 10,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "24A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 11,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "24B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 11,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "24C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 11,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "24D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 11,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "24E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 11,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "24F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 11,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "25B",
    characteristicsCodes: ["1", "1A", "1D", "9", "CH", "IE", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 12,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "25C",
    characteristicsCodes: ["1", "1A", "1D", "A", "CH", "IE", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 12,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "25D",
    characteristicsCodes: ["1", "1A", "1D", "A", "CH", "IE", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 12,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "25E",
    characteristicsCodes: ["1", "1A", "1D", "9", "CH", "IE", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 12,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "26A",
    characteristicsCodes: ["1", "1A", "CH", "E", "L", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 13,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "26B",
    characteristicsCodes: ["1", "1A", "9", "CH", "E", "L", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 13,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "26C",
    characteristicsCodes: ["1", "1A", "A", "CH", "E", "L", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 13,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "26E",
    characteristicsCodes: ["1", "1A", "9", "CH", "E", "L", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 13,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "26F",
    characteristicsCodes: ["1", "1A", "CH", "E", "L", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 13,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "27A",
    characteristicsCodes: ["1", "1A", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 14,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "27B",
    characteristicsCodes: ["1", "1A", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 14,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "27C",
    characteristicsCodes: ["1", "1A", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 14,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "27D",
    characteristicsCodes: ["1", "1A", "A", "CH", "L", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 14,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "27E",
    characteristicsCodes: ["1", "1A", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 14,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "27F",
    characteristicsCodes: ["1", "1A", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 14,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "28A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 15,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "28B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 15,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "28C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 15,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "28D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 15,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "28E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 15,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "28F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 15,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "29A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 16,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "29B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 16,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "29C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 16,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "29D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 16,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "29E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 16,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "29F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 16,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "30A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 17,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "30B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 17,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "30C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 17,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "30D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 17,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "30E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 17,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "30F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 17,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "31A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 18,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "31B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 18,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "31C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 18,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "31D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 18,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "31E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 18,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "31F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 18,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "32A",
    characteristicsCodes: ["1", "CH", "H", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 19,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "32B",
    characteristicsCodes: ["1", "9", "CH", "LS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 19,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "32C",
    characteristicsCodes: ["1", "A", "CH", "LS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 19,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "32D",
    characteristicsCodes: ["1", "A", "CH", "RS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 19,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "32E",
    characteristicsCodes: ["1", "9", "CH", "RS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 19,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "32F",
    characteristicsCodes: ["1", "CH", "H", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 19,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "33A",
    characteristicsCodes: ["1", "1A", "CH", "H", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 20,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "33B",
    characteristicsCodes: ["1", "1A", "9", "CH", "LS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 20,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "33C",
    characteristicsCodes: ["1", "1A", "A", "CH", "LS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 20,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "33D",
    characteristicsCodes: ["1", "A", "CH", "RS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 20,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "33E",
    characteristicsCodes: ["1", "9", "CH", "RS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 20,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "33F",
    characteristicsCodes: ["1", "CH", "H", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 20,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "34A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 21,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "34B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 21,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "34C",
    characteristicsCodes: ["1", "A", "CH", "LS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 21,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "34D",
    characteristicsCodes: ["1", "A", "CH", "RS", "U"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 21,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "34E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 21,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "34F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 21,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "35A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 22,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "35B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 22,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "35C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 22,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "35D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 22,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "35E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 22,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "35F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 22,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "36A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 23,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "36B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 23,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "36C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 23,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "36D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 23,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "36E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 23,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "36F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 23,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "37A",
    characteristicsCodes: ["1", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 24,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "37B",
    characteristicsCodes: ["1", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 24,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "37C",
    characteristicsCodes: ["1", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 24,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "37D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 24,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "37E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 24,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "37F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 24,
      y: 6,
    },
  },
  {
    cabin: "ECONOMY",
    number: "38A",
    characteristicsCodes: ["1", "1A", "CH", "LS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 25,
      y: 0,
    },
  },
  {
    cabin: "ECONOMY",
    number: "38B",
    characteristicsCodes: ["1", "1A", "9", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 25,
      y: 1,
    },
  },
  {
    cabin: "ECONOMY",
    number: "38C",
    characteristicsCodes: ["1", "1A", "A", "CH", "LS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 25,
      y: 2,
    },
  },
  {
    cabin: "ECONOMY",
    number: "38D",
    characteristicsCodes: ["1", "A", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 25,
      y: 4,
    },
  },
  {
    cabin: "ECONOMY",
    number: "38E",
    characteristicsCodes: ["1", "9", "CH", "RS"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 25,
      y: 5,
    },
  },
  {
    cabin: "ECONOMY",
    number: "38F",
    characteristicsCodes: ["1", "CH", "RS", "W"],
    travelerPricing: [
      {
        id: "1",
        seatAvailabilityStatus: "BLOCKED",
      },
    ],
    coordinates: {
      x: 25,
      y: 6,
    },
  },
];
