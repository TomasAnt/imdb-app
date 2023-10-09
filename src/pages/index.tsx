import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MoviesDatabase from "@components/screens/moviesDatabase"
import { Locales } from "@typings/globalTypes"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Popcorn: Movie Database | Ratings, Reviews & Watchlists</title>
      <meta
        name="description"
        content="Discover, rate, and keep track of your favorite movies with Popcorn. Dive into our extensive database to find the best films for every mood and occasion."
      />
      <meta
        name="keywords"
        content="Movies, Database, Ratings, Watchlist, Reviews, Popcorn"
      />
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
