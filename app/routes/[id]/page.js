
import Link from 'next/link';
import { notFound } from 'next/navigation';
import routes from '../../routes';

export default async function RouteDetails({ params }) {
  const { id } = await params;

  const bus = routes.find(
    (route) => route.id === Number(id)
  );

  if (!bus) {
    notFound();
  }

  return (
    <div className="container">
      <div className="details-card">
        <h2>Route {bus.id} Details</h2>

        <p>
          <strong>Destination:</strong> {bus.city}
        </p>

        <p>
          <strong>Departure Time:</strong> {bus.time}
        </p>

        <p>
          <strong>Seat Price:</strong> Rs. {bus.price}
        </p>

        <Link href="/routes" className="back-link">
          ← Back to Routes
        </Link>
      </div>
    </div>
  );
}
