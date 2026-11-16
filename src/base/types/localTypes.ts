import type {Dispatch, SetStateAction} from 'react'
import type {Socket} from 'socket.io-client'

export type APIReturnType = {
  isSuccess: boolean
  [key: string]: any
}
export type CallbackType = () => void
export type Setter<T> = Dispatch<SetStateAction<T>>
export type SocketType = typeof Socket | null
