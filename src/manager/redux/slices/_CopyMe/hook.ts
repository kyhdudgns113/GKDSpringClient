import {useGKDSpringSelector, useGKDSpringDispatch} from '@redux'
import {copyMeSlice} from './slice'

export const useCopyMeStates = () => useGKDSpringSelector(state => state.copyMe)

export const useCopyMeActions = () => {
  const dispatch = useGKDSpringDispatch()

  return {
    setCopyMe: (isCopyMe: boolean) => dispatch(copyMeSlice.actions.setIsCopyMe(isCopyMe)),
  }
}
