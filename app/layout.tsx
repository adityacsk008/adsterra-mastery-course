import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Adsterra Mastery - Become an Adsterra Expert in 7 Days',
  description: 'Learn to create high-earning ad campaigns, scale traffic and withdraw payments internationally. Real proof, templates & a private support group included.',
  keywords: 'Adsterra, ad campaigns, monetization, traffic, online course, digital marketing',
  authors: [{ name: 'Aditya' }],
  openGraph: {
    title: 'Adsterra Mastery - Premium International Course',
    description: 'Learn to create high-earning ad campaigns, scale traffic and withdraw payments internationally.',
    url: 'https://adsterramastery.com',
    siteName: 'Adsterra Mastery',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adsterra Mastery Course',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adsterra Mastery - Become an Adsterra Expert in 7 Days',
    description: 'Learn to create high-earning ad campaigns, scale traffic and withdraw payments internationally.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* JSON-LD Course Schema */}
        <Script id="course-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Adsterra Mastery",
              "description": "Learn to create high-earning ad campaigns, scale traffic and withdraw payments internationally",
              "provider": {
                "@type": "Organization",
                "name": "Adsterra Mastery",
                "sameAs": "https://adsterramastery.com"
              },
              "url": "https://adsterramastery.com",
              "courseCode": "ADM-001",
              "educationalLevel": "Beginner to Advanced",
              "inLanguage": "en",
              "offers": {
                "@type": "Offer",
                "price": "49",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://adsterramastery.com/checkout"
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseWorkload": "PT7D"
              }
            }
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <WhatsAppFloat />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}