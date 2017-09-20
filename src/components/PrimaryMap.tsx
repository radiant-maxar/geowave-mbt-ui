import * as React from 'react'
import * as $ from 'classnames'

import 'leaflet/dist/leaflet.css'

import { BasemapPicker } from './BasemapPicker'
import { MapWatermark } from './MapWatermark'

import styles from './PrimaryMap.less'

import { changeBasemap, getBasemap, init } from '../primary-map'


export class PrimaryMap extends React.Component<IProps, never> {
    private element: HTMLDivElement

    render() {
        return(
            <div className={$(styles.root, this.props.className)} ref={e => this.element = e}>
                <MapWatermark className={styles.watermark} />
                <BasemapPicker
                    className={styles.basemapPicker}
                    value={getBasemap()}
                    onChange={this.onBasemapChange}
                />
            </div>
        )
    }

    componentDidMount() {
        init(this.element)
    }

    private onBasemapChange = (basemap: string) => {
        changeBasemap(basemap)
        this.forceUpdate()
    }
}


interface IProps {
    className?: string
}
