import {getServerUrl} from './_fetchUtil'
import {handleResponse} from './_fetchUtil'

import * as CS from '@commonSecret'
import * as U from '@util'

const postOrPut_NoJWT = (methodName: string) => (path: string, data: object) => {
  return fetch(getServerUrl(path), {
    method: methodName,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(handleResponse)
}

const postOrPut_WithJWT = (methodName: string) => async (path: string, data: object) => {
  const jwt = await U.readStringP('jwt')

  if (!jwt) {
    throw new Error('토큰이 비어있어요.')
  }

  const jwtFromClient = CS.encodeJwtFromClient(jwt)

  return fetch(getServerUrl(path), {
    method: methodName,
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwtFromClient,
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(handleResponse)
}

export const post = postOrPut_NoJWT('POST')
export const put = postOrPut_NoJWT('PUT')
export const postJWT = postOrPut_WithJWT('POST')
export const putJWT = postOrPut_WithJWT('PUT')
