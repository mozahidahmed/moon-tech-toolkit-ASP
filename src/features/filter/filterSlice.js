import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stock: false,
  brands:[],
  keyword:"",
}

export const filterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}

})

export default filterSlice.reducer