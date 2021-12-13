import express from "express"
import fs from "fs"
import bodyParser from "body-parser"
import path from "path"
import ws, { WebSocketServer } from "ws"

const app = express()

app.use(bodyParser.text())

app.use(express.static("public"))

// fake catchall route for accepting any request
// app.use("*", (req, res) => {
//   // console.log(req.body)
//   // const filePath = path.join(__dirname, `/image.jpg`)
//   // const stream = fs.createWriteStream(filePath)
//   // stream.on("open", () => req.pipe(stream))
// })

const port = process.env.PORT || 3000

const server = app.listen(port, () =>
  console.log(`Listening on port ${port} 📡`)
)

const wss = new WebSocketServer({ server })

wss.on("connection", socket => {
  socket.on("message", async message => {
    await fs.writeFileSync(
      `./public/image.jpg`,
      message?.toString()?.split(";base64,")?.pop() || "",
      { encoding: "base64" }
    )
  })
})
