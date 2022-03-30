export const optionListByCategory = (
  category
) => {
  const categoryOption = {
    electronics: ['model 2021', 'model 2022'],
    jewelery: [
      'size 24mm  (little finger)',
      'size 25mm (ring finger)',
      'size 27mm (middle finger)',
      'size 30mm (thumb finger)',
    ],
    "men's clothing": [
      'size XS',
      'size M',
      'size L',
      'size XL',
    ],
    "women's clothing": [
      'size XS',
      'size M',
      'size L',
      'size XL',
    ],
  };
  return categoryOption[category];
};
export const deliveryMethods = [
  'Credit Card',
  'Cash when delivered',
];
