import React from 'react'
import styles from './Navbar.module.css'
import LOGO from '../../img/logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={LOGO} height={50} width={50}/>
        <h1 className={styles.title}> Red Nacional Internet 2.0 </h1>
      </div>
      <div className={styles.line}></div>
      <h2 className={styles.description}> Hecho con datos de <a href="https://www.datosabiertos.gob.pa/"> Datos Abiertos Panama</a> por <a href="https://www.linkedin.com/in/isaacaldairavila/">Isaac Avila</a>. </h2>
    </div>
  )
}

export default Navbar