import * as React from 'react'
import * as $ from 'classnames'
import { inject, observer } from 'mobx-react'

import { Button } from './ui/Button'
import { IStore } from '../store/index'
import { DiscAnimation } from './ui/ActivityIndicator'

import styles from './Login.less'
import { GeoWaveIcon } from './GeoWaveIcon'

class Login extends React.Component<IInternalProps, never> {
    componentDidMount() {
        if (location.search === '?logged_in=true') {
            this.props.fetchProfile()
                .then(() => location.replace(location.href.replace('?logged_in=true', '')))
        }
    }

    render() {
        if (this.props.isLoggingIn) {
            return (
                <div className={$(styles.root, this.props.className)}>
                    <DiscAnimation className={styles.loading__animation} />
                    <div className={styles.loading__message}>Just a moment while we log you in...</div>
                </div>
            )
        }

        return (
            <div className={$(styles.root, this.props.className)}>
                <div className={styles.heading}>
                    <GeoWaveIcon flat />
                </div>
                <div
                    className={styles.userAgreement}
                    dangerouslySetInnerHTML={{
                        __html: document.querySelector('#user-agreement').innerHTML,
                    }}
                />
                <div className={styles.controls}>
                    <Button
                        icon={<span>&times;</span>}
                        label="Accept and Log In with GeoAxis"
                        onClick={() => location.href = '/auth/login'}
                    />
                </div>
            </div>
        )
    }
}

export default inject(({ store }: { store: IStore }): IInternalProps => ({
    isLoggingIn: store.isLoggingIn,

    fetchProfile() {
        return store.fetchProfile()
    },
}))(observer<IExternalProps>(Login))


/*
 * Types
 */

interface IInternalProps extends IExternalProps {
    isLoggingIn: boolean

    fetchProfile(): Promise<void>
}


interface IExternalProps {
    className?: string
}
