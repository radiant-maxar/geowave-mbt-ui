import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'


const KEY_AUTH_TOKEN = 'AUTH_TOKEN'


const TIMEOUT = 30000

const _client: any = axios.create({
    timeout: TIMEOUT,

    validateStatus(status) {
        if (status === 401) {
            _onSessionExpired.forEach(callback => callback())
            _onSessionExpired = []

            localStorage.removeItem(KEY_AUTH_TOKEN)
        }

        return status >= 200 && status <= 400
    }
})

let _onSessionExpired: Function[] = []


export function del<T>(url: string, config?: AxiosRequestConfig): IResponse<T> {
    return _client.delete(url, config)
}


export function get<T>(url: string, config?: AxiosRequestConfig): IResponse<T> {
    return _client.get(url, config)
}


export function post<T>(url: string, data?: any, config?: AxiosRequestConfig): IResponse<T> {
    return _client.post(url, data, config)
}


export function put<T>(url: string, data?: any, config?: AxiosRequestConfig): IResponse<T> {
    return _client.put(url, data, config)
}


export function isAuthenticated(): boolean {
    return !!localStorage.getItem(KEY_AUTH_TOKEN)
}


export function onSessionExpired(callback: Function) {
    const unsubscribe = () => _onSessionExpired = _onSessionExpired.filter(f => f !== callback)

    _onSessionExpired.push(callback)

    return unsubscribe
}


export interface IResponse<T> extends AxiosResponse {
    data: T
}
