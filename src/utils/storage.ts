export const getItem = (key: string) => {
  return localStorage.getItem(key);
};

export const setItem = (key: string, content: string) => {
  return localStorage.setItem(key, content);
};

export const removeItem = (key: string) => {
  return localStorage.removeItem(key);
};
