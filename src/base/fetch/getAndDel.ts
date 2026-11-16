import {getServerUrl} from './_fetchUtil'
import {handleResponse} from './_fetchUtil'

import * as CS from '@commonSecret'
import * as U from '@util'

const getOrDel_NoJWT = (methodName: string) => (path: string) => {
  return fetch(getServerUrl(path), {method: methodName})
    .then(res => res.json())
    .then(handleResponse)
}

const getOrDel_WithJWT = (methodName: string) => async (path: string) => {
  const jwt = await U.readStringP('jwt')

  if (!jwt) {
    throw new Error('토큰이 비어있어요.')
  }

  const jwtFromClient = CS.encodeJwtFromClient(jwt)

  return fetch(getServerUrl(path), {
    method: methodName,
    headers: {Authorization: jwtFromClient},
  })
    .then(res => res.json())
    .then(handleResponse)
}

export const get = getOrDel_NoJWT('GET')
export const del = getOrDel_NoJWT('DELETE')
export const getJWT = getOrDel_WithJWT('GET')
export const delJWT = getOrDel_WithJWT('DELETE')
