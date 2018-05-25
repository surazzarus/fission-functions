'use strict';

const rp = require('request-promise-native');;

module.exports = async function (context) {
  try {
    const res = await rp('https://jsonplaceholder.typicode.com/users');
    return {
        status: 200,
        body: res,
        headers: {
            'Content-Type': 'application/json'
        }
    };
  } catch (e) {
      console.error(e);
      return {
          status: 500,
          body: e
      };
  }
}
