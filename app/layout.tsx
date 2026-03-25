import type { Metadata, Viewport } from 'next'
import { Manrope, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteShell } from '@/components/site-shell'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const _sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL('https://sherifyusuff-portfolio.vercel.app'),
  title: 'Sherif Yusuff | Full-Stack Developer',
  description: 'Full-Stack Web Developer & WordPress Developer building scalable, modern web solutions for international clients.',
  keywords: ['Full-Stack Developer', 'WordPress Developer', 'React', 'Next.js', 'Node.js', 'Web Development'],
  authors: [{ name: 'Sherif Yusuff' }],
  openGraph: {
    title: 'Sherif Yusuff | Full-Stack Developer',
    description: 'Full-Stack Web Developer & WordPress Developer building scalable, modern web solutions for international clients.',
    type: 'website',
    url: 'https://sherifyusuff-portfolio.vercel.app',
    siteName: 'Sherif Yusuff Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sherif Yusuff | Full-Stack Developer',
    description: 'Full-Stack Web Developer & WordPress Developer building scalable, modern web solutions for international clients.',
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f1f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1d2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${_manrope.variable} ${_sora.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
