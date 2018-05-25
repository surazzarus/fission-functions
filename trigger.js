// 'use strict';
//
// const rp = require('request-promise-native');
//
// module.exports = async function (context) {
//   try {
//     const options = {
//       method: 'POST',
//       uri: 'http://node-red-http.core/inject/10e926d7.e5b839'
//     }
//     const res = await rp(options);
//     res.on('data', (d) => {
//       return {
//         status: 200
//       }
//     })
//   } catch (e) {
//       console.error(e);
//       return {
//           status: 500,
//           body: e
//       };
//   }
// }


'use strict';

const rp = require('request-promise-native');

module.exports = async function (context) {
  try {
    const options = {
      method: 'POST',
      uri: 'http://node-red-http.core/inject/10e926d7.e5b839'
    }
    const res = await rp(options);
      return {
        status: 200,
        body: res
      }
  } catch (e) {
      console.error(e);
      return {
          body: e
      };
  }
}
