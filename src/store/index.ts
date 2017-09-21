import { action, computed, observable, runInAction, useStrict } from 'mobx'

import * as http from '../utils/http'


const KEY_IS_PANEL_OPEN = 'IS_PANEL_OPEN'
const KEY_USER = 'USER'


useStrict(true)


class Store {
    @observable isPanelOpen: boolean = deserialized(KEY_IS_PANEL_OPEN) || false
    @observable errors: IError[] = []
    @observable isLoggingIn: boolean = false

    @observable user: geowave.User = deserialized(KEY_USER, localStorage)

    @computed
    get isLoggedIn() {
        return !!this.user
    }

    @action
    appendError(heading: string, message: string, cause: Error) {
        this.errors.push({
            cause,
            heading,
            message,
            id: Math.random().toString(16).substr(5),
        })
    }

    @action
    dismissError(id: string) {
        this.errors = this.errors.filter(e => e.id !== id)
    }

    @action
    async fetchProfile() {
        this.isLoggingIn = true
        try {
            const response = await http.get<geowave.User>('/auth/whoami')
            runInAction(() => this.user = serialized(KEY_USER, response.data, localStorage))
        }
        catch (err) {
            if (err.response && err.response.status === 401) {
                debugger
                // TODO -- do... something?
                return
            }
            console.error('oh no', err)
        }
        finally {
            runInAction(() => this.isLoggingIn = false)
        }
    }

    @action
    logout() {
        localStorage.clear()
        this.user = null
    }

    @action
    togglePanel() {
        this.isPanelOpen = serialized(KEY_IS_PANEL_OPEN, !this.isPanelOpen)
    }
}


export function createStore() {
    const store = new Store()

    http.onSessionExpired(() => store.logout())

    return store
}


export type IStore = Store


export interface IError {
    id: string
    heading: string
    message: string
    cause: Error
}


//
// Helpers
//

function deserialized<T>(key: string, storage = sessionStorage): T {
    const value = storage.getItem(key)
    try {
        return JSON.parse(value)
    }
    catch (err) {
        console.warn('[store] could not deserialize "%s":\n\nError:\n%s\n\nContent:\n%s', key, err, value)
        return null
    }
}


function serialized<T>(key: string, data: T, storage = sessionStorage): T {
    storage.setItem(key, JSON.stringify(data, null, 2))
    return data
}
