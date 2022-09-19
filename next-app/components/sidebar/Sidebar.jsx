import React from 'react'
import ApexChart from '../../charts/Barra'
import styles from './Sidebar.module.css'

const Sidebar = () => {

  const data1 = [
    53,
    256,
    25,
    105,
    70,
    3,
    7,
    36,
    350,
    166,
    64,
    63,
    99
  ]
  const data2 = [
    10514,
    26771,
    3702,
    9290,
    14837,
    480,
    525,
    7398,
    63345,
    17618,
    4483,
    3642,
    6610
  ]
  const color = ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7']
  const name = [
    'Bocas del Toro',
    'Chiriquí',
    'Comarca Ngäbe-Buglé',
    'Veraguas',
    'Colón',
    'Comarca Emberá-Wounaan',
    'Comarca Guna Yala',
    'Darien',
    'Panamá',
    'Coclé',
    'Herrera',
    'Los Santos',
    'Panamá Oeste',
  ]

  return (
    <div className={styles.sidebar}>
      <ApexChart
        title='Cantidad de puntos por provincia'
        data={data1}
        color={color}
        name={name}
      />
      <ApexChart
        title='Consumo por provincia por mes'
        data={data2}
        color={color}
        name={name}
      />
    </div>
  )
}

export default Sidebar