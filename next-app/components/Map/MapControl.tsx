import React from 'react'
import styles from './Map.module.css'
import { NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'

const MapControl = () => {
  return (
    <div className={styles.controllers}>
      <div className={styles.control}>
        <RiIcons.RiMap2Line />
      </div>
      <NavigationControl style={{ position: 'relative', margin: '10px' }} />
      <div className={styles.control}>
        <GeolocateControl />
      </div>
      <div className={styles.control}>
        <FullscreenControl />
      </div>
      <div className={styles.control}>
        <MdIcons.MdShareLocation />{/*  onClick={() => FlyToPoint(-79.797, 8.719, 7)}/> */}
      </div>
    </div>
  )
}

export default MapControl
