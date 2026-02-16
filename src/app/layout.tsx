import './globals.css'
import { Maven_Pro, Noto_Sans_Thai } from 'next/font/google'

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-maven',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const notoThai = Noto_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-notothai',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="th"
      className={`${mavenPro.variable} ${notoThai.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
