import * as React from 'react'
import * as $ from 'classnames'
import UserIcon from 'react-icons/lib/fa/user'

import { GeoWaveIcon } from './GeoWaveIcon'

import styles from './Navigation.less'


export const Navigation = ({ className, user, onLogOut }: IProps) => (
    <div className={$(styles.root, className)}>
        <div className={styles.leftSide}>
            <GeoWaveIcon className={styles.geowaveIcon} />
            <div className={styles.title}>
                <div className={styles.titleSubtext}>GeoWave Data Feed</div>
                <div className={styles.titleText}>MapBox Telemetry Visualization</div>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.user}>
                <UserIcon className={styles.userIcon} />
                <span className={styles.userName}>{user.firstName} {user.lastName}</span>
            </div>
            <div className={styles.logout}>
                <button className={styles.logoutButton} onClick={onLogOut}>Log Out</button>
            </div>
        </div>
    </div>
)


interface IProps {
    className?: string

    user: geowave.User

    onLogOut(): void
}
