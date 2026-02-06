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
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://vishaltoolsenterprise.com'),
  title: {
    default: "Vishal Tools Enterprise | Precision Engineering & Industrial Machinery",
    template: "%s | Vishal Tools Enterprise"
  },
  description: "Vishal Tools Enterprise: Leading manufacturer of industrial machinery, CNC components, hammers mills, and custom engineering solutions in Vadodara, Gujarat. Global supplier of precision tools for over 25 years.",
  keywords: ["Industrial Machinery", "CNC Machining", "Precision Engineering", "Vadodara Manufacturer", "Hammer Mills", "Conveyor Systems", "Industrial Spare Parts", "Gujarat Engineering", "Steel Components", "Custom Fabrication"],
  authors: [{ name: "Vishal Tools Enterprise", url: 'https://vishaltoolsenterprise.com' }],
  creator: "Vishal Tools Enterprise",
  publisher: "Vishal Tools Enterprise",
  applicationName: "Vishal Tools Enterprise",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Industrial Manufacturing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification-code', // Placeholder
    other: {
      me: ['vishaltoolsenterprise2004@gmail.com'],
    },
  },
  openGraph: {
    title: "Vishal Tools Enterprise | World-Class Industrial Solutions",
    description: "Premium manufacturer of industrial machinery and custom engineering solutions serving global markets from Vadodara.",
    url: 'https://vishaltoolsenterprise.com',
    siteName: 'Vishal Tools Enterprise',
    images: [
      {
        url: '/Hero.jpg',
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
    images: ['/Hero.jpg'],
    creator: '@vishaltools', // Placeholder
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
  // Geo-targeting "Secret Sauce"
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Vadodara',
    'geo.position': '22.2568;73.1901',
    'ICBM': '22.2568, 73.1901',
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
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JP5XLCYZN7');
          `}
        </Script>

        <Script id="json-ld" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vishal Tools Enterprise",
              "image": "https://vishaltoolsenterprise.com/Hero.jpg",
              "telephone": "+918735972509",
              "email": "vishaltoolsenterprise2004@gmail.com",
              "url": "https://vishaltoolsenterprise.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 101, Parvati Nagar, No. 2, Makarpura, B/h Makarpura S. T. Depot, Near Nilkanth Residency",
                "addressLocality": "Vadodara",
                "addressRegion": "Gujarat",
                "postalCode": "390010",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.2568,
                "longitude": 73.1901
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/",
                "https://twitter.com/",
                "https://www.linkedin.com/",
                "https://www.youtube.com/"
              ]
            }
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
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
