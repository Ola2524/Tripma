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
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "SFO",
    to: "ATL",
    departure_date: "7:00AM",
    return_date: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "$624",
    seat_class: "a",
  },
  {
    id: 2,
    img: "Japan Airlines.png",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "ATL",
    to: "LAX",
    departure_date: "7:00AM",
    return_date: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "$624",
    seat_class: "a",
  },
  {
    id: 3,
    img: "image 25.png",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "LAX",
    to: "SFO",
    departure_date: "7:00AM",
    return_date: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "$624",
    seat_class: "a",
  },
  {
    id: 4,
    img: "United Airlines.png",
    airline_name: "Hawaiian Airlines",
    duration: "16h 45m",
    from: "",
    to: "",
    departure_date: "7:00AM",
    return_date: "4:15PM",
    stop_number: "1",
    stop_duration: "2h 45m",
    stop_place: "HNL",
    round_trip_price: "$624",
    seat_class: "a",
  },
];