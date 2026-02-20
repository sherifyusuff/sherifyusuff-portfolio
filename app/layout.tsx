import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Sherif Yusuff | Full-Stack Developer',
  description: 'Full-Stack Web Developer & WordPress Developer building scalable, modern web solutions for international clients.',
  keywords: ['Full-Stack Developer', 'WordPress Developer', 'React', 'Next.js', 'Node.js', 'Web Development'],
  authors: [{ name: 'Sherif Yusuff' }],
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
    <html lang="en" suppressHydrationWarning className={`${_inter.variable} ${_spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
