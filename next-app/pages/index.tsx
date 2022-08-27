import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Puntos de acceso Internet Para Todos</title>
        <meta name="description" content="Puntos de acceso Internet Para Todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        main
      </main>
    </div>
  )
}

export default Home
