import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import SideBanners from '@/components/SideBanners';
import { SHOP } from '@/data/shop';

export const metadata = {
  title: { default: `${SHOP.name} – iPhone Lock, Quốc tế, iPad cũ tại TP.HCM`, template: `%s | ${SHOP.name}` },
  description: `${SHOP.name}: iPhone Lock, iPhone Quốc tế, iPad cũ kiểm kỹ, giá rõ. Free ship toàn quốc, trả góp 0%, fix sim trọn đời. ${SHOP.address}. Hotline ${SHOP.phoneDisplay} – ${SHOP.phone2Display}.`,
  icons: { icon: '/logo.svg' },
};

export const viewport = { themeColor: '#1A1E25', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Lexend:wght@500;600;700&display=swap" />
      </head>
      <body>
        <Header />
        <SideBanners />
        <main>{children}</main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
