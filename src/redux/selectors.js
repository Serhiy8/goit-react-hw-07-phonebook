const selectContacts = state => state.contacts.items;
const selectFilterValue = state => state.filter.value;
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;

export { selectContacts, selectFilterValue, selectIsLoading, selectError };
