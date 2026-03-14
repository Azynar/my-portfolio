import { Syne, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Azynar — Web3 Developer & Technical Writer',
  description: 'Portfolio of Azynar — Web3 Developer & Technical Writer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  )
}