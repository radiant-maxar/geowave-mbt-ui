import * as React from 'react'
import * as $ from 'classnames'

import 'leaflet/dist/leaflet.css'

import { MapWatermark } from './MapWatermark'
import styles from './PrimaryMap.less'

import { init } from '../primary-map'


export class PrimaryMap extends React.Component<IProps, never> {
    private element: HTMLDivElement

    render() {
        return(
            <div className={$(styles.root, this.props.className)} ref={e => this.element = e}>
                <MapWatermark className={styles.watermark} />
            </div>
        )
    }

    componentDidMount() {
        init(this.element)
    }
}


interface IProps {
    className?: string
}
