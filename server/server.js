const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')

mongoose.connect(config.mongoUri,
  { autoIndex: false},
  () => console.log('server connected to mongo atlas')
)

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.PORT || 3001
const server = http.createServer(app)
server.listen(port, () => console.log(`server listening on port ${port}`))