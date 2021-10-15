import { effectTypes, createEffect } from './index'
import isPromise from 'is-promise'

export function call(fn, ...args) {
    let context = null
    let func = fn
    if (Object.prototype.toString.call(fn) === '[object Array]') {
        context = fn[0]
        func = fn[1]
    }
    return createEffect(effectTypes.CALL, {
        context,
        fn: func,
        arguments: args,
    })
}

export function runCall(store, value, next) {
    const result = value.payload.fn.call(value.payload.context, ...value.payload.arguments)
    if (isPromise(result)) {
        result.then(resp => next(resp)).catch((err) => next(null, err))
    } else (
        next(result)
    )
}
