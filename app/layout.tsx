// layout.tsx
import Head from 'next/head';
import { Ubuntu } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/Navbar';
import ToasterContext from '@/context/ToasterContext';
import { Theme } from '@/providers/ThemeProvider';

// Define the Metadata type
interface Metadata {
  title: string;
  description: string;
}

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

// Define the metadata object
const metadata: Metadata = {
  title: 'My Kanban',
  description: 'Personal Kanban Board',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <html lang="en">
        <body className={`${ubuntu.className} dark:bg-gray-900`} suppressHydrationWarning>
          <Theme>
            <ToasterContext />
            <Navbar />
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
