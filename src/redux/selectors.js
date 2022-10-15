export const selectContacts = state => state.contact.contacts.items;

export const selectIsLoading = state => state.contact.contacts.isLoading;

export const selectError = state => state.contact.contacts.error;
