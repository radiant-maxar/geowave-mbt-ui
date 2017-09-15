import * as React from 'react'
import * as $ from 'classnames'

import styles from './Navigation.less'


export const Navigation = ({ className }: IProps) => (
    <div className={$(styles.root, className)}>
        Navigation
    </div>
)


interface IProps {
    className?: string
}
