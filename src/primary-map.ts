import * as L from 'leaflet'


const DEFAULT_CENTER = { lat: 0, lon: -10 }
const DEFAULT_ZOOM = 1.75


const BASEMAP_Z_INDEX = 0

const [BASEMAP_LAYERS, DEFAULT_BASEMAP] = createBasemapLayers()

const KEY_BASEMAP = 'MAP_BASEMAP'
const KEY_CENTER  = 'MAP_CENTER'
const KEY_ZOOM    = 'MAP_ZOOM'


let _instance: L.Map,
    _currentBasemap: L.TileLayer


export function init(element: HTMLElement) {
    if (_instance) {
        throw new Error('map already instantiated')
    }

    console.info(BASEMAP_LAYERS)
    _currentBasemap = BASEMAP_LAYERS[sessionStorage.getItem(KEY_BASEMAP)] || BASEMAP_LAYERS[DEFAULT_BASEMAP]

    _instance = L.map(element, {
        center: JSON.parse(sessionStorage.getItem(KEY_CENTER)) || DEFAULT_CENTER,
        zoom: JSON.parse(sessionStorage.getItem(KEY_ZOOM)) || DEFAULT_ZOOM,

        layers: [
            _currentBasemap,
        ],
    })

    _instance.on('moveend zoomend', () => {
        sessionStorage.setItem(KEY_CENTER, JSON.stringify(_instance.getCenter()))
        sessionStorage.setItem(KEY_ZOOM, JSON.stringify(_instance.getZoom()))
    })

    window['__map__'] = _instance  // tslint:disable-line:no-string-literal
}


declare const window: {
    BASEMAPS: {
        id: string,
        name: string,
        maxZoom: number,
        attributions: string,
    }[],
}


function createBasemapLayers(): [Hash<L.TileLayer>, string] {
    const layers = {}

    if (!Array.isArray(window.BASEMAPS)) {
        throw new Error('window.BASEMAPS must be an array of basemap definitions')
    }

    if (!window.BASEMAPS.length) {
        throw new Error('window.BASEMAPS cannot be empty')
    }

    const defaultBasemap = window.BASEMAPS[0].name
    window.BASEMAPS.forEach(basemap => {
        layers[basemap.name] = L.tileLayer(`/basemaps/${basemap.id}/{z}/{x}/{y}.png`, {
            attribution: basemap.attributions,
            maxZoom:     basemap.maxZoom,
            zIndex:      BASEMAP_Z_INDEX,
        })
    })

    return [layers, defaultBasemap]
}
