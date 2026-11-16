import {SERVER_URL} from '@commonSecret'

import type {ResponseType} from '@httpResponse'

export const getServerUrl = (path: string) => {
  const host = SERVER_URL
  return [host, path].join('')
}

export const handleResponse = (res: ResponseType) => {
  const {ok, body, statusCode, gkdErrMsg, message /*jwtFromServer*/} = res

  // ok 가 들어왔는지 확인
  if (ok === undefined) {
    throw new Error('ok 가 들어오지 않았어요')
  }

  // body 가 들어왔는지 확인
  if (body === undefined) {
    throw new Error('body 가 들어오지 않았어요')
  }

  // statusCode 가 들어왔는지 확인
  if (statusCode === undefined) {
    throw new Error('statusCode 가 들어오지 않았어요')
  }

  // ok 가 false 인 경우 에러 메시지 확인
  if (ok === false) {
    if (gkdErrMsg === undefined && message === undefined) {
      throw new Error('gkdErrMsg 와 message 가 들어오지 않았어요')
    } // ::
    else {
      throw new Error(`gkdErrMsg: ${gkdErrMsg}, message: ${message}`)
    }
  }

  // 멀쩡히 왔으면 그대로 리턴
  return res
}
