module.exports = function (err, response) {
  console.error('unhandled error!', err);
  response.status(500).send('oops');
};
