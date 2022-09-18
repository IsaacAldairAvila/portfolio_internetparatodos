import React, { useState, useEffect, useCallback } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map/Map'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import ParticlesContainer from '../components/background/Background'
import DATA_JSON from '../data/puntos-acceso.json'
import INFO_JSON from '../data/data-junio.json'
import { Arreglo, ObjectData } from '../process/Data'
import RadialTipoConexion from '../charts/RadialTipoConexion'
import CircularTipoRed from '../charts/PieChart'
import ListTop from '../charts/LIstTop'
import Infobar from '../charts/InfoBar'
const Home: NextPage = () => {
  const datapuntos = DATA_JSON
  const dataconsumo = INFO_JSON
  // const geodata = Arreglo(datapuntos, ObjectData(datapuntos))
  const [viewState, setViewState] = useState({ longitude: -79.797, latitude: 8.719, zoom: 7, pitch: 0, bearing: 0 })

  return (
    <div className={styles.container}>
      <Head>
        <title>Puntos de acceso Internet Para Todos</title>
        <meta name="description" content="Puntos de acceso Internet Para Todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ParticlesContainer />
        <Navbar />
        <div className={styles.content}>
          {/* <Sidebar /> */}
          <div className={styles.center}>
            <div className={styles.infobar}>
              {/* <Infobar /> */}
              <RadialTipoConexion />
              <CircularTipoRed />
              <ListTop />
            </div>
            <div className={styles.map}>
              <Map
                dataconsumo={dataconsumo}
                datapuntos={datapuntos}
              />
            </div>
          </div>
          {/* <Sidebar /> */}
        </div>
      </main>
    </div>
  )
}

export default Home
