import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/front-pages/landing-page')

  return null
}
 