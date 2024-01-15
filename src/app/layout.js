import { Jura } from 'next/font/google'
import './globals.css'

const inter = Jura({ subsets: ['latin'] })

export const metadata = {
  title: 'Insuradvice',
  description: 'Biztosítás másképp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
