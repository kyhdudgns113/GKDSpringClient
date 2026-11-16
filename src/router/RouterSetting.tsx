import {BrowserRouter} from 'react-router-dom'

import type {FC, PropsWithChildren} from 'react'

export const RouterSetting: FC<PropsWithChildren> = ({children}) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
