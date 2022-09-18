import React from 'react'
import ApexChart from '../../charts/Barra'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ApexChart
        title='Cantidad de dispositivos por provincia'
      />
      <ApexChart
        title='Consumo por provincia mes de Julio'
      />
    </div>
  )
}

export default Sidebar