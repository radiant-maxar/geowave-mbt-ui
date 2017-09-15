import * as React from 'react'
import * as $ from 'classnames'
import { inject, observer } from 'mobx-react'

import styles from './Application.less'
import { Navigation } from './Navigation'
import { PrimaryMap } from './PrimaryMap'
import { BottomPanel } from './BottomPanel'

import { IStore } from '../store'


export const Application = ({ className, isPanelOpen, onPanelToggle }: IInternalProps) => (
    <main className={$(styles.root, className, isPanelOpen && styles.isPanelOpen)}>
        <Navigation/>
        <PrimaryMap
            className={styles.primaryMap}
        />
        <BottomPanel
            className={styles.bottomPanel}
            isOpen={isPanelOpen}
            onToggle={onPanelToggle}
        />
    </main>
)


export default inject<IInternalProps, {}>(({ store }: { store: IStore }) => ({
    isPanelOpen: store.isPanelOpen,

    onPanelToggle() {
        store.togglePanel()
    },
}))(observer<IExternalProps>(Application))


/*
 * Types
 */

interface IInternalProps extends IExternalProps {
    isPanelOpen: boolean

    onPanelToggle(): void
}

interface IExternalProps {
    className?: string
}
