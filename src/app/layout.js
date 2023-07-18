import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lite Commerce',
  description: 'Lite Commerce An E-Commerce Platform',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="lemonade" lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
