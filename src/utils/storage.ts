export const setItem = (key: string, value: string | {}) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getItem = (key: any) => {
  if (key) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || '')
      : undefined;
  }
};

export const removeItem = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
