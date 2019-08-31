const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // let stream = res.push('/gits.png', {response: {'content-type': 'image/png'}})
    res.sendFile(process.cwd() + '/static/index.html');
});
app.use(express.static('static'));

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))

/*

After mucking around for a bit, I learned that this script was mostly useless. Kind of amazingly:

* Express used to support server push, via a push function on the res object, but doesn't do so
  anymore. So 2016-era tutorials explaining how to do server push via Express, like this one,
  are wrong: https://webapplog.com/http2-server-push-node-express/.
* Express does not support HTTP/2, period. I am not sure how it supported server push without
  supporting HTTP/2, then?
* HTTP/2 support was not stable in Node.JS until Node 10.0, which was released in 2018! That's
  amazing! The HTTP/2 spec was published in May 2015!
* It's considered best practice to run an Express server proxied behind NGINX or similar, and to
  have NGINX handle static asset concerns.
*/