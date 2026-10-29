import './globals.css'
import { Poppins, Open_Sans, Montserrat } from 'next/font/google'
import { CITY_DISPLAY, SITE_URL } from '../lib/config'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL || 'https://myhomecodenameanandam.co.in'),
  title: 'MyHome Codename Anandam | 2, 3 & 4 BHK Apartments Bengaluru',
  description: 'MyHome Codename Anandam in Whitefield Annex, Bengaluru offers premium 2, 3 & 4 BHK apartments across a 52-acre mixed-use township. Starting from ₹1.6 Cr*.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MyHome Codename Anandam | 2, 3 & 4 BHK Apartments Bengaluru',
    description: 'MyHome Codename Anandam in Whitefield Annex, Bengaluru offers premium 2, 3 & 4 BHK apartments across a 52-acre mixed-use township. Starting from ₹1.6 Cr*.',
    url: SITE_URL || 'https://myhomecodenameanandam.co.in',
    siteName: 'MyHome Codename Anandam',
    images: [
      {
        url: '/images/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'MyHome Codename Anandam',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyHome Codename Anandam | 2, 3 & 4 BHK Apartments Bengaluru',
    description: 'MyHome Codename Anandam in Whitefield Annex, Bengaluru offers premium 2, 3 & 4 BHK apartments across a 52-acre mixed-use township. Starting from ₹1.6 Cr*.',
    images: ['/images/hero/banner1.webp'],
  },
  icons: {
    icon: '/favicon/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateListing',
              name: 'MyHome Codename Anandam',
              url: SITE_URL || 'https://myhomecodenameanandam.co.in',
              description: 'Spacious 2, 3 & 4 BHK Apartments in Whitefield Annex, Bengaluru starting ₹1.6 Cr*',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Whitefield Annex',
                addressRegion: 'Bengaluru',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
