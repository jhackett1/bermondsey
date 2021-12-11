// import noble from "@abandonware/noble"
// import Camera from "camera"
// import fetch from "cross-fetch"
// import fs from "fs"
// import config from "./config.json"
// import { getFriends, addFriend } from "./db"

import * as cv from "opencv4nodejs"

require("dotenv").config()

const webcam = Camera.createStream()

webcam.on("data", buffer => {
  fs.writeFileSync("cam.png", buffer)
})

// console.log(`Capturing frames at ${config.fps}fps...`)

// const captureLoop = async () => {
//   // const { err, data } = await capture("tmp/frame")

// }

// setInterval(captureLoop, config.fps * 1000)
