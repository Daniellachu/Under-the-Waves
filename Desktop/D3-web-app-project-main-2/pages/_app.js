import { StoreProvider } from '@/components/contexts/StoreContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
        <Component {...pageProps} />
    </StoreProvider>
  )
}
