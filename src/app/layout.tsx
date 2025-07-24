import './globals.css';
import { ReactNode } from 'react';
import NavBar from '../app/Navbar'; // Import client NavBar component

export const metadata = {
  title: 'Environmental Issues',
  description: 'Learn about pressing environmental issues and how to take action.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <NavBar />
        <main className="min-h-[70vh]">{children}</main>
        <footer className="bg-gradient-to-br from-green-100 to-green-300 text-center p-4 text-sm text-gray-500 border-t select-none">
          © 2025 Environmental Awareness. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
