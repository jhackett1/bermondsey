import express from "express"

const server = express()

server.use(express.static("public"))

// fake catchall route for accepting any request
server.use("*", (req, res) => {
  res.status(200).end()
})

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`SERVER: Listening on port ${port} 📡`))
