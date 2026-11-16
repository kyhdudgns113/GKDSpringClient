import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit'

// State 타입 정의
interface CopyMeState {
  isCopyMe: boolean
}

// 초기 상태
const initialState: CopyMeState = {
  isCopyMe: true,
}

// Slice 생성 (액션 + 리듀서를 한번에)
export const copyMeSlice = createSlice({
  name: 'copyMe',
  initialState,
  reducers: {
    setIsCopyMe: (state, action: PayloadAction<boolean>) => {
      state.isCopyMe = action.payload
    },
  },
})
