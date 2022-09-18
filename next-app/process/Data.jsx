export const ObjectData = (data) => {
    const provincia = []
    const distritos = []
    data.forEach(
        (item, index) => {
            provincia.push(item.provincia)
            distritos.push(item.Distrito)
        }
    )

    let pro = provincia.filter((item, index) => {
        return provincia.indexOf(item) === index;
    })

    return { pro };
}

export const Arreglo = (data, geopuntos) => {
    const { pro } = geopuntos
    const geojson = []
    pro.map(
        (item, index) => {
            geojson.push({ name: item, consumo: 0, cantidad: 0, list: existe(item, data) })
        }
    )

    console.log(geojson)
    return 0
}

export const existe = (provincia, arreglo) => {
    const distritos = []
    arreglo.map(
        (item) => {
            if (item.provincia === provincia) {
                distritos.push(item.Distrito)
            }
        }
    )

    let dis = distritos.filter((item, index) => {
        return distritos.indexOf(item) === index;
    })

    let geojson = []
    dis.map(
        (item, index) => {
            geojson.push({ name: item, consumo: 0, cantidad: 0, list: centros(item, arreglo) })
        }
    )
    return geojson
}

export const centros = (distrito, arreglo) => {
    const centro = []
    arreglo.map(
        (item) => {
            if (item.provincia === distrito) {
                centro.push(item.Nombre)
            }
        }
    )

    let dis = centro.filter((item, index) => {
        return centro.indexOf(item) === index;
    })

    let geojson = []
    dis.map(
        (item, index) => {
            geojson.push({ name: item, consumo: 0, latitude: 0, longitude: 0, })
        }
    )
    return geojson
}