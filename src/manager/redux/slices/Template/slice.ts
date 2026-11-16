import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit'

// State 타입 정의
interface TemplateState {
  isLefterOpen: boolean
}

// 초기 상태
const initialState: TemplateState = {
  isLefterOpen: true,
}

// Slice 생성 (액션 + 리듀서를 한번에)
export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setIsLefterOpen: (state, action: PayloadAction<boolean>) => {
      state.isLefterOpen = action.payload
    },
  },
})
