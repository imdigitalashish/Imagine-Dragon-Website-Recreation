import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'
import MusicProvider from "../providers/musicProvider";
import MerchProvider from '../providers/storeProvider';
function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />

    </Head>
    <MusicProvider>
      <MerchProvider>
        <Component {...pageProps} />
      </MerchProvider>
    </MusicProvider>


  </Layout>
}

export default MyApp
