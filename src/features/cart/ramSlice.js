import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  isLoading: 'true',
  isPracticing: 'true',
}

const ramSlice = createSlice({
  name: 'ram',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload)
    },
  },
})

export const { addItem } = ramSlice.actions

export default ramSlice.reducer
