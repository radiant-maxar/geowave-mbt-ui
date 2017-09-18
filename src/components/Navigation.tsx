import * as React from 'react'
import * as $ from 'classnames'

import styles from './Navigation.less'


export const Navigation = ({ className, user, onLogOut }: IProps) => (
    <div className={$(styles.root, className)}>
        <div>{user.firstName} {user.lastName}</div>
        <button onClick={onLogOut}>Log Out</button>
    </div>
)


interface IProps {
    className?: string

    user: geowave.User

    onLogOut(): void
}
