var request = require('request')
var dotenv = require('dotenv').config()
var assert = require('assert')

var expected = "“Quotation is a serviceable substitute for wit.” – Oscar Wilde"

describe("Github", function() {
  var url = "https://api.github.com/repos/pietersv/github/contents/message.txt"
  it ("GET a file" , function(done) {
    var args = {
      url: url,
      json:true,
      headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + process.env.GITHUB_TOKEN
      }
    };
    
    request.get(args, function(err, response, body) {
      if (err) throw err;
      request.get(body.download_url, function(err, response, body) {
        if (err) throw err;
        console.log(body)
        assert.equal(body, expected)
        done()
      })
    })
  })
})

