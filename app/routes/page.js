
import routes from '../routes';

export default function RoutesPage() {
  return (
    <div className="container">
      <h2 className="page-title">Available Bus Routes</h2>

      <div className="routes-list">
        {routes.map((bus) => (
          <div className="route-card" key={bus.id}>
            <h3>Route {bus.id}</h3>

            <p>Destination: {bus.city}</p>
            <p>Departure: {bus.time}</p>
            <p>Seat Price: Rs. {bus.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
