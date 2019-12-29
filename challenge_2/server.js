var express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()
app.use(bodyParser.json())


var urlencode = bodyParser.urlencoded({ extended: false })

app.post('/uploader/',urlencode, function (req,res){
  data = req.body
  console.log(req.body)
  res.end(" \n\n\n" + data)
})

app.listen(port, () => console.log(` app listening on port ${port}!`))


