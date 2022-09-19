import React, { useEffect, useState } from 'react'
import styles from './Charts.module.css'
const InfoBar = () => {
  const [gender, setGender] = useState('distrito');
  const handleChange = (e) => {
    setGender(e.target.value);
  }

  useEffect(() => {

  }, [gender])

  return (
    <div className={styles.info}>
      <div className={styles.cantidad}>
        <div className={styles.item}>
          <p className={styles.name}>
            Cantidad puntos de acceso
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
              value="distrito"
              id="distrito"
              onChange={handleChange}
              name="top"
              checked={gender === 'distrito' ? true : false}
            />
            <label htmlFor="male">Mapa gráfico</label>
          </div>
          <div className={styles.radioitem}>
            <input
              type="radio"
              value="corregimiento"
              id="corregimiento"
              onChange={handleChange}
              name="top"
              checked={gender === 'corregimiento' ? true : false}
            />
            <label htmlFor="female">Mapa de calor</label>
          </div>
          <div className={styles.radioitem}>
            <input
              type="radio"
              value="acceso"
              id="acceso"
              onChange={handleChange}
              name="top"
              checked={gender === 'acceso' ? true : false}
            />
            <label htmlFor="acceso">Mapa de puntos</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InfoBar