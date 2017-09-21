import * as React from 'react'
import * as $ from 'classnames'

import ArrowUpIcon from 'react-icons/lib/fa/angle-up'
import ArrowDownIcon from 'react-icons/lib/fa/angle-down'
import { CalendarIcon } from './CalendarIcon'


import styles from './BottomPanel.less'


export const BottomPanel = ({ className, isOpen, onToggle }: IProps) => (
    <div className={$(styles.root, className, isOpen && styles.isOpen)}>
        <div className={styles.tab} onClick={onToggle}>
            <CalendarIcon className={styles.tabIcon} />
            <span className={styles.tabLabel}>
                Ingest Calendar
            </span>
            {isOpen
                ? <ArrowDownIcon className={styles.tabExpansionIndicator} />
                : <ArrowUpIcon className={styles.tabExpansionIndicator} />}
        </div>
        <div className={styles.content}>
            Whee!
        </div>
    </div>
)


interface IProps {
    className?: string

    isOpen: boolean

    onToggle(): void
}
