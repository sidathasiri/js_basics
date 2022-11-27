const axios = require('axios');

const data = [
  {
    userId: 1,
    id: 1,
    title: 'user 1',
  },
  {
    userId: 2,
    id: 2,
    title: 'user 2',
  },
];

const getDataFromCallBack = (id, callback) => {
  const item = data.find((t) => t.id === id);
  callback(item);
};

const getDataFromPromise = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((t) => t.id === id);
    resolve(item);
  });
};

// Callback
// getDataFromCallBack(1, (data) => {
//   console.log('data:', data);
// });

// Promises
// getDataFromPromise(1)
//   .then((data) => console.log('data:', data))
//   .catch((err) => console.log('err:', err));

// Async/Await
// const getData = async () => {
//   const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(data);
// };

// getData();
