import type {DivCommonProps} from '@prop'
import type {FC} from 'react'

import './CopyMe.scss'

type CopyMeProps = DivCommonProps & {}

export const CopyMe: FC<CopyMeProps> = ({...props}) => {
  return (
    <div className={`CopyMe ${props.className || ''}`} {...props}>
      CopyMe.tsx
    </div>
  )
}
