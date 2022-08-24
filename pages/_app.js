import '@/styles/globals.css'
import Layout from '@/features/layout/index'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
