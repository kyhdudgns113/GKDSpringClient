import {AuthProvider} from './auth'

import type {FC, PropsWithChildren} from 'react'

/**
 * TotalProvider.tsx
 *
 * - 모든 공통 Provider 들을 모아서 하나의 Provider 로 내보내는 역할이다
 * - Provider 들의 우선순위를 여기서 정한다
 */
export const TotalProvider: FC<PropsWithChildren> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>
}
