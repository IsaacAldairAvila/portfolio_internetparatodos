import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map/Map'
import ParticlesContainer from '../components/background/Background'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Puntos de acceso Internet Para Todos</title>
        <meta name="description" content="Puntos de acceso Internet Para Todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ParticlesContainer />
        <div className={styles.navbar}>
          navbar
        </div>
        <div className={styles.content}>
          <div className={styles.sidebar}>
            sidebar
          </div>
          <div className={styles.map}>
            <Map />
          </div>
        </div>
        <div className={styles.infobar}>
        </div>
      </main>
    </div>
  )
}

export default Home
