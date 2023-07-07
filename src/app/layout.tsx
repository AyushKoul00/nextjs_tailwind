import { FC } from 'react'
import './globals.css'

export const metadata = {
  title: 'Teach Aarul Nextjs',
  description: 'My custom next js app',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;