import LpNavbar from '@/components/LandingPage/LpNavbar';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <LpNavbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
