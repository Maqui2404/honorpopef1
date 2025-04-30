// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Papa Francisco - Legado 2013-2025',
  description: 'Sitio de homenaje al legado del Papa Francisco, primer Papa latinoamericano, jesuita, y profundamente comprometido con la justicia, la ecología y la misericordia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}