import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import HomePage from "@components/screens/homePage"
import { Locales } from "@typings/globalTypes"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Popcorn - Movie Database | Ratings | Watchlists</title>
      <meta name="description" content="Boilerplate" />
    </Head>
    <HomePage />
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
