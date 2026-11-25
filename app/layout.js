
import './globals.css';

export const metadata = {
  title: 'City Stand Bus Office',
  description: 'Bus timetable and route information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>City Stand Bus Office</h1>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          Roll Number: 247233
        </footer>
      </body>
    </html>
  );
}
