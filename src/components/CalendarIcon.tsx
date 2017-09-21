import * as React from 'react'
import * as $ from 'classnames'

import styles from './CalendarIcon.less'


// tslint:disable:max-line-length
export const CalendarIcon = ({className}: IProps) => (
    <svg className={$(styles.root, className)} viewBox="0 0 22 16" preserveAspectRatio="xMidYMid">
        <path className={styles.past} d="M16,1 L18,1 L18,3 L16,3 L16,1 Z M19,1 L21,1 L21,3 L19,3 L19,1 Z M1,4 L3,4 L3,6 L1,6 L1,4 Z M4,4 L6,4 L6,6 L4,6 L4,4 Z M7,4 L9,4 L9,6 L7,6 L7,4 Z M10,4 L12,4 L12,6 L10,6 L10,4 Z M13,4 L15,4 L15,6 L13,6 L13,4 Z M16,4 L18,4 L18,6 L16,6 L16,4 Z M19,4 L21,4 L21,6 L19,6 L19,4 Z M1,7 L3,7 L3,9 L1,9 L1,7 Z M4,7 L6,7 L6,9 L4,9 L4,7 Z M7,7 L9,7 L9,9 L7,9 L7,7 Z" />
        <path className={styles.future} d="M10,7 L12,7 L12,9 L10,9 L10,7 Z M13,7 L15,7 L15,9 L13,9 L13,7 Z M16,7 L18,7 L18,9 L16,9 L16,7 Z M19,7 L21,7 L21,9 L19,9 L19,7 Z M1,10 L3,10 L3,12 L1,12 L1,10 Z M4,10 L6,10 L6,12 L4,12 L4,10 Z M7,10 L9,10 L9,12 L7,12 L7,10 Z M10,10 L12,10 L12,12 L10,12 L10,10 Z M13,10 L15,10 L15,12 L13,12 L13,10 Z M16,10 L18,10 L18,12 L16,12 L16,10 Z M19,10 L21,10 L21,12 L19,12 L19,10 Z M1,13 L3,13 L3,15 L1,15 L1,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M7,13 L9,13 L9,15 L7,15 L7,13 Z M10,13 L12,13 L12,15 L10,15 L10,13 Z" />
    </svg>
)
// tslint:enable:max-line-length


//
// Types
//

interface IProps {
    className?: string
}
