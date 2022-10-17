import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://634aef32d90b984a1e3347cc.mockapi.io'

export const fetchContacts = createAsyncThunk(
    "contact/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const addContact = createAsyncThunk(
    "contact/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts",  text );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (taskId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${taskId}`);
        return response.data.id;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
 