import { ReactPropTypes, JSXElementConstructor } from 'react'
import '../styles/normalize.css'
import '../styles/global.css'
import '../styles/prism.css'

type Props = {
  Component: JSXElementConstructor<any>,
  pageProps: ReactPropTypes
}

export default function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}
