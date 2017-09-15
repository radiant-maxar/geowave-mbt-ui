import { action, observable, useStrict } from 'mobx'

import { RouterStore } from 'mobx-react-router'

import * as http from '../utils/http'


useStrict(true)


class Store {
    @observable isPanelOpen: boolean = false
    @observable userName: string = null

    constructor(public router: RouterStore = new RouterStore()) {}

    @action
    togglePanel() {
        console.debug(http)
        this.isPanelOpen = !this.isPanelOpen
    }
}


export function createStore() {
    const store = new Store()

    http.onSessionExpired(() => {
        store.router.push('/login')
    })
    return store
}


export type IStore = Store
