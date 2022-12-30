import { Montserrat } from '@next/font/google'

import '../styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className={`${montserrat.className} tracking-tighter bg-gradient-to-b from-chineseblack via-chineseblack2 to-darkcharcoal`}>
      <Component {...pageProps} />
    </div>
  )
}
