import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import WorkoutProvider from '@/context/WorkoutContext';
import { ToastContainer } from "react-toastify";
import Footer from '@/components/shared/footer';



const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Workout',
  description: 'Train with intent. Log every set.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="flex min-h-screen flex-col bg-[#0c0d10] text-white">
  <WorkoutProvider>
    <Navbar />

    <main className="flex-1">{children}</main>

    <Footer />
  </WorkoutProvider>
  <ToastContainer />
</body>
    </html>
  );
}
