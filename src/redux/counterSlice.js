import { createSlice } from '@reduxjs/toolkit'
import { addContact,fetchContacts,deleteContact } from './operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, {payload}) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
export const phoneBoockSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    filterContacts: (state, {payload}) => {
      state.filter = payload
    },
  },
  extraReducers: {
    [fetchContacts.pending]:handlePending,
    [fetchContacts.fulfilled](state, {payload}) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [fetchContacts.rejected]:handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(contact => contact.id === action.payload);
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  }
})

export const {  filterContacts } = phoneBoockSlice.actions

export default phoneBoockSlice