declare namespace geowave {
    interface User {
        dn: string
        firstName: string
        lastName: string
    }
}


interface Hash<T> {
    [key: string]: T
}


//
// Webpack Interop
//

declare module '*.less' {
    const _: any
    export default _
}

declare module '*.png' {
    const _: string
    export default _
}
