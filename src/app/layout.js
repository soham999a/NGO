import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata = {
  title: 'Treasures of Innocence | Empowering Communities Through Learning',
  description: 'Treasures of Innocence works at the intersection of education, skills, and empowerment—uplifting children, youth, and women by closing the gaps, amplifying creativity, and nurturing self-reliance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
