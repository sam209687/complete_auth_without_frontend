import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '../context/AuthProvider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'derivesolars',
  description: 'Transmitting energy.....',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning >
     
        <body className={inter.className} >
          <ThemeProvider
           attribute="class"
           defaultTheme="dark"
           enableSystem
           disableTransitionOnChange
          >
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster />
          </AuthProvider>
          </ThemeProvider>
        </body>
     
    </html>
  );
}
