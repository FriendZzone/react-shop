import { userApi } from '../api/userApi';
const imageData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    id: '1',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    id: '2',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    id: '3',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    id: '4',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    id: '5',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    id: '6',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    id: '7',
  },
];
export const formatCurrency = (numb) => {
  return new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numb);
};
export const getRandomUser = async () => {
  const randomId = Math.ceil(Math.random() * 10);

  const res = await userApi.getUser(randomId);

  return res;
};
export const getRandomPicture = () => {
  const randomId = Math.ceil(Math.random() * 7);
  return imageData[randomId];
};
export const formatToUpperFirstCase = (str) => {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() +
      words[i].substr(1);
  }
  // const str2 =
  //   str.charAt(0).toUpperCase() + str.slice(1);
  return words;
};
