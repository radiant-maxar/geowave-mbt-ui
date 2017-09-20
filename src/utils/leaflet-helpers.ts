export type Identifiable<T> = T & { readonly id: string }


export function identified<T>(id: string, layer: T): Identifiable<T> {
    return Object.assign(layer, { id }) as any  // tslint:disable-line:prefer-object-spread
}
