import {AuthCallbacksProvider} from './AuthCallbacks'
import {AuthEffectsProvider} from './AuthEffects'

import type {FC, PropsWithChildren} from 'react'

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <AuthCallbacksProvider>
      <AuthEffectsProvider>{children}</AuthEffectsProvider>
    </AuthCallbacksProvider>
  )
}
