import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
