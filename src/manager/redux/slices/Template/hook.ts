import {useGKDSpringSelector, useGKDSpringDispatch} from '@redux'
import {templateSlice} from './slice'

export const useTemplateStates = () => useGKDSpringSelector(state => state.template)

export const useTemplateActions = () => {
  const dispatch = useGKDSpringDispatch()

  return {
    closeLefter: () => dispatch(templateSlice.actions.setIsLefterOpen(false)),

    openLefter: () => dispatch(templateSlice.actions.setIsLefterOpen(true)),
  }
}
