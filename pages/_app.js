import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'
import { AppWrapper } from "../context/AppContext.js"
import NextNProgress from "nextjs-progressbar";


export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Head>
          <title>Thuocsi Shoes</title>
        </Head>

        <Script
          id="bootstrap-cdn"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}