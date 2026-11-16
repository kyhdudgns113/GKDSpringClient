import {useDispatch, useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

import * as Slices from './slices'

export const store = configureStore({
  reducer: {
    copyMe: Slices.copyMeSlice.reducer,
    template: Slices.templateSlice.reducer,
  },
})

export type GKDSpringState = ReturnType<typeof store.getState>
export type GKDSpringDispatch = typeof store.dispatch

export const useGKDSpringDispatch = useDispatch.withTypes<GKDSpringDispatch>()
export const useGKDSpringSelector = useSelector.withTypes<GKDSpringState>()
