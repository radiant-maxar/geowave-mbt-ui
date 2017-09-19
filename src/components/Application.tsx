import * as React from 'react'
import * as $ from 'classnames'
import { inject, observer } from 'mobx-react'

import { BottomPanel } from './BottomPanel'
import { ErrorModal } from './ErrorModal'
import Login from './Login'
import { Navigation } from './Navigation'
import { PrimaryMap } from './PrimaryMap'

import styles from './Application.less'

import { IError, IStore } from '../store'


export class Application extends React.Component<IInternalProps, never> {
    render() {
        if (!this.props.isLoggedIn) {
            return (
                <Login />
            )
        }

        return (
            <main className={$(styles.root, this.props.isPanelOpen && styles.isPanelOpen)}>
                <Navigation
                    className={styles.navigation}
                    user={this.props.user}
                    onLogOut={this.props.onLogOut}
                />
                <PrimaryMap
                    className={styles.primaryMap}
                />
                <BottomPanel
                    className={styles.bottomPanel}
                    isOpen={this.props.isPanelOpen}
                    onToggle={this.props.onPanelToggle}
                />

                {this.props.errors.map(error => (
                    <ErrorModal
                        className={styles.errorModal}
                        key={error.id}
                        error={error}
                        onDismiss={() => this.props.dismissError(error.id)}
                    />
                ))}
            </main>
        )
    }
}


export default inject(({ store }: { store: IStore }): IInternalProps => ({
    errors:      store.errors,
    isLoggedIn:  store.isLoggedIn,
    isPanelOpen: store.isPanelOpen,
    user:        store.user,

    dismissError(id: string) {
        store.dismissError(id)
    },

    onLogOut() {
        store.logout()
        location.href = '/auth/logout'
    },

    onPanelToggle() {
        store.togglePanel()
    },
}))(observer<IExternalProps>(Application))


/*
 * Types
 */

interface IInternalProps extends IExternalProps {
    errors: IError[]
    isLoggedIn: boolean
    isPanelOpen: boolean
    user: geowave.User

    dismissError(id: string): void
    onLogOut(): void
    onPanelToggle(): void
}

interface IExternalProps {
    className?: string
}
