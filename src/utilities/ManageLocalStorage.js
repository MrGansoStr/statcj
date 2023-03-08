
export const InsertLocalStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return;
}

export const ClearLocalStorageValue = (key) => {
  localStorage.removeItem(key);
  return;
}

export const GetLocalStorage = (key) => {
  return localStorage.getItem(key);
}