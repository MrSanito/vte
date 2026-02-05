import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "src/components/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import WhatsAppButton from "../components/WhatsAppButton";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://vishaltoolsenterprise.com'), // Replace with actual domain
  title: {
    default: "Vishal Tools Enterprise | Precision Engineering & Industrial Machinery",
    template: "%s | Vishal Tools Enterprise"
  },
  description: "Vishal Tools Enterprise: Leading manufacturer of industrial machinery, CNC components, and custom engineering solutions in Vadodara, Gujarat. Global supplier of precision tools.",
  keywords: ["Industrial Machinery", "CNC Machining", "Precision Engineering", "Vadodara Manufacturer", "Hammer Mills", "Conveyor Systems", "Industrial Spare Parts", "Gujarat Engineering"],
  authors: [{ name: "Vishal Tools Enterprise" }],
  creator: "Vishal Tools Enterprise",
  publisher: "Vishal Tools Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vishal Tools Enterprise | World-Class Industrial Solutions",
    description: "Premium manufacturer of industrial machinery and custom engineering solutions serving global markets from Vadodara.",
    url: 'https://vishaltoolsenterprise.com',
    siteName: 'Vishal Tools Enterprise',
    images: [
      {
        url: '/Hero.jpg', // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: 'Vishal Tools Enterprise Factory Floor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vishal Tools Enterprise | Industrial Excellence",
    description: "Precision manufacturing and custom engineering solutions for the modern industry.",
    images: ['/Hero.jpg'], // Ensure this image exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JP5XLCYZN7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JP5XLCYZN7');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vbqdl2iofj");
          `}
        </Script>
      </body>
    </html>
  );
}
