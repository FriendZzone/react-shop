export const formatCurrency = (numb) => {
  return new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numb);
};

export const formatToUpperFirstCase = (str) => {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() +
      words[i].substr(1);
  }
  return words;
};

export const convertFullName = (first, last) => {
  return `${formatToUpperFirstCase(
    first
  )} ${formatToUpperFirstCase(last)}`;
};
