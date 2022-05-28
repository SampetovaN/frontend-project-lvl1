const randomInt = (minVal, maxVal) => {
  const min = Math.ceil(minVal);
  const max = Math.floor(maxVal);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = () => randomInt(0, 10);
export { randomInt, randomNumber };
