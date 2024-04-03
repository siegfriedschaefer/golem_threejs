const express = require('express')
const app = express()
const port = 8085
const hostname = '0.0.0.0'

app.use(express.static('public'))

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

