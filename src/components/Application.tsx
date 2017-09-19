import * as React from 'react'
import * as $ from 'classnames'
import { inject, observer } from 'mobx-react'

import { BottomPanel } from './BottomPanel'
import Login from './Login'
import { Navigation } from './Navigation'
import { PrimaryMap } from './PrimaryMap'

import styles from './Application.less'

import { IStore } from '../store'


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
            </main>
        )
    }
}


export default inject<IInternalProps, {}>(({ store }: { store: IStore }) => ({
    isLoggedIn:  store.isLoggedIn,
    isPanelOpen: store.isPanelOpen,
    user: store.user,

    onLogOut() {
        store.logout()
        // location.href = '/auth/logout'
    },

    onPanelToggle() {
        store.togglePanel()
    },
}))(observer<IExternalProps>(Application))


/*
 * Types
 */

interface IInternalProps extends IExternalProps {
    isLoggedIn: boolean
    isPanelOpen: boolean
    user: geowave.User

    onLogOut(): void
    onPanelToggle(): void
}

interface IExternalProps {
    className?: string
}
