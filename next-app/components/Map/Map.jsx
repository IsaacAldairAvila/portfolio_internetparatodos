import React, { useState, useEffect } from 'react'
import DeckGL from '@deck.gl/react/typed';
import { _MapContext as MapContext, StaticMap } from 'react-map-gl';
import { HeatmapLayer } from '@deck.gl/aggregation-layers/typed';
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { ColumnLayer } from '@deck.gl/layers/typed';
import { HexagonLayer } from '@deck.gl/aggregation-layers/typed';
import useIsCapaMapa from '../../hook/useIsCapaMapa'
import MapControl from './MapControl';
import { IconLayer } from '@deck.gl/layers';

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

const MapHook = ({ dataconsumo, datapuntos }) => {
  const isCapa = useIsCapaMapa()
  const [geodata, setGeodata] = useState([])

  useEffect(() => {
    if (isCapa === 'grafico') {
      setGeodata(
        [
          hexagon
        ]
      )
    }
    else if (isCapa === 'calor') {
      setGeodata(
        [
          heatmap,
          column
        ]
      )
    }
    else {
      setGeodata(
        [
          icon
        ]
      )
    }
  }, [isCapa])

  console.log(isCapa)
  const datagb = (id) => {
    let value = 0

    dataconsumo.map(
      item => {
        if (item.id === id) {
          value = item.gb
        }
      }
    )
    return value
  }
  const [viewState, setViewState] = useState({ longitude: -79.797, latitude: 8.719, zoom: 7, pitch: 1, bearing: 1 })
  const heatmap = new HeatmapLayer({
    id: 'heatmapLayer',
    data: datapuntos,
    radiusPixels: 40,
    getPosition: d => [d.longitude, d.latitude],
    getWeight: d => datagb(d.id),
    aggregation: 'SUM'
  })
  const scarlett = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: datapuntos,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 50,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: d => [d.longitude, d.latitude],
    getRadius: d => Math.sqrt(datagb(d.id)),
    getFillColor: d => [255, 140, 0],
    getLineColor: d => [0, 0, 0]
  })

  const hexagon = new HexagonLayer({
    id: 'hexagon-layer',
    data: datapuntos,
    pickable: true,
    extruded: true,
    radius: 500,
    elevationScale: 10,
    getPosition: d => [d.longitude, d.latitude],
    colorRange: [[22, 194, 241, 200], [34, 180, 20, 200]]
  })

  const icon = new IconLayer({
    id: 'icon-layer',
    data: datapuntos,
    pickable: true,
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',
    sizeScale: 1,
    getPosition: d => [d.longitude, d.latitude],
    getSize: d => 5,
    getColor: d => [Math.sqrt(datagb(d.id)), 140, 0]
  });

  const column = new ColumnLayer({
    id: 'column-layer',
    data: datapuntos,
    diskResolution: 12,
    radius: 100,
    extruded: true,
    pickable: true,
    elevationScale: 10,
    getPosition: d => [d.longitude, d.latitude],
    getFillColor: d => [48, 128, datagb(d.id) + 100, 255],
    getLineColor: [0, 0, 0],
    getElevation: d => datagb(d.id)
  });


  const layer =
    [
      heatmap,
      column
    ];


  return (

    <DeckGL
      layers={geodata}
      ContextProvider={MapContext.Provider}
      initialViewState={viewState}
      controller={true}
      getTooltip={({ object }) => object && `${object.Nombre}\n${datagb(object.id)}`}
      style={{
        borderRadius: '3px', overflow: 'hidden', position: 'relative', width: '100%', height: '100%', zIndex: '0', border: '2px solid #303030b3'
      }}
    >
      <MapControl />
      <StaticMap
        style={{ zIndex: 2 }}
        attributionControl={false}
        mapboxApiAccessToken={"pk.eyJ1IjoiZ2F0ZWNocGFuYW1hIiwiYSI6ImNsMmFxNWp1eTA3c3gzaXFkc3BmdmJtbzcifQ.UDFysfj6fP1Lkdsc93Bfhw"}
        mapStyle={"mapbox://styles/gatechpanama/cl8235dw0006314o9ymfavnbr"}
      >
      </StaticMap>
    </DeckGL>
  )
}

export default MapHook