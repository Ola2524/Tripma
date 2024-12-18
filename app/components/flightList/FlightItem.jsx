import Image from "next/image";

export default function FlightItem({ flight }) {
  return (
    <tr>
      <td>
        <Image
          src={`/images/${flight.img}`}
          alt={flight.airline_name}
          width={40}
          height={40}
        />
      </td>
      <td>
        <p>{flight.duration}</p>
        <p>{flight.airline_name}</p>
      </td>
      <td>{`${flight.departure_date} - ${flight.return_date}`}</td>
      <td>
        <p>
          {flight.stop_number > 0 ? `${flight.stop_number} Stop` : "Nonstop"}
        </p>
        <p>{`${flight.stop_duration} in ${flight.stop_place}`}</p>
      </td>
      <td>
        <p>{flight.round_trip_price}</p>
        <p>round trip</p>
      </td>
    </tr>
  );
}