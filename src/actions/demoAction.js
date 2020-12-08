export const addNum = (val) => {
  return { type: 'ADD_NUM', value: val };
};

export const removeNum = (val) => {
  return { type: 'REMOVE_NUM', value: val };
};
