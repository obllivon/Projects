import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { fullMain } from '../slices/userPageSlice'

export const domAction = createAsyncThunk(
  'domAction',
  async (param, { dispatch }) => {
    const response = await axios.get('https://fakestoreapi.com/products/1')
    return response.data
  }
)
