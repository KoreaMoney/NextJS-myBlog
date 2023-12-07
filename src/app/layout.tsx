import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from './components/Footer';
import Header from './components/Header';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Dowon | Home',
    description: 'This is Kim Dowon blog that records, learns, and develops.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={sans.className}>
            <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
                <Header />
                <main className="grow"> {children}</main>
                <Footer />
            </body>
        </html>
    );
}
