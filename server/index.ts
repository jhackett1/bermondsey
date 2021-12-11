import express from "express"
import fs from "fs"
import bodyParser from "body-parser"
import path from "path"

const server = express()

server.use(bodyParser.text())

server.use(express.static("public"))

// fake catchall route for accepting any request
server.use("*", (req, res) => {
  console.log(req.body)

  const filePath = path.join(__dirname, `/image.jpg`)
  const stream = fs.createWriteStream(filePath)

  stream.on("open", () => req.pipe(stream))

  // fs.writeFile("./test.jpeg", req.body, () => {

  //   console.l

  //   res.status(200).end()
  // })
})

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`SERVER: Listening on port ${port} 📡`))
