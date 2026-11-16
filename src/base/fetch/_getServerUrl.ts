import {SERVER_URL} from '@commonSecret'

export const getServerUrl = (path: string) => {
  const host = SERVER_URL
  return [host, path].join('')
}
