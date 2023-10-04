import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Movies from "@components/screens/movies"
import { Locales } from "@typings/globalTypes"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Popcorn - Movie Database | Ratings | Watchlists</title>
      <meta name="description" content="Boilerplate" />
    </Head>
    <Movies />
  </>
)

export default Home

export async function getStaticProps({ locale }: { locale: Locales }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
