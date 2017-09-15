import * as React from 'react'
import * as $ from 'classnames'

import styles from './BottomPanel.less'


export const BottomPanel = ({ className, isOpen, onToggle }: IProps) => (
    <div className={$(styles.root, className, isOpen && styles.isOpen)}>
        <button onClick={onToggle}>toggle</button>
        BottomPanel
    </div>
)


interface IProps {
    className?: string

    isOpen: boolean

    onToggle(): void
}
