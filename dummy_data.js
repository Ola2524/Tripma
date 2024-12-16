export const users = [
  { id: 1, email: "yifei.chen@example.com", password: "$fmsdkmfklmfd.wqmdemf" },
  { id: 2, email: "kaori.yamaguchi@example.com", password: "$adaswdkaklfnkjasjkfne" },
  { id: 3, email: "anthony.lewis@example.com", password: "$wqdlkasmfmdkmksdvsddkl" },
];

export const payments = [
    { id: 1, card_name: "Sophia Knowles", card_number: "1234567890123456", Expiration_date:10/23 , CCV: 123, user_id: 1 },
];

export const hotels = [
  { id: 1, name: "The Bund", price: 598, desciption: "China’s most international city", city_id: 1 },
  { id: 2, name: "Sydney Opera House", price: 981, desciption: "Take a stroll along the famous harbor", city_id: 2 },
  { id: 3, name: "Kōdaiji Temple", price: 633, desciption: "Step back in time in the Gion district", city_id: 3 },
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
    rate: "5",
    message:
      "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me",
    city_id: 1,
  },
  {
    id: 2,
    name: "Kaori Yamaguchi",
    date: "25-7-2021",
    rate: "4",
    message:
      "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy",
    city_id: 1,
  },
  {
    id: 3,
    name: "Anthony Lewis",
    date: "1-1-2022",
    rate: "5",
    message:
      "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for",
    city_id: 1,
  },
];
