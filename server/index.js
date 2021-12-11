const express = require("express")

const server = express()

// fake catchall route for accepting any request
server.all("*", (req, res) => {
  res.status(200).end()
})

const port = process.env.PORT || 3000

server.listen(() => console.log(`Listening on port ${port}...`), port)
