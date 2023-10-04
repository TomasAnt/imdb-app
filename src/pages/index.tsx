import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MoviesDatabase from "@components/screens/moviesDatabase"
import { Locales } from "@typings/globalTypes"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Popcorn - Movie Database | Ratings | Watchlists</title>
      <meta name="description" content="Boilerplate" />
    </Head>
    <MoviesDatabase />
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
