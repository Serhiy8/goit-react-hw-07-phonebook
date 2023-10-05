export const selectContacts = state => state.contacts.items;
export const selectFilterValue = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
