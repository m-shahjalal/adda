export const setStorage = (key: string, value: string | {}) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getStorage = (key: any) => {
  if (key) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '')
      : undefined;
  }
};

export const removeStorage = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
