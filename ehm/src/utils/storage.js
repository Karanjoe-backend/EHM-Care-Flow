export const getData = (key, fallback) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
