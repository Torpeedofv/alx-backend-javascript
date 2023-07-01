export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
      console.log('Got a responsse from the API');
    } else {
      reject(new Error('The fake API is not working currently'));
      console.log('Got a responsse from the API');
    }
  });
}
