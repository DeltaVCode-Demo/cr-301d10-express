// Route Handlers down here
const axios = require('axios');

// export only the function
// module.exports = getPhotos;

// assigning getPhotos to the default exports object
// module.exports.getPhotos = getPhotos;
// exports.getPhotos = getPhotos;

// make a new object with all the stuff to export
module.exports = {
  getPhotos,
  getMine,
};

async function getPhotos(request, response) {
  const q = request.query.q; // grab the q query string value

  try {
    const results = await axios.get('https://api.unsplash.com/photos/', {
      params: {
        client_id: process.env.UNSPLASH_ACCESS,
        query: q,
      },
    });

    let photoArray =
      results.data.map(photo => new Photo(photo));

    response.send(photoArray);
  }
  catch (err) {
    console.error('axios error!', err);
    response.status(500).send('oops');
  }
}

function getMine(request, response) {
  response.send({ mine: true });
}

class Photo {
  constructor(apiObj) {
    this.img_url = apiObj.urls.regular;
    this.original_image = apiObj.links.self;
    this.photographer = apiObj.user.name;
  }
}
