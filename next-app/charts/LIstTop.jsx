import React, { useState } from 'react';
import styles from './Charts.module.css'
import ApexChart from './top5';

const corregimiento = {
    value: [
        15211,
        5100,
        4520,
        4112,
        3647
    ],
    name: [
        'Curundú',
        'Tortí',
        'Rodolfo Aguilar Delgado',
        'Belisario Frías',
        'Chilibre',
    ],
    color: ['#151F30','#103778','#0593A2','#FF7A48','#E3371E']
}
const distrito = {
    value: [
        43864,
        13042,
        10764,
        8493,
        8477
    ],
    name: [
        'Panamá',
        'Colón',
        'San Miguelito',
        'Chepo',
        'Barú'
    ],
    color: ['#151F30','#103778','#0593A2','#FF7A48','#E3371E']
}
const acceso = {
    value: [
        1107,
        1031,
        892,
        887,
        808
    ],
    name: [
        'Proyecto Curundú Torre 17 Edificio B',
        'CEBG Piriati Embera',
        'Escuela Ipetí Chocó',
        'Escuela GERARDO BACORIZO',
        'Escuela Finca Débora'
    ],
    color: ['#151F30','#103778','#0593A2','#FF7A48','#E3371E']
}

const LIstTop = () => {
    const [gender, setGender] = useState('distrito');
    const [data, setData] = useState(distrito);
    const handleChange = (e) => {
        setGender(e.target.value);
        if (e.target.value === 'distrito') {
            setData(distrito)
        }
        else if (e.target.value === 'corregimiento') {
            setData(corregimiento)
        }
        else {
            setData(acceso)
        }
    }

    return (
        <div className={styles.listtop}>
            <div className={styles.toptitle}>
                Top 5 consumo en GB mensual
            </div>
            <div className={styles.radio}>
                <form>
                    <input
                        type="radio"
                        value="distrito"
                        id="distrito"
                        onChange={handleChange}
                        name="top"
                        checked={gender === 'distrito' ? true : false}
                    />
                    <label htmlFor="male">Distrito</label>
                    <input
                        type="radio"
                        value="corregimiento"
                        id="corregimiento"
                        onChange={handleChange}
                        name="top"
                        checked={gender === 'corregimiento' ? true : false}
                    />
                    <label htmlFor="female">Corregimiento</label>

                    <input
                        type="radio"
                        value="acceso"
                        id="acceso"
                        onChange={handleChange}
                        name="top"
                        checked={gender === 'acceso' ? true : false}
                    />
                    <label htmlFor="acceso">Punto</label>
                </form>
            </div>
            <div className={styles.grafico}>
                <ApexChart data={data} />
            </div>
        </div>
    )
}

export default LIstTop