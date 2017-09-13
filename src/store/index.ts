import { action, observable, runInAction, useStrict } from 'mobx'

import * as http from '../utils/http'

import { BUILD_ENVIRONMENT, IS_RED } from '../config'


useStrict(true)

class Store implements IStore {
    @observable revision = null
    @observable environment = BUILD_ENVIRONMENT
    @observable isRed = IS_RED
    @observable isFetchingRevision = false

    @action
    async fetchRevision() {
        this.isFetchingRevision = true
        try {
            const response = await http.get<string>('/')

            const revision = new DOMParser()
                .parseFromString(response.data, 'text/html')
                .documentElement
                .getAttribute('data-app-revision')

            runInAction(() => this.revision = revision)
        }
        catch (err) {
            this.isFetchingRevision = false
            console.error('[store] Oh no: %s', err.message)
        }
        finally {
            runInAction(() => this.isFetchingRevision = false)
        }
    }

    @action
    toggleRed() {
        this.isRed = !this.isRed
    }
}


export interface IStore {
    revision: string
    environment: string
    isRed: boolean
    isFetchingRevision: boolean

    fetchRevision(): Promise<void>
    toggleRed(): void
}


export default new Store()
