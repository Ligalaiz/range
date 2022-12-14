const formatVal = (val) => {
  const splitVal = `${val}`.split('').reverse();
  let result = '';

  for (let i = 0; i <= splitVal.length - 1; i += 1) {
    result =
      i % 3 === 0 ? `${splitVal[i]} ${result}` : `${splitVal[i]}${result}`;
  }

  return result.trim();
};

export { formatVal };
