function getCredentials(cb) {
  var data = {
    'grant_type': 'client_credentials',
    'client_id': "c-JaW8Gywbb6h_68t2TZn2k7BzEAM4eKZZ8qhFlm",
    'client_secret': "Z0uozUuCuzTSEPiCQaQwzDfOGG4lCwxYJfJSvN_Y"
  };

  return $.ajax({
    'url': 'https://api.clarifai.com/v1/token',
    'data': data,
    'type': 'POST'
  })
  .then(function(r) {
    localStorage.setItem('accessToken', r.access_token);
    localStorage.setItem('tokenTimestamp', Math.floor(Date.now() / 1000));
    cb();
  });
}

function postImage(imgurl) {
  var data = {
    'encoded_data': imgurl
  };
  var accessToken = localStorage.getItem('accessToken');

  return $.ajax({
    'url': 'https://api.clarifai.com/v1/tag',
    'headers': {
      'Authorization': 'Bearer ' + accessToken
    },
    'data': data,
    'type': 'POST'
  }).then(function(r){
    parseResponse(r);
  });
}
var tags = [];
function parseResponse(resp) {
  
  if (resp.status_code === 'OK') {
    var results = resp.results;
    tags = results[0].result.tag.classes;

    console.log(tags[0]);
    $('#tags').text = tags[0];
    
  } else {
    console.log('Sorry, something is wrong.');

  }

  $('#tags').text(tags.toString().replace(/,/g, ', '));
  return tags;
}

function run(imgurl) {
  if (localStorage.getItem('tokenTimeStamp') - Math.floor(Date.now() / 1000) > 86400
    || localStorage.getItem('accessToken') === null) {
    getCredentials(function() {
      postImage(imgurl);
    });
  } else {
    postImage(imgurl);
  }
}
