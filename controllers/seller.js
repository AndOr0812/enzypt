const randomstring = require('randomstring')
const jsonParser = require('body-parser').json()

class SellerController {

  static bind (app) {
    app.post('/sell', jsonParser, this.postSell)
  }

  static postSell (req, res, next) {
    const { zipFileHash, metaFileHash } = req.body
    if (!zipFileHash || !metaFileHash) return res.status(400).end()
    const urlSlug = randomstring.generate()
    req.db.collection('sales').insertOne({
      zipFileHash,
      metaFileHash,
      urlSlug
    }, doc => {
      res.send(urlSlug)
    })
  }

}

module.exports = SellerController