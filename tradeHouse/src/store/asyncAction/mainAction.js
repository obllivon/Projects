import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCategory, getHomes } from '../slices/mainSlice';

export const getHomeAction = createAsyncThunk(
  'getHomeAction',
  async (_, { dispatch }) => {
    let next = `http://164.92.190.147:1235/api/v1/products/`;

    while (next) {
      const response = await axios.get(next);
      const data = await response.data;
      const nextData = await data.next;

      next = nextData;
      dispatch(getHomes(data.results));
    }
  }
);

export const getHomesByCategory = createAsyncThunk(
  'getHomeAction',
  async (param, { dispatch }) => {
    let next = `http://164.92.190.147:1235/api/v1/products/`;
    let res = [];

    while (next) {
      const response = await axios.get(next, {
        params: {
          type: param,
        },
      });
      const data = await response.data;
      const nextData = await data.next;

      next = nextData;
      res.push(...data.results);
    }
    return dispatch(getCategory(res));
  }
);
