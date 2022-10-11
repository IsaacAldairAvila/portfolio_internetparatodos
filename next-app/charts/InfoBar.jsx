import React, { useEffect, useState } from 'react'
import styles from './Charts.module.css'
import { useRouter } from 'next/router';
import Router from 'next/router';
const InfoBar = () => {
  const [gender, setGender] = useState('grafico');

  const handleChange = (e) => {
    setGender(e.target.value);
  }

useEffect(() => {
  Router.push({
    pathname: '/',
    query: {
      tab: gender,
    }
  })
}, [gender])

return (
  <div className={styles.info}>
    <div className={styles.cantidad}>
      <div className={styles.item}>
        <p className={styles.name}>
          Cantidad puntos de puntos
        </p>
        <p className={styles.value}>
          1320
        </p>
      </div>
      <div className={styles.item}>
        <p className={styles.name}>
          Consumo mensual nacional
        </p>
        <p className={styles.value}>
          173634 GB
        </p>
      </div>
    </div>
    <div className={styles.radiomapa}>

      <form className={styles.formradio}>
        <div className={styles.toptitle}>
          Tipo de Mapa
        </div>
        <div className={styles.radioitem}>
          <input
            type="radio"
            value="grafico"
            id="grafico"
            onChange={handleChange}
            name="top"
            checked={gender === 'grafico' ? true : false}
          />
          <label htmlFor="male">Mapa gráfico</label>
        </div>
        <div className={styles.radioitem}>
          <input
            type="radio"
            value="calor"
            id="calor"
            onChange={handleChange}
            name="top"
            checked={gender === 'calor' ? true : false}
          />
          <label htmlFor="female">Mapa de calor</label>
        </div>
        <div className={styles.radioitem}>
          <input
            type="radio"
            value="puntos"
            id="puntos"
            onChange={handleChange}
            name="top"
            checked={gender === 'puntos' ? true : false}
          />
          <label htmlFor="puntos">Mapa de puntos</label>
        </div>
      </form>
    </div>
  </div>
)
}

export default InfoBar