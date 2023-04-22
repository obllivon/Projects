import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { filt } from '../slices/userPageSlice'

export const domAction = createAsyncThunk(
  'domAction',
  async (param, { dispatch }) => {
    const response = await axios.get("164.92.190.147:1235/api/v1/products/")
    return response.data
  }
)
