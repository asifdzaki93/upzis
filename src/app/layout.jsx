import './globals.css'

export const metadata = {
  title: 'UPZISNU',
  description: 'Aplikasi UPZISNU berbasis Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body>{children}</body>
    </html>
  )
}
