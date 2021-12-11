import noble from "@abandonware/noble"
// import Webcam from "node-webcam"
import fetch from "cross-fetch"
// import config from "./config.json"
import { getFriends, addFriend } from "./db"

require("dotenv").config()

// const webcam = Webcam.create()
// const capture = promisify(webcam.capture)

// cameralib.capture().pipe(f)

// console.log(`Capturing frames at ${config.fps}fps...`)

// const captureLoop = async () => {
//   // const { err, data } = await capture("tmp/frame")

// }

// setInterval(captureLoop, config.fps * 1000)
