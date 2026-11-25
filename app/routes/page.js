
import Link from 'next/link';
import routes from '../routes';

export default function RoutesPage() {
  return (
    <div className="container">
      <h2 className="page-title">Available Bus Routes</h2>

      <div className="routes-list">
        {routes.map((bus) => (
          <Link
            href={`/routes/${bus.id}`}
            key={bus.id}
            className="route-link"
          >
            <div className="route-card">
              <h3>Route {bus.id}</h3>

              <p>Destination: {bus.city}</p>
              <p>Departure: {bus.time}</p>
              <p>Seat Price: Rs. {bus.price}</p>

              <span className="view-link">
                View Route →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
