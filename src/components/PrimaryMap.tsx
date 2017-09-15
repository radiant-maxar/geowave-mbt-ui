import * as React from 'react'
import * as $ from 'classnames'

import styles from './PrimaryMap.less'


export const PrimaryMap = ({ className }: IProps) => (
    <div className={$(styles.root, className)}>
        PrimaryMap
    </div>
)


interface IProps {
    className?: string
}
