export const getData = (key) => {
  let data = JSON.parse(localStorage.getItem(key));
  if (data) {
    return data;
  } else {
    return "";
  }
};
export const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
